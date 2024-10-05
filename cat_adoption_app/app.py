from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data: you can later replace this with database queries
cats = [
    {"name": "Purris Hilton", "zodiac_sign": "Aquarius"},
    {"name": "Furrell Williams", "zodiac_sign": "Pisces"},
    {"name": "Meowly Cyrus", "zodiac_sign": "Aries"},
    {"name": "Catrina Aguilera", "zodiac_sign": "Taurus"},
    {"name": "Whisker Elliott", "zodiac_sign": "Gemini"},
    {"name": "Catrick Swayze", "zodiac_sign": "Cancer"},
    {"name": "Catthrine Zeta-Jones", "zodiac_sign": "Leo"},
    {"name": "Paw Diddy", "zodiac_sign": "Virgo"},
    {"name": "Taylor Purrift", "zodiac_sign": "Libra"},
    {"name": "J.Loaf", "zodiac_sign": "Scorpio"},
]

@app.route('/api/cats', methods=['GET'])
def get_cats():
    user_zodiac = request.args.get('zodiac_sign')  # Get zodiac sign from query params
    matched_cats = [cat for cat in cats if cat['zodiac_sign'] == user_zodiac]
    return jsonify(matched_cats)

if __name__ == '__main__':
    app.run(debug=True)
