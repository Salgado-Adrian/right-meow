from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#update
# Sample data: you can later replace this with database queries
cats = [
     {"name": "Taylor Swift", "zodiac_sign": "Pisces"},
    {"name": "Drake", "zodiac_sign": "Scorpio"},
    {"name": "Beyoncé", "zodiac_sign": "Leo"},
    {"name": "Katy Perry", "zodiac_sign": "Gemini"},
    {"name": "Kanye West", "zodiac_sign": "Libra"},
    {"name": "Ariana Grande", "zodiac_sign": "Cancer"},
    {"name": "Bruno Mars", "zodiac_sign": "Aries"},
    {"name": "Billie Eilish", "zodiac_sign": "Aquarius"},
    {"name": "Justin Bieber", "zodiac_sign": "Sagittarius"},
    {"name": "Selena Gomez", "zodiac_sign": "Taurus"},
    {"name": "Rihanna", "zodiac_sign": "Pisces"},
    {"name": "Ed Sheeran", "zodiac_sign": "Libra"},
    {"name": "Lady Gaga", "zodiac_sign": "Aries"},
    {"name": "Post Malone", "zodiac_sign": "Cancer"},
    {"name": "Shawn Mendes", "zodiac_sign": "Gemini"},
    {"name": "Demi Lovato", "zodiac_sign": "Aquarius"},
    {"name": "Camila Cabello", "zodiac_sign": "Leo"},
    {"name": "Miley Cyrus", "zodiac_sign": "Sagittarius"},
    {"name": "Cardi B", "zodiac_sign": "Libra"},
    {"name": "Halsey", "zodiac_sign": "Capricorn"},
    {"name": "Snoop Dogg", "zodiac_sign": "Libra"},
    {"name": "Kendrick Lamar", "zodiac_sign": "Taurus"},
    {"name": "J Cole", "zodiac_sign": "Virgo"},
    {"name": "Travis Scott", "zodiac_sign": "Aquarius"},
    {"name": "Lizzo", "zodiac_sign": "Scorpio"},
    {"name": "Bebe Rexha", "zodiac_sign": "Taurus"},
    {"name": "Megan Thee Stallion", "zodiac_sign": "Aquarius"},
    {"name": "Lil Nas X", "zodiac_sign": "Leo"},
    {"name": "Olivia Rodrigo", "zodiac_sign": "Leo"},
    {"name": "Zayn Malik", "zodiac_sign": "Aquarius"},
    {"name": "Billie Eilish", "zodiac_sign": "Aquarius"},
    {"name": "John Legend", "zodiac_sign": "Capricorn"},
    {"name": "Adele", "zodiac_sign": "Taurus"},
    {"name": "The Weeknd", "zodiac_sign": "Aquarius"},
    {"name": "Harry Styles", "zodiac_sign": "Aquarius"},
    {"name": "Kylie Jenner", "zodiac_sign": "Leo"},
    {"name": "Kim Kardashian", "zodiac_sign": "Libra"},
    {"name": "Katy Perry", "zodiac_sign": "Gemini"},
    {"name": "Dwayne Johnson", "zodiac_sign": "Taurus"},
    {"name": "Chris Hemsworth", "zodiac_sign": "Leo"},
    {"name": "Natalie Portman", "zodiac_sign": "Gemini"},
    {"name": "Emma Watson", "zodiac_sign": "Aries"},
    {"name": "Leonardo DiCaprio", "zodiac_sign": "Scorpio"},
    {"name": "Scarlett Johansson", "zodiac_sign": "Sagittarius"},
    {"name": "Tom Hanks", "zodiac_sign": "Libra"},
    {"name": "Will Smith", "zodiac_sign": "Libra"},
    {"name": "Jennifer Lawrence", "zodiac_sign": "Leo"},
    {"name": "Ryan Reynolds", "zodiac_sign": "Scorpio"},
    {"name": "Emma Stone", "zodiac_sign": "Sagittarius"},
    {"name": "Gal Gadot", "zodiac_sign": "Gemini"},
    # Add more cats as needed
]

@app.route('/api/cats/all', methods=['GET'])
def get_all_cats():
    return jsonify(cats)


if __name__ == '__main__':
    app.run(debug=True)
