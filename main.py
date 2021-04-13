import subprocess
url = "https://www.youtube.com/watch?v=49_FlYOSxgE&ab_channel=BenLionelScott"
process = subprocess.run(["youtube-dl", "--extract-audio", "--audio-format", "wav", "-o something.wav", url], universal_newlines=True)
# output is in process.stdout

# Old way of doing it
# import os

# url = "https://www.youtube.com/watch?v=49_FlYOSxgE&ab_channel=BenLionelScott"
# os.system('youtube-dl --extract-audio --audio-format wav -o something.wav {}'.format(url))