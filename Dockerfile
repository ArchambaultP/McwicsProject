FROM python:3.7.2-stretch
ADD . /code
WORKDIR /code
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
CMD ["python", "run.py"]
