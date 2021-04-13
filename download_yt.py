import subprocess

# Downloading YouTube video as a wav audio file
url = "https://www.youtube.com/watch?v=rv3Yq-B8qp4&ab_channel=Fireship"
process = subprocess.run(["youtube-dl", "--extract-audio", "--audio-format", "wav", url],
                        universal_newlines=True) # output is in process.stdout