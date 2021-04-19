import json

vidInfo = {}
with open ("ali_abdaal_vid_info.json", "r") as outfile:
    vidInfo = json.load(outfile)

fileName = "41.wav"
idx = int(fileName[:-4])
print(type(idx))
print(idx)
print(vidInfo["video_urls"][idx]["id"])