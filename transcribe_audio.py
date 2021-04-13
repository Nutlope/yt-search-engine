import speech_recognition as sr

# Configuration
fileName = "audio_transcripts/svelte.wav" # name of file to be transcribed
recognitionType = 'google' # type of speech recognition (google, wit.ai)
noise = False # indicate True if there is background noise in the audio file

# Transcribing audio file and outputting text to console 
r = sr.Recognizer()
curFile = sr.AudioFile(fileName)
with curFile as source:
    if noise:
        # Eliminates background noise for audio with background noise/music
        print("Eliminating background noise...")
        r.adjust_for_ambient_noise(source, duration=0.5)
    audio = r.record(source)

try:
    if recognitionType == 'google':
        print("The google translation:") # Using google speech recognition
        translation = r.recognize_google(audio)
    elif recognitionType == 'wit.ai':
        print("The wit.ai translation:") # Using wit.ai speech recognition
        WIT_AI_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXX'
        translation = r.recognize_wit(audio, key=WIT_AI_KEY)
    print(translation)
except sr.UnknownValueError:
    print("Could not understand audio")
except sr.RequestError as e:
    print("Could not request results from the service; {0}".format(e))