FROM nikolaik/python-nodejs:latest
ADD . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install Image
RUN pip install w3lib
#RUN pip install google-cloud-vision

CMD ["python", "run.py"]
