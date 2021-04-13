# YouTube Downloader & Text Transcriber

This program will be able to download youtube videos using youtube-dl and ffmpeg, then transcribe them using the SpeechRecognition python library. Specifically, Google Speech Recognition is used.

## Usage

1. Run the download_yt.py file and change the url to the YouTube video you want to download
2. Run transcribe_audio.py to get the transcripts.

## Work to be Done

I'd like to turn this project into a search engine for one of my favorite creators, Ali Abdaal. I'd like to have a searchable database for all his videos for easy lookup.

- [ ] Fairly accurate but it's only getting the first 30 seconds due to not having a google API key. Get this google API key and verify this issue
- [ ] Use selenium to scrape all ali abdaal YouTube vids
- [ ] Run the program overnight, get all text into JSON
- [ ] Make frontend for search engine with Django
- [ ] Put JSON data into postgres DB & connect
