from flask import Flask, jsonify, make_response
from flask import request
from flask_sqlalchemy import SQLAlchemy
import json
import sys
from flask_cors import CORS, cross_origin
from flask import send_file
from flask_marshmallow import Marshmallow
from werkzeug.security import safe_str_cmp
from functools import wraps
import jwt
import datetime
from flask_bcrypt import Bcrypt

print(sys.path)
app = Flask(__name__)
ma = Marshmallow(app)
CORS(app, support_credentials=True)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
app.config['SECRET_KEY'] = 'JustStringForTokenForSumitFitness'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///gymDB.sqlite"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    gender = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)

class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id", "name", "email", "password", "gender", "age")

    # Smart hyperlinking
    _links = ma.Hyperlinks(
        {
            "self": ma.URLFor("user_detail", values=dict(id="<id>")),
            "collection": ma.URLFor("users"),
        }
    )

user_schema = UserSchema()
users_schema = UserSchema(many=True)

def __init__(self, name, email, password, gender, age):
   self.name = name
   self.email = email
   self.password = password
   self.gender = gender
   self.age = age
   
def authenticate(func):
    @wraps(func)
    def wrapped(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({"message": "Missing token"}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return jsonify({"message": "Invalid token"}), 403
        return func(*args, **kwargs)
    return wrapped

@app.route('/', methods=['GET'])
def home():
    return "Your welcome to sumit fitness"

@app.route('/download/', methods=['GET'])
@authenticate
def download():
    users = User.query.all()
    userJson = users_schema.dump(users)
    a_file = open("users.json", "w")
    json.dump(userJson, a_file)
    a_file.close()
    path = "users.json"
    return send_file(path, as_attachment=True)

@app.route('/api/login/', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    input = json.loads(request.data)
    email = input['email']
    password = input['password']
    user = User.query.filter(User.email.in_([email])).first()
    if not user:
        return jsonify({'message': 'Email is not registered'}), 403
    token = jwt.encode({ 'user': email }, app.config['SECRET_KEY'], algorithm="HS256")
    if bcrypt.check_password_hash(user.password, password):
        return jsonify({'token': token }), 201
    else:
        return jsonify({'message': 'Password mismatch'}), 403


@app.route('/api/register/', methods=['POST'])
@cross_origin(supports_credentials=True)
def register():
    input = json.loads(request.data)
    user = User.query.filter(User.email.in_([input['email']])).first()
    if user:
        return jsonify({'message': 'Email already registered'}), 400
    hashedPassword = bcrypt.generate_password_hash(input['password'])
    user = User(name = input['name'], email = input['email'], password = hashedPassword, gender = input['gender'], age = input['age'])
    db.session.add(user)
    db.session.commit()
    response = app.response_class(
        status = 201,
    )
    return response

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=105)