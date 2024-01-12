from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models.user import User
from app.models.book import Book
from app.models import db
from sqlalchemy import and_

badge_routes = Blueprint('badges', __name__)

def checkBadges(current):
    result = {
        'pages': 0,
        'numBooks': 0,
        'byMonth': { "January": 0, "February": 0, "March": 0, "April": 0, "May": 0, "June": 0, "July": 0, "August": 0, "September": 0, "October": 0, "November": 0, "December": 0 }
    }
    books = Book.query.filter(and_(Book.user == current_user.id, Book.is_finished == True))
    if books:
        for book in books:
            result['numBooks'] += 1
            result['pages'] += book.pages
            result['byMonth'][book.month] += 1

    if result['numBooks'] >= 1:
        if 'Beginner Bookie' not in current:
            current.append('Beginner Bookie')

    if result['byMonth']['January'] >= 2 or result['byMonth']['February'] >= 2 or result['byMonth']['March'] >= 2 or result['byMonth']['April'] >= 2 or result['byMonth']['May'] >= 2 or result['byMonth']['June'] >= 2 or result['byMonth']['July'] >= 2 or result['byMonth']['August'] >= 2 or result['byMonth']['September'] >= 2 or result['byMonth']['October'] >= 2 or result['byMonth']['November'] >= 2 or result['byMonth']['December'] >= 2:
        if 'Apprentice Bookkeeper' not in current:
            current.append('Apprentice Bookkeeper')

    if result['pages'] > 500:
        if 'Pagemaster in Training' not in current:
            current.append('Pagemaster in Training')

    if result['pages'] > 1000:
        if 'Grand Pagemaster' not in current:
            current.append('Grand Pagemaster')

    if result['byMonth']['January'] >= 1:
        if 'January 2024' not in current:
            current.append('January 2024')

    if result['byMonth']['February'] >= 1:
        if 'February 2024' not in current:
            current.append('February 2024')

    if result['byMonth']['March'] >= 1:
        if 'March 2024' not in current:
            current.append('March 2024')

    if result['byMonth']['April'] >= 1:
        if 'April 2024' not in current:
            current.append('April 2024')

    if result['byMonth']['May'] >= 1:
        if 'May 2024' not in current:
            current.append('May 2024')

    if result['byMonth']['June'] >= 1:
        if 'June 2024' not in current:
            current.append('June 2024')

    if result['byMonth']['July'] >= 1:
        if 'July 2024' not in current:
            current.append('July 2024')

    if result['byMonth']['August'] >= 1:
        if 'August 2024' not in current:
            current.append('August 2024')

    if result['byMonth']['September'] >= 1:
        if 'September 2024' not in current:
            current.append('September 2024')

    if result['byMonth']['October'] >= 1:
        if 'October 2024' not in current:
            current.append('October 2024')

    if result['byMonth']['November'] >= 1:
        if 'November 2024' not in current:
            current.append('November 2024')

    if result['byMonth']['December'] >= 1:
        if 'December 2024' not in current:
            current.append('December 2024')

    monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    for i in range(0, 10):
        curr = monthsInYear[i]
        second = monthsInYear[i+1]
        third = monthsInYear[i+2]

        if result['byMonth'][curr] >= 1 and result['byMonth'][second] >= 1 and result['byMonth'][third] >= 1:
            if 'Certified Book Fiend' not in current:
                current.append('Certified Book Fiend')

    # print(f"""
    #         LOOK HERE: {current}
    #         """)
    return current


@badge_routes.route('/update', methods=["PUT"])
def update_user_badges():
    user = User.query.get(current_user.id)
    user_badges = user.badges
    badges_to_add = request.json['toAdd']
    for badge in badges_to_add:
        user_badges.append(badge)

    db.session.commit()
    return user_badges

@badge_routes.route('/user', methods=["GET"])
def get_user_badges():
    user = User.query.get(current_user.id)
    if user:
        user_badges = user.badges
        updated_user_badges = checkBadges(user_badges)
        user.badges = updated_user_badges
        db.session.commit()
        return updated_user_badges
    return []
