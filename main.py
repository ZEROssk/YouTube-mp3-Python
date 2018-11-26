from pytube import YouTube

url = input('> Prease enter URL : ')
yurl = YouTube(url)

for list in yurl.streams.all():
    print(ist)

tag = 140
yurl.streams.get_by_itag(tag).download('/Users/zero/Music/iTunes/iTunes Media/Music')
