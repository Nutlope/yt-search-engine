import speech_recognition as sr
import wave
import contextlib

# Configuration
fileName = "audio/1.wav" # name of file to be transcribed
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
    with curFile as source:
        if noise:
            # Eliminates background noise for audio with background noise/music
            print("Eliminating background noise...")
            r.adjust_for_ambient_noise(source, duration=0.5)
        audio = r.record(source, duration=30, offset=offset)
        try:
            result += r.recognize_google(audio_data = audio, language = "en-" + dialect)
        except sr.UnknownValueError:
            print("Could not understand audio")
        except sr.RequestError as e:
            print("Could not request results from the service; {0}".format(e))
print("translation is: ", result)