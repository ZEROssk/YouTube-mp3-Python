import youtube_dl

url = input('>Prease enter URL : ')
options = {
  'format': 'bestaudio[ext=mp3]/bestaudio[ext=mp3]i/bestaudio'
}

with youtube_dl.YoutubeDL(options) as ydl:
    ydl.download([url])

#youtube-dl -saf mp4 list.text

