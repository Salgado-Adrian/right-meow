Create a Database
After installing MySQL and starting the server, you can create a database where you will store your celebrity cat data.

Open MySQL Workbench or use the command line.

Execute the following SQL command to create a database (replace celebrity_cats_db with your desired database name):

sql

CREATE DATABASE celebrity_cats_db;
Create a Table: Create a table for the cats with the following SQL command:

sql

USE celebrity_cats_db;

CREATE TABLE cats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    zodiac_sign VARCHAR(50) NOT NULL
);
Insert Sample Data: Insert your celebrity cat data into the cats table:

sql
Copy code
INSERT INTO cats (name, zodiac_sign) VALUES
("Taylor Swift", "Pisces"),
("Drake", "Scorpio"),
("Beyoncé", "Leo"),
("Katy Perry", "Gemini"),
("Kanye West", "Libra"),
("Ariana Grande", "Cancer"),
("Bruno Mars", "Aries"),
("Billie Eilish", "Aquarius"),
("Justin Bieber", "Sagittarius"),
("Selena Gomez", "Taurus"),
("Rihanna", "Pisces"),
("Ed Sheeran", "Libra"),
("Lady Gaga", "Aries"),
("Post Malone", "Cancer"),
("Shawn Mendes", "Gemini"),
("Demi Lovato", "Aquarius"),
("Camila Cabello", "Leo"),
("Miley Cyrus", "Sagittarius"),
("Cardi B", "Libra"),
("Halsey", "Capricorn"),
("Snoop Dogg", "Libra"),
("Kendrick Lamar", "Taurus"),
("J Cole", "Virgo"),
("Travis Scott", "Aquarius"),
("Lizzo", "Scorpio"),
("Bebe Rexha", "Taurus"),
("Megan Thee Stallion", "Aquarius"),
("Lil Nas X", "Leo"),
("Olivia Rodrigo", "Leo"),
("Zayn Malik", "Aquarius"),
("Billie Eilish", "Aquarius"),
("John Legend", "Capricorn"),
("Adele", "Taurus"),
("The Weeknd", "Aquarius"),
("Harry Styles", "Aquarius"),
("Kylie Jenner", "Leo"),
("Kim Kardashian", "Libra"),
("Katy Perry", "Gemini"),
("Dwayne Johnson", "Taurus"),
("Chris Hemsworth", "Leo"),
("Natalie Portman", "Gemini"),
("Emma Watson", "Aries"),
("Leonardo DiCaprio", "Scorpio"),
("Scarlett Johansson", "Sagittarius"),
("Tom Hanks", "Libra"),
("Will Smith", "Libra"),
("Jennifer Lawrence", "Leo"),
("Ryan Reynolds", "Scorpio"),
("Emma Stone", "Sagittarius"),
("Gal Gadot", "Gemini");

By following these steps, you should have MySQL installed and set up with a database ready for use in your Flask application. If you need further assistance with any of these steps, feel free to ask!
