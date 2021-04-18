# This script will scrape all video name and URLs from a channel and store them in a JSON file
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import os
import json

driver = webdriver.Chrome('../../Downloads/chromedriver')
channel = 'https://www.youtube.com/c/aliabdaal/videos'
driver.get(channel)

# Scroll to the bottom of the page
driver.execute_script("window.scrollTo(0, 1080)")
time.sleep(10) # to scroll some more if you need to

# Get list of WebDriver elements that correspond to videos
video = driver.find_element_by_tag_name('html')
video_list = driver.find_elements_by_xpath('//*[@id="items"]/ytd-grid-video-renderer')
data = {}
data['video_urls'] = []
idx = 0

print(video_list)
# Populate data array with all info
for item in video_list:
    data['video_urls'].append({
        'id': idx,
        'name': item.find_element_by_css_selector('#video-title').text,
        'video_url': item.find_element_by_css_selector('#thumbnail').get_attribute('href')
    })
    idx += 1

# Populate JSON file with object of video info
with open('ali_abdaal_transcriptions.json', 'w') as outfile:
    json.dump(data, outfile, indent=1)