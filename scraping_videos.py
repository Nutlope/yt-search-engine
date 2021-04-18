# This script will scrape all video name and URLs from a channel and store them in a JSON file

from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import os
import json

driver = webdriver.Chrome('../../Downloads/chromedriver')
channel = 'https://www.youtube.com/c/Nutlope/videos'
driver.get(channel)
video = driver.find_element_by_tag_name('html')
video_list = driver.find_elements_by_xpath('//*[@id="items"]/ytd-grid-video-renderer')
data = {}
data['video_urls'] = []
idx = 0

for item in video_list:
    data['video_urls'].append({
        'id': idx,
        'name': item.find_element_by_css_selector('#video-title').text,
        'video_url': item.find_element_by_css_selector('#thumbnail').get_attribute('href')
    })
    print(item.find_element_by_css_selector('#video-title'))
    idx += 1

with open('nutlope_transcriptions.json', 'w') as outfile:
    json.dump(data, outfile, indent=1)