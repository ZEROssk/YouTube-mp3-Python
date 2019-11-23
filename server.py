# coding:utf-8
from flask import Flask, jsonify, make_response, request, Response
import json

app = Flask(__name__)

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
    json = request.get_json()
    URL = json['url']
    return jsonify(responseJSON(URL))

@app.route('/md/api/mp4', methods=['POST'])
def postJsonMp4():
    json = request.get_json()
    URL = json['url']
    return jsonify(responseJSON(URL))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=3600)

# import youtube_dl
#
# url = input('>Prease enter URL : ')
# options = {
#   'format': 'bestaudio[ext=mp3]/bestaudio[ext=mp3]i/bestaudio'
# }
#
# with youtube_dl.YoutubeDL(options) as ydl:
#     ydl.download([url])
#
# #youtube-dl -saf mp4 list.text

