FROM nikolaik/python-nodejs:latest
ADD . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "run.py"]
