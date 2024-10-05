from flask import Flask, jsonify, request

app = Flask(__name__)

# Static list of cats with their zodiac signs
cats_list = [
    {"name": "Taylor Swift Cat", "zodiac_sign": "Pisces"},
    {"name": "Drake Cat", "zodiac_sign": "Scorpio"},
    {"name": "Beyoncé Cat", "zodiac_sign": "Leo"},
    {"name": "Katy Perry Cat", "zodiac_sign": "Gemini"},
    {"name": "Kanye West Cat", "zodiac_sign": "Libra"},
    {"name": "Ariana Grande Cat", "zodiac_sign": "Cancer"},
    {"name": "Bruno Mars Cat", "zodiac_sign": "Aries"},
    {"name": "Billie Eilish Cat", "zodiac_sign": "Aquarius"},
    {"name": "Justin Bieber Cat", "zodiac_sign": "Sagittarius"},
    {"name": "Selena Gomez Cat", "zodiac_sign": "Taurus"},
]

# Compatibility matrix as a dictionary
compatibility_matrix = {
    "Aries": {"Aries": 50, "Taurus": 38, "Gemini": 83, "Cancer": 97, "Leo": 63, "Virgo": 85, "Libra": 50, "Scorpio": 93, "Sagittarius": 47, "Capricorn": 78, "Aquarius": 67, "Pisces": 38},
    "Taurus": {"Aries": 38, "Taurus": 65, "Gemini": 33, "Cancer": 73, "Leo": 90, "Virgo": 65, "Libra": 88, "Scorpio": 30, "Sagittarius": 98, "Capricorn": 58, "Aquarius": 85, "Pisces": 53},
    "Gemini": {"Aries": 83, "Taurus": 33, "Gemini": 65, "Cancer": 35, "Leo": 90, "Virgo": 43, "Libra": 28, "Scorpio": 60, "Sagittarius": 68, "Capricorn": 85, "Aquarius": 53, "Pisces": 98},
    "Cancer": {"Aries": 97, "Taurus": 73, "Gemini": 35, "Cancer": 45, "Leo": 35, "Virgo": 97, "Libra": 94, "Scorpio": 53, "Sagittarius": 83, "Capricorn": 68, "Aquarius": 88, "Pisces": 38},
    "Leo": {"Aries": 63, "Taurus": 90, "Gemini": 90, "Cancer": 35, "Leo": 65, "Virgo": 68, "Libra": 88, "Scorpio": 48, "Sagittarius": 95, "Capricorn": 30, "Aquarius": 88, "Pisces": 45},
    "Virgo": {"Aries": 85, "Taurus": 65, "Gemini": 43, "Cancer": 97, "Leo": 68, "Virgo": 75, "Libra": 35, "Scorpio": 73, "Sagittarius": 55, "Capricorn": 90, "Aquarius": 88, "Pisces": 88},
    "Libra": {"Aries": 50, "Taurus": 88, "Gemini": 28, "Cancer": 94, "Leo": 58, "Virgo": 88, "Libra": 80, "Scorpio": 28, "Sagittarius": 95, "Capricorn": 73, "Aquarius": 97, "Pisces": 60},
    "Scorpio": {"Aries": 93, "Taurus": 30, "Gemini": 60, "Cancer": 53, "Leo": 93, "Virgo": 48, "Libra": 28, "Scorpio": 73, "Sagittarius": 45, "Capricorn": 60, "Aquarius": 90, "Pisces": 63},
    "Sagittarius": {"Aries": 47, "Taurus": 98, "Gemini": 68, "Cancer": 83, "Leo": 35, "Virgo": 95, "Libra": 55, "Scorpio": 95, "Sagittarius": 75, "Capricorn": 68, "Aquarius": 88, "Pisces": 88},
    "Capricorn": {"Aries": 78, "Taurus": 58, "Gemini": 85, "Cancer": 27, "Leo": 68, "Virgo": 90, "Libra": 73, "Scorpio": 90, "Sagittarius": 68, "Capricorn": 45, "Aquarius": 45, "Pisces": 60},
    "Aquarius": {"Aries": 67, "Taurus": 85, "Gemini": 53, "Cancer": 98, "Leo": 38, "Virgo": 88, "Libra": 88, "Scorpio": 97, "Sagittarius": 88, "Capricorn": 45, "Aquarius": 45, "Pisces": 60},
    "Pisces": {"Aries": 38, "Taurus": 53, "Gemini": 98, "Cancer": 38, "Leo": 45, "Virgo": 88, "Libra": 60, "Scorpio": 63, "Sagittarius": 88, "Capricorn": 60, "Aquarius": 60, "Pisces": 60},
}

@app.route('/api/cats', methods=['GET'])
def get_cats():
    zodiac_sign = request.args.get('zodiac_sign')

    # Filter cats by user's zodiac sign
    filtered_cats = [cat for cat in cats_list if cat['zodiac_sign'] == zodiac_sign]

    # Add compatibility percentages to the filtered list
    for cat in filtered_cats:
        cat['compatibility'] = compatibility_matrix[zodiac_sign][cat['zodiac_sign']]

    return jsonify(filtered_cats)

if __name__ == '__main__':
    app.run(debug=True)
