import requests

RAPIDAPI_KEY = "0d75345449mshba6db42bd287653p1f4a89jsn3e0db2620cc4"

job_titles = [
    "AI Solutions Architect", "Technical Product Manager", 
    "AI Product Designer", "Product Engineer", "MLOps Architect",
    "Full Stack AI Engineer", "Software Architect AI Cloud"
]

url = "https://indeed-indeed.p.rapidapi.com/apisearch"

for title in job_titles:
    params = {
        "v": "2",
        "format": "json",
        "q": title,
        "l": "Augsburg, Germany",
        "radius": "60"
    }
    
    headers = {
        "Content-Type": "application/json",
        "x-rapidapi-host": "indeed-indeed.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
    }
    
    try:
        response = requests.get(url, headers=headers, params=params, timeout=30)
        if response.status_code == 200:
            data = response.json()
            results = data.get("results", [])
            if results:
                print(f"\n📌 Jobs for '{title}':")
                for job in results[:3]:  # Show first 3 results
                    print(f"   - {job.get('jobtitle', 'N/A')} @ {job.get('company', 'N/A')}")
                    print(f"     Location: {job.get('formattedLocation', 'N/A')}")
        else:
            print(f"Error {response.status_code} for '{title}': {response.text[:200]}")
    except Exception as e:
        print(f"Exception for '{title}': {e}")