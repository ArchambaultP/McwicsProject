FROM nikolaik/python-nodejs:latest
ADD . /code
WORKDIR /code
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN npm install bootstrap
RUN npm install react
RUN npm install react-dom
RUN npm install @material-ui/core
RUN npm install axios
CMD ["python", "run.py"]
