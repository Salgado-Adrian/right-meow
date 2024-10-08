from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import os

#Load environment variables from .evn files
load_dotenv()

app = Flask(__name__)
CORS(app)

# Database connection configuration
db_config = {
    'host': os.getenv('DB_HOST'),
    'user': os.getenv('DB_USER'),    
    'password': os.getenv('DB_PASSWORD'),
}

# Function to create a database connection
def get_db_connection():
    connection = mysql.connector.connect(**db_config)
    return connection

@app.route('/api/cats/all', methods=['GET'])
def get_all_cats():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM cats")
    cats = cursor.fetchall()
    
    cursor.close()
    connection.close()
    
    return jsonify(cats)

@app.route('/api/cats/zodiac/<sign>', methods=['GET'])
def get_cats_by_zodiac(sign):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM cats WHERE zodiac_sign = %s", (sign,))
    cats = cursor.fetchall()
    
    cursor.close()
    connection.close()
    
    return jsonify(cats)

if __name__ == '__main__':
    app.run(debug=True)
