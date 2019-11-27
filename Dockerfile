FROM python:3

RUN apt-get update && \
	pip install --upgrade pip && \
	pip install Flask && \
	pip install youtube_dl && \
	pip install -U youtube_dl && \
	pip install ffmpeg

ENV TZ JST-9

CMD ["python","server.py"]

