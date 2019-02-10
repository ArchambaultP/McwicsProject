import os
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
from watson_developer_cloud import VisualRecognitionV3
import requests

from app import create_app

app = create_app()
mongo = PyMongo(app)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/recipes', methods=['GET'])
def get_recipes():
   ingredients = request.args.get("ingredients")
   print(ingredients)
   response = requests.get("http://www.recipepuppy.com/api/?i="+ingredients)
   if response.status_code != 200:
       raise ApiError('GET /tasks/ {}'.format(response.status_code))
   return response.text

@app.route('/fromPicture', methods=['GET','POST'])
def get_picture():
   picture = request.args.get("picture")
   visual_recognition = VisualRecognitionV3(
   '2018-03-19',
   iam_apikey='HBCL4aMb39vjo1In2OaaHY4umNcXwg2xIyw1IAWV2D2F')
   with open(picture, 'rb') as images_file:
       classes = visual_recognition.classify(
           images_file,
           threshold='0.6',
           owners=["IBM"]).get_result()
       #return(json.dumps(classes))
       response = app.response_class(
       response=json.dumps(classes),
       status=200,
       mimetype='application/json')
       response.headers.add('Access-Control-Allow-Origin', '*')
       return response;

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3050, debug=True)
