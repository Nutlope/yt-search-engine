import speech_recognition as sr
import wave
import contextlib
import os
import json
import time
from datetime import datetime

# Configuration
noise = False # True if there is background noise in the audio file, False if there is not
dialect = 'GB' # EN for english accents, GB for british accents 

# Read all the video information
vidInfo = {}
with open ("JSON/ali_abdaal_vid_info.json", "r") as outfile:
    vidInfo = json.load(outfile)

for fileName in os.listdir('audio'):
    fullFileName = 'audio/' + fileName
    # Get duration of the audio file
    with contextlib.closing(wave.open(fullFileName,'r')) as f:
        frames = f.getnframes()
        rate = f.getframerate()
        duration = frames / float(rate)

    # Cutting audio into 15 second chunks
    segments = duration / 15
    offsets = [0]
    for i in range(1, int(segments) + 1):
        if 15 * i < duration:
            offsets.append(15 * i)

    # Transcribing audio file and outputting text to console 
    result = ''
    r = sr.Recognizer()
    curFile = sr.AudioFile(fullFileName)
    for offset in offsets:
        with curFile as source:
            if noise:
                # Eliminates background noise for audio with background noise/music
                print("Eliminating background noise...")
                r.adjust_for_ambient_noise(source, duration=0.5)
            audio = r.record(source, duration=15, offset=offset)
            try:
                result += ' ' + r.recognize_google(audio_data = audio, language = "en-" + dialect)
            except sr.UnknownValueError:
                print("Could not understand audio")
            except sr.RequestError as e:
                print("Could not request results from the service; {0}".format(e))
    print("NEW RESULT")
    print(result)

    # Read current JSON file and append data from video to it
    with open ("JSON/final_transcripts.json", "r") as outfile:
        data = json.load(outfile)
        idx = int(fileName[:-4])
        data["transcripts"].append({
            "id": vidInfo["video_urls"][idx]["id"],
            "name": vidInfo["video_urls"][idx]["name"],
            "video_url": vidInfo["video_urls"][idx]["video_url"],
            "text": result
        })

    # Write updated JSON back to the file
    with open("JSON/final_transcripts.json",'w') as f:
        json.dump(data, f, indent=4)