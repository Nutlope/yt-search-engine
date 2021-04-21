import json

vidTranscriptions = {}
with open ("JSON/final_transcripts.json", "r") as outfile:
    vidTranscriptions = json.load(outfile)

vidList = []
for vid in vidTranscriptions["transcripts"]:
    vidList.append(vid["id"])

print(len(vidList))