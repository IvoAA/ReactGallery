import os
import json
import requests

with open('dataset.json', 'r') as f:
    dataset = json.load(f)

photos = []

url = "https://api.pexels.com/v1/photos/"
headers = {"Authorization": os.environ['PEXELS_API_KEY']} # Replace by your Pexels API key to test

photos = []
details = {}

for photo in dataset:
    response = requests.get(url + str(photo['id']), headers=headers)

    if response.status_code == 200:
        data = response.json()

        photos.append({
            "src": data['src']['large'],
            "width": data['width'],
            "height": data['height']
        })

        details[data['src']['large']] = {
            "photographer": data['photographer'],
            "photographer_url": data['photographer_url']
        }
            

# Two separate files are necessary as the library "react-photo-album" is quite strict with the format of the data it receives

with open('photos.json', 'w') as f:
    json.dump(photos, f)

with open('photographers.json', 'w') as f:
    json.dump(details, f)