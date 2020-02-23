# coding:utf-8
from flask import Flask, jsonify, make_response, request, Response
import youtube_dl

app = Flask(__name__)

def downloadMedia(url, op):
    with youtube_dl.YoutubeDL(op) as ydl:
        ydl.download([url])

def responseJSON(url):
    status = 0
    if url != "":
        status = "OK"
    else:
        status = "Error"
    response = {
            "data": {
                "status": status,
                "url": url
                }
            }
    return response

@app.route('/md/api/mp3', methods=['POST'])
def downloadMp3():
    options = {
            'format': 'bestaudio[ext=mp3]/bestaudio[ext=m4a]/bestaudio',
            'outtmpl': './Music/%(title)s-%(id)s.%(ext)s'
            }

    ID = request.args.get("id")
    URL = "https://www.youtube.com/watch?v="+ID

    downloadMedia(URL, options)
    return jsonify(responseJSON(URL))

@app.route('/md/api/mp4', methods=['POST'])
def downloadMp4():
    options = {
            'format': 'bestvideo[ext=mp4]/bestvideo',
            'outtmpl': './Music/%(title)s-%(id)s.%(ext)s'
            }

    ID = request.args.get("id")
    URL = "https://www.youtube.com/watch?v="+ID

    downloadMedia(URL, options)
    return jsonify(responseJSON(URL))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5288)
