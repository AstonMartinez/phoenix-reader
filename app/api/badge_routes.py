from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models.user import User
from app.models import db
from sqlalchemy import and_

badge_routes = Blueprint('badges', __name__)

@badge_routes.route('/update', methods=["POST"])
def update_user_badges():
    user = User.query.get(current_user.id)
    user_badges = user.badges
    badges_to_add = request.json['toAdd']
    for badge in badges_to_add:
        user_badges.append(badge)
    print(f"""
          LOOK HERE: {user_badges}
          """)
    db.session.commit()
    return user_badges

@badge_routes.route('/user', methods=["GET"])
def get_user_badges():
    user = User.query.get(current_user.id)
    user_badges = user.badges
    return user_badges
