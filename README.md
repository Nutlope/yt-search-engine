# Ali Abdaal Search Engine

![image](https://user-images.githubusercontent.com/63742054/116843039-aa9be480-abac-11eb-82b7-1f5508d4d1d2.png)

This is a search engine of my favorite YouTuber, Ali Abdaal. I used selenium to scrape all his videos, youtube-dl to download them as audio files, and Google Speech Recognition to transcribe the audio files.

I then took all the data and used it to populate a Postgres database hosted on supabase, then built a frontend with React where users can look up phrases and find out how many times and in which videos were they said.

## Technologies Used

- Python (all scripting)
- Selenium (web scraping)
- SpeechRecognition (Google Speech Recognition)
- youtube-dl (downloading videos)
- React & Chakra UI (Frontend)
- Firebase (Hosting & Analytics)
- Supabase (Postgres DataBase)

## Usage

1. Run scraping_vid_info.py to get a JSON file with all the video names and URLs of a channel
2. Run download_yt_vids to download a WAV audio file from each video URL and save it locally
3. Run transcribe_audio.py to transcribe all the audio files and save them in a JSON file
4. Create a database and port the JSON file over there. Then connect it to the frontend and voila!

Progress is being tracked with GitHub Issues and a Kanban board in the [Projects tab](https://github.com/Nutlope/yt-search-engine/projects/1) of this repo.

## Motivation

This project was inspired by [Kalle Hallden's Joe Rogan project](https://www.youtube.com/watch?v=UUnAcrzA0nA&t=7s&ab_channel=KalleHallden). The idea behind it is to have a search engine for my favorite YouTuber so that I can lookup certain phrases / words and find videos where he mentions them.

This could also be applicable to students to use for downloading their professor's lectures and creating a searchable database from it to quickly lookup where certain concepts were mentioned. Another application is for conferences to take all talks, makes them transcribable, and search it. I plan to develop this into a boilerplate anyone can use to create their own search engines starting from video, audio, or text files.
