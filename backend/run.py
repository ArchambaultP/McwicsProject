import os
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
import requests

from app import create_app

app = create_app()
mongo = PyMongo(app)
CORS(app)

@app.route('/recipes', methods=['GET'])
def get_recipes():
   ingredients = request.args.get("ingredients")
   print(ingredients)
   response = requests.get("http://www.recipepuppy.com/api/?i="+ingredients)
   if response.status_code != 200:
       raise ApiError('GET /tasks/ {}'.format(response.status_code))
   return response.text

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3050, debug=True)
