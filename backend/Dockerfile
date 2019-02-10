FROM nikolaik/python-nodejs:latest
ADD . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install Image

CMD ["python", "run.py"]
