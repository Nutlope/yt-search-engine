import json

# Vid Transcripts
vidTranscriptions = {}
with open ("JSON/final_transcripts.json", "r") as outfile:
    vidTranscriptions = json.load(outfile)

vidList = []
for vid in vidTranscriptions:
    vidList.append(vid["id"])

print(len(vidList))

# Vid Info
vidInfo = {}
with open ("JSON/ali_abdaal_vid_info.json", "r") as outfile:
    vidInfo = json.load(outfile)

vidInfoList = []
for vid in vidInfo["video_urls"]:
    vidInfoList.append(vid["id"])

# Missing videos
missingVids = []
for vid in vidInfoList:
    if vid not in vidList:
        missingVids.append(vid)

print(len(missingVids))