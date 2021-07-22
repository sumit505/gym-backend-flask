from flask import Flask
from flask import request
from flask import jsonify
import json
import sys
from flask_cors import CORS, cross_origin

print(sys.path)
app = Flask(__name__)
CORS(app, support_credentials=True)

users = [
    {
        "email": "ritwikmath@gmail.com",
        "name": "Ritwik Math",
        "password": "12345678"
    }
]

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

@app.route('/api/login/', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    input = json.loads(request.data)
    return next((user for user in users if user['email'] == input['email']), None)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=105)