import requests

RAPIDAPI_KEY = "0d75345449mshba6db42bd287653p1f4a89jsn3e0db2620cc4"
url = "https://jsearch.p.rapidapi.com/search"
job_titles = [
    "AI Solutions Architect", "Technical Product Manager", 
    "AI Product Designer", "Product Engineer", "MLOps Architect",
    "Full Stack AI Engineer", "Software Architect AI Cloud"
]

params = {
    "query": " OR ".join(f'"{t}"' for t in job_titles),
    "location": "Augsburg, Germany",
    "radius": 60,
    "country": "de",
    "num_results": 10
}

headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=params, timeout=30)
if response.status_code != 200:
    print(f"Error: {response.status_code}")
    print(response.text)
else:
    data = response.json()
    for job in data.get("data", []):
        print(f"📌 {job.get('job_title')} @ {job.get('employer_name')}")
        print(f"   Location: {job.get('job_location')}")
        desc = job.get("job_description", "").lower()
        for kw in ["requirements", "qualifications", "was du mitbringst", "anforderungen"]:
            idx = desc.find(kw)
            if idx != -1:
                print(f"   Requirements: {desc[idx:idx+400]}...")
                break
        print("-"*80)