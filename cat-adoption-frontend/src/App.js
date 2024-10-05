import React, { useState, useEffect } from 'react';
import CatList from './CatList';
import catImage from './assets/thugcat.png';
import './App.css';

function App() {
    const [zodiacSign, setZodiacSign] = useState(''); // Default zodiac sign
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const moveCat = () => {
            const newTop = Math.random() * 100; // Random top value within 100px
            const newLeft = Math.random() * 100; // Random left value within 100px
            setPosition({ top: newTop, left: newLeft });
        };

        const interval = setInterval(moveCat, 1000); // Change position every 1 second
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-400 to-brown-900 relative overflow-hidden"> {/* Centering, background color, and relative positioning */}
            <div className='absolute top-1 bg-blue-800 text-white p-2 rounded-lg hover:bg-violet-800 mt-5 box-border h-32'> {/* Styled div */}
                <h1 className="text-8xl font-bold mb-8">Right Meow Adoption</h1> {/* Title with Tailwind styles */}
            </div>
            <h2 className='text-3xl font-semibold m-4 mr-10 ml-10 text-left whitespace-break-spaces'>Right Meow is a fun, interactive cat adoption website inspired by popular matchmaking applications.
                It matches users to their perfect feline companion based on zodiac sign compatibility.
            </h2>
            <h1 className='text-center text-5xl semi-bold font-mono tracking-tighter'>The best search tool for meows in your area</h1>
        
        <form
            className = "flex flex-col justify-center items-center m-10"
            onSubmit={(e) => {
                e.preventDefault();
                // Handle the search action here
                setZodiacSign(e.target.elements.zodiacSign.value);
            }}
    >     
            <input
                className="p-2 mb-4 border border-gray-300 rounded text-center h-full w-5/5" // Styled input
                type="text"
                name="zodiacSign"
                placeholder="Enter your zodiac sign"
            />
            <button
                className="p-2 ml-2 bg-blue-800 text-white rounded hover: bg-violet-800"
                type="submit"
            >
                Search
            </button>
        </form>
        {zodiacSign && <CatList zodiacSign={zodiacSign} />}
            {/* Moving cat image in the top left corner */}
            <img
                src={catImage}
                alt="Cat"
                className="moving-cat"
                style={{ top: `${position.top}px`, left: `${position.left}px`, position: 'absolute', width: '100px', transition: 'top 1s linear, left 1s linear' }}
            />
        </div>
    );
}

export default App;