import speech_recognition as sr

# Configuration
fileName = "audio_transcripts/harvard.wav" # name of file to be transcribed
recognitionType = 'google' # type of speech recognition (google, wit.ai)

# Transcribing audio file and outputting text to console 
r = sr.Recognizer()
motivational = sr.AudioFile(fileName)
with motivational as source:
    audio = r.record(source)

if recognitionType == 'google':
    print("The google translation:") # Using google speech recognition
    text = r.recognize_google(audio)
elif recognitionType == 'wit.ai':
    print("The wit.ai translation:") # Using wit.ai speech recognition
    WIT_AI_KEY = 'NTMKQ4AE7B633R4WRGJCLBZPB5XFFDTC'
    text = r.recognize_wit(audio, key=WIT_AI_KEY)
print(text)

