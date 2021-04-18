import subprocess
import json

# Get list of URLs to download
data = {}
with open ('ali_abdaal_vid_info.json', 'r') as outfile:
    data = json.load(outfile)

# Downloading YouTube videos as wav audio files
limit = 0
for vid in data["video_urls"]:
    url = vid['video_url']
    process = subprocess.run(["youtube-dl", "--extract-audio", 
                        "--audio-format", "wav", "-o", 
                        "audio/{}.%(ext)s".format(vid['id']), url], 
                        universal_newlines=True)
    print("video {} done".format(vid['id']))
    limit += 1
    if limit > 2: break