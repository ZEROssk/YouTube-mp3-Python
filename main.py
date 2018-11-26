import youtube_dl

url = input('> Prease enter URL : ')
options = {
  'format': 'bestaudio[ext=mp3]/bestaudio[ext=mp3]/bestaudio'
}

with youtube_dl.YoutubeDL(options) as ydl:
    ydl.download([url])

