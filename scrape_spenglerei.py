import scrapy
from scrapy.crawler import CrawlerProcess
import os

class PetersSpider(scrapy.Spider):
    name = 'peters'
    allowed_domains = ['spenglerei-peters.de']
    start_urls = ['https://www.spenglerei-peters.de/']

    downloaded_images = set()

    def parse(self, response):
        image_urls = []
        
        for img in response.css('img'):
            src = img.attrib.get('src', '')
            if src:
                image_urls.append(response.urljoin(src))
        
        all_links = [response.urljoin(href) for href in response.css('a::attr(href)').getall()]
        
        internal_links = [link for link in all_links if link.startswith('https://www.spenglerei-peters.de/') and '#' not in link]

        yield {
            'url': response.url,
            'title': response.css('title::text').get().strip() if response.css('title::text').get() else '',
            'h1': response.css('h1::text').getall(),
            'text': ' '.join(response.css('p::text, span::text, li::text, h2::text, h3::text, h4::text, td::text, th::text').getall()),
            'image_urls': image_urls,
        }

        for img_url in image_urls:
            if img_url not in self.downloaded_images:
                self.downloaded_images.add(img_url)
                yield scrapy.Request(img_url, self.download_image)

        for link in internal_links:
            if link != response.url and link not in self.crawled_urls:
                self.crawled_urls.add(link)
                yield scrapy.Request(link, self.parse)

    def download_image(self, response):
        filename = response.url.split('/')[-1].split('?')[0]
        if not filename or '.' not in filename:
            ext = response.headers.get('Content-Type', b'image/jpeg').decode()
            ext = ext.split('/')[-1] if '/' in ext else 'jpg'
            filename = f"image_{hash(response.url)}.{ext}"
        os.makedirs('images', exist_ok=True)
        filepath = f'images/{filename}'
        with open(filepath, 'wb') as f:
            f.write(response.body)

    def __init__(self):
        self.crawled_urls = set()

process = CrawlerProcess(settings={
    'FEED_FORMAT': 'jsonlines',
    'FEED_URI': 'spenglerei_output.jsonl',
    'ROBOTSTXT_OBEY': True,
    'CONCURRENT_REQUESTS': 4,
    'DOWNLOAD_DELAY': 0.5,
})
process.crawl(PetersSpider)
process.start()