import speech_recognition as sr
import wave
import contextlib
import os
import json
import time

# master = {}
# for fileName in os.listdir('audio'):

# Configuration
fileName = "audio/10.wav" # name of file to be transcribed
noise = False # True if there is background noise in the audio file, False if there is not
dialect = 'GB' # EN for english accents, GB for british accents 

# Get duration of the audio file
with contextlib.closing(wave.open(fileName,'r')) as f:
    frames = f.getnframes()
    rate = f.getframerate()
    duration = frames / float(rate)

# Cutting audio into 30 second chunks
segments = duration / 30
offsets = [0]
for i in range(1, int(segments) + 1):
    if 30 * i < duration:
        offsets.append(30 * i)

# Transcribing audio file and outputting text to console 
result = ''
r = sr.Recognizer()
curFile = sr.AudioFile(fileName)
for offset in offsets:
    print(offset)
    with curFile as source:
        if noise:
            # Eliminates background noise for audio with background noise/music
            print("Eliminating background noise...")
            r.adjust_for_ambient_noise(source, duration=0.5)
        audio = r.record(source, duration=20, offset=offset)
        try:
            # result += ' ' + r.recognize_google(audio_data = audio, language = "en-" + dialect)
            print(r.recognize_google(audio_data = audio, language = "en-" + dialect))
        except sr.UnknownValueError:
            print("Could not understand audio")
        except sr.RequestError as e:
            print("Could not request results from the service; {0}".format(e))
print("translation is: ", result)

# master['0'] = result

# # Write master dict with all transcripts to a JSON file
# with open ('transcripts.json', 'w') as outfile:
#     json.dump(master, outfile)

# Problem with some of the 30 seconds being cut out, looks like some are being limited to 15 seconds for some reason
# Going to try to make duration 15 seconds instead of 30 to see if that helps