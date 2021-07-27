from flask import Flask, jsonify, make_response, render_template
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
    type = db.Column(db.String, nullable=False, default='member')
    membership_id = db.Column(db.Integer, db.ForeignKey('membership.id'), nullable=False)
    
class Membership(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    members = db.relationship('User', backref='member', lazy = True)

class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id", "name", "email", "password", "gender", "age", "type", "membership_id")

    # Smart hyperlinking
    _links = ma.Hyperlinks(
        {
            "self": ma.URLFor("user_detail", values=dict(id="<id>")),
            "collection": ma.URLFor("users"),
        }
    )

class MembershipSchema(ma.Schema):
    members = ma.Nested(UserSchema, many=True)
    class Meta:
        # Fields to expose
        fields = ("id", "title", "cost", "members")

    # Smart hyperlinking
    _links = ma.Hyperlinks(
        {
            "self": ma.URLFor("membership_detail", values=dict(id="<id>")),
            "collection": ma.URLFor("memberships"),
        }
    )

user_schema = UserSchema()
users_schema = UserSchema(many=True)

membership_schema = MembershipSchema()
memberships_schema = MembershipSchema(many=True)

db.create_all()
   
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
    return render_template('index.html')

@app.route('/initialize', methods=['PUT'])
def initialize():
    User.query.delete()
    Membership.query.delete()
    membership = Membership(title = "Monthly", cost = 30.00)
    db.session.add(membership)
    db.session.commit()
    membership = Membership(title = "Quarterly", cost = 80.00)
    db.session.add(membership)
    db.session.commit()
    membership = Membership(title = "Yearly", cost = 200.00)
    db.session.add(membership)
    db.session.commit()
    hashedPassword = bcrypt.generate_password_hash('iamadmin')
    User.query.delete()
    user = User(name = "Admin", email = "sumitfitness@admin.com", password = hashedPassword, gender = "male", age = 35, type="admin", membership_id = 1)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': "done"}), 201

@app.route('/download/', methods=['GET'])
@authenticate
def download():
    list = Membership.query.all()
    jsonData = memberships_schema.dump(list)
    a_file = open("users.json", "w")
    json.dump(jsonData, a_file)
    a_file.close()
    path = "users.json"
    return send_file(path, as_attachment=True)

@app.route('/api/memberships/', methods=['GET'])
def membershipList():
    list = Membership.query.with_entities(Membership.id, Membership.title, Membership.cost).all()
    membershipJson = memberships_schema.dump(list)
    return jsonify({ 'list' : membershipJson })

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
    userJson = user_schema.dump(user)
    membership = Membership.query.with_entities(Membership.title, Membership.cost).filter(Membership.id.in_([user.membership_id])).first()
    membershipJson = membership_schema.dump(membership)
    if bcrypt.check_password_hash(user.password, password):
        return jsonify({'token': token, 'user': userJson, 'membership': membershipJson }), 201
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
    user = User(name = input['name'], email = input['email'], password = hashedPassword, gender = input['gender'], age = input['age'], membership_id = input['membership_id'])
    db.session.add(user)
    db.session.commit()
    userJson = user_schema.dump(user)
    response = jsonify({
        'user': userJson
    }), 201
    return response

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=105)