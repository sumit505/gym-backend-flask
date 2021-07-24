from flask import Flask
from flask import request
from flask import jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
import json
import sys
from flask_cors import CORS, cross_origin

print(sys.path)
app = Flask(__name__)
CORS(app, support_credentials=True)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///gymDB.sqlite"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    gender = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)

def __init__(self, name, email, password, gender, age):
   self.name = name
   self.email = email
   self.password = password
   self.gender = gender
   self.age = age

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    users = User.query.all()
    response = app.response_class(
        response = json.dumps(User.serialize_list(users)),
        status = 201,
        mimetype='application/json'
    )
    return response

@app.route('/api/login/', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    input = json.loads(request.data)
    email = input['email']
    password = input['password']
    user = User.query.filter(User.email.in_([email])).first()
    if user.password == password:
        return app.response_class(
            response = "Login successful",
            status = 201    
        )
    else:
        return app.response_class(
            response = "Email/Password incorrect",
            status = 400    
        )


@app.route('/api/register/', methods=['POST'])
@cross_origin(supports_credentials=True)
def register():
    input = json.loads(request.data)
    user = User(name = input['name'], email = input['email'], password = input['password'], gender = input['gender'], age = input['age'])
    db.session.add(user)
    db.session.commit()
    response = app.response_class(
        status = 201,
    )
    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=105)