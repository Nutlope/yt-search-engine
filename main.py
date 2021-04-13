import subprocess
import speech_recognition as sr

# Downloading YouTube video as a wav audio file
url = "https://www.youtube.com/watch?v=49_FlYOSxgE&ab_channel=BenLionelScott"
process = subprocess.run(["youtube-dl", "--extract-audio", "--audio-format", "wav", "-o something.wav", url], 
                        universal_newlines=True) # output is in process.stdout

# Transcribing audio file and outputting text
r = sr.Recognizer()
motivational = sr.AudioFile("something.wav")
with motivational as source:
    audio = r.record(source)

text = r.recognize_google(audio)
print(text)