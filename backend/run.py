import os
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
from watson_developer_cloud import VisualRecognitionV3
import requests
from PIL import Image
import io, base64

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
   picture = request.data#request.args.get("picture") 
   from base64 import b64decode

   #from w3lib.url import parse_data_uri
   #image = parse_data_uri(picture).data

   png_arr= bytes(picture)#"data:image/png;base64,iVBORw0KGg..."
   png_arr = png_arr.split(",")
   png_arr = png_arr[1]

   fh = open("temp.png", "wb")
   fh.write(base64.decodestring(png_arr))
   fh.close()

   #detect_labels(picture);
   #header, encoded = picture.split(",", 1)
   #data = b64decode(encoded)
   #picture += "=" * ((4 - len(picture) % 4) % 4)  

   #imgdata = base64.urlsafe_b64decode(picture)
   #filename = 'temp.png'  # I assume you have a way of picking unique filenames
   #with open(filename, 'wb') as f:
   #     f.write(imgdata)
   #     f.close();


   #imgdata = base64.b64decode(imgstring)
   #filename = 'temp.png'  # I assume you have a way of picking unique filenames
   #with open(filename, 'wb') as f:
   #    f.write(imgdata)
   #    f.close()
   #im = Image.open(io.BytesIO(base64.b64decode(picture)))
   #im.save("image.jpg")
   #im.close()

   #visual_recognition = VisualRecognitionV3(
   #'2018-03-19',
   #iam_apikey='HBCL4aMb39vjo1In2OaaHY4umNcXwg2xIyw1IAWV2D2F')
  # with open("temp.png", 'rb') as images_file:
  #     classes = visual_recognition.classify(
  #         images_file,
  #         threshold='0.6',
   #        owners=["IBM"]).get_result()
       #return(json.dumps(classes))
   #    response = app.response_class(
   #    response=json.dumps(classes),
   #    status=200,
   #    mimetype='application/json')
   #    response.headers.add('Access-Control-Allow-Origin', '*')
   #    os.system("rm image.png")
   #    return response;
def detect_labels(path):
    """Detects labels in the file."""
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.label_detection(image=image)
    labels = response.label_annotations
    print('Labels:')

    for label in labels:
        print(label.description)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3050, debug=True)
