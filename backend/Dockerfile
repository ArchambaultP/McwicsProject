FROM nikolaik/python-nodejs:latest
ADD . /code
WORKDIR /code
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "run.py"]
