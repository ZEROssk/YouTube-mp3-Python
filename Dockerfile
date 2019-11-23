FROM python:3

RUN apt-get update && \
	pip install --upgrade pip && \
	pip install Flask

ENV TZ JST-9

CMD ["python","server.py"]

