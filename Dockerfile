FROM nikolaik/python-nodejs:latest
ADD . /code
WORKDIR /code
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN npm install bootstrap
RUN npm install react
RUN npm install react-dom
CMD ["python", "run.py"]
