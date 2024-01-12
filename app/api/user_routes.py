from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/update', methods=["PUT"])
def update_user_info():
    user = User.query.get(current_user.id)
    if user:
        first_name = request.json['first_name']
        last_name = request.json['last_name']
        username = request.json['username']
        email = request.json['email']

        user.firstName = first_name
        user.lastName = last_name
        user.username = username
        user.email = email

        print(f"""
              LOOK HERE: {user.to_dict()}
              """)

        db.session.commit()
        return user.to_dict()
    return { 'message': 'error encountered' }
