FROM python:3.7

RUN apt-get update && \
	pip install --upgrade pip && \
	pip install Flask && \
	pip install flask-cors && \
	pip install youtube_dl && \
	pip install --upgrade youtube_dl && \
	pip install ffmpeg

ENV TZ JST-9

CMD ["python3","server.py"]

