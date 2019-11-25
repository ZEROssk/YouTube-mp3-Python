FROM python:3

RUN apt-get update && \
	pip install --upgrade pip && \
	pip install Flask && \
	pip install youtube_dl

ENV TZ JST-9

CMD ["python","server.py"]

