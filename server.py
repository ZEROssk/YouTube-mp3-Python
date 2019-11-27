# coding:utf-8
from flask import Flask, jsonify, make_response, request, Response
import json
import youtube_dl

app = Flask(__name__)

def downloadMedia(url, op):
    with youtube_dl.YoutubeDL(op) as ydl:
        ydl.download([url])

def responseJSON(url):
    status = 0
    if url != "":
        status = 1
    else:
        status = 0
    response = {
            "data": {
                "status": status,
                "url": url
                }
            }
    return response

@app.route('/md/api/mp3', methods=['POST'])
def postJsonMp3():
    options = {
            'format': 'bestaudio[ext=mp3]/bestaudio[ext=m4a]/bestaudio'
            }

    json = request.get_json()
    URL = json['url']

    downloadMedia(URL, options)
    return jsonify(responseJSON(URL))

@app.route('/md/api/mp4', methods=['POST'])
def postJsonMp4():
    options = {
            'format': 'bestaudio[ext=mp3]/bestaudio[ext=mp3]/bestaudio'
            }

    json = request.get_json()
    URL = json['url']

    downloadMedia(URL, options)
    return jsonify(responseJSON(URL))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=3600)

#youtube-dl -saf mp4 list.text

