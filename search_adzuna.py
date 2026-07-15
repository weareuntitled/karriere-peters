import requests

# Adzuna is free - get your key at https://developer.adzuna.com/
# For now using demo credentials (limited)
APP_ID = "demo"  
APP_KEY = "demo"

job_titles = [
    "AI Solutions Architect", "Technical Product Manager", 
    "AI Product Designer", "Product Engineer", "MLOps Architect",
    "Full Stack AI Engineer", "Software Architect"
]

url = "https://api.adzuna.com/v1/api/jobs/de/search/1"

for title in job_titles:
    params = {
        "app_id": APP_ID,
        "app_key": APP_KEY,
        "what": title,
        "where": "Augsburg",
        "distance": "60",
        "results_per_page": 5
    }
    
    try:
        response = requests.get(url, params=params, timeout=30)
        if response.status_code == 200:
            data = response.json()
            results = data.get("results", [])
            if results:
                print(f"\n📌 {title} near Augsburg:")
                for job in results[:3]:
                    print(f"   - {job.get('title')} @ {job.get('company', {}).get('display_name', 'N/A')}")
                    print(f"     Location: {job.get('location', {}).get('display_name', 'N/A')}")
                    print(f"     Link: {job.get('redirect_url', 'N/A')[:80]}...")
            else:
                print(f"No results for '{title}'")
        else:
            print(f"Error {response.status_code} for '{title}'")
    except Exception as e:
        print(f"Exception: {e}")
