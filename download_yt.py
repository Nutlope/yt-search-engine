import subprocess

# Downloading YouTube video as a wav audio file
url = "https://www.youtube.com/watch?v=6Fa5f9_4Oi4&ab_channel=AliAbdaal"
process = subprocess.run(["youtube-dl", "--extract-audio", "--audio-format", "wav", url],
                        universal_newlines=True) # output is in process.stdout