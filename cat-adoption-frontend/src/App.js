import React, { useState } from 'react';
import CatList from './CatList';
import catImage from './assets/thugcat.png';
import './App.css';

const zodiacSigns = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

function App() {
  // State to track zodiac sign input and cat image position
  const [zodiacSign, setZodiacSign] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Function to update cat's position based on cursor position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; // Get the mouse coordinates
    setPosition({ top: clientY, left: clientX }); // Update the cat's position state
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-600 to-brown-900 relative overflow-hidden"
      onMouseMove={handleMouseMove} // Capture the mouse move event
    >
      {/* Title Section */}
      <header className="w-full text-black p-4 rounded-lg mt-52 box-border">
        <h1 className="text-8xl font-mono font-semibold mb-8 text-center">Right Meow</h1>
      </header>

      {/* Introduction Section */}
      <section className="text-center max-w-3xl p-4 mt-10">
        <h3 className="text-5xl font-mono font-semibold tracking-tight mb-96">
          The best search tool for paw-ls in your area
        </h3>
        <h2 className="text-3xl font-mono font-semibold mb-12 text-left whitespace-pre-wrap">
          Right Meow is a fun, interactive cat adoption website inspired by popular matchmaking applications. It matches users to their perfect feline companion based on zodiac sign compatibility.
        </h2>
      </section>

      {/* Search Form */}
      <form
        className="flex flex-col justify-center items-center m-10"
        onSubmit={(e) => {
          e.preventDefault();
          // Set the zodiac sign from the dropdown
          setZodiacSign(e.target.elements.zodiacSign.value);
        }}
      >
        <select
          className="p-2 mb-4 border border-gray-300 bg-black text-white rounded text-center w-80"
          name="zodiacSign"
          defaultValue="" // Set default value
        >
          <option value="" disabled>Select your zodiac sign</option> {/* Placeholder option */}
          {zodiacSigns.map((sign) => (
            <option key={sign} value={sign}>{sign}</option>
          ))}
        </select>
        <button className="p-2 mb-16 bg-blue-800 text-white rounded hover:bg-violet-800 transition-all">
          Search
        </button>
      </form>

      {/* Display Cat List if a zodiac sign is selected */}
      {zodiacSign && <CatList zodiacSign={zodiacSign} />}

      {/* Cat image that follows the cursor */}
      <img
        src={catImage}
        alt="Moving Cat"
        className="moving-cat"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          position: 'absolute',
          width: '100px',
          pointerEvents: 'none', // Prevent the image from interfering with mouse events
          transition: 'top 0.1s linear, left 0.1s linear', // Smooth movement of the image
        }}
      />
    </div>
  );
}

export default App;
