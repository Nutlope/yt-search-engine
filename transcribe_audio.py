import speech_recognition as sr

# Transcribing audio file and outputting text to console
r = sr.Recognizer()
motivational = sr.AudioFile("audio_transcripts/yes.wav")
with motivational as source:
    audio = r.record(source)

text = r.recognize_google(audio)
print(text)