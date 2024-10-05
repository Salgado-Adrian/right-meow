import React, { useState } from 'react';
import CatList from './CatList';

function App() {
    const [zodiacSign, setZodiacSign] = useState('Aries'); // Default zodiac sign

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> {/* Centering and background color */}
            <h1 className="text-8xl font-bold mb-8">Right Meow</h1> {/* Title with Tailwind styles */}
            <h2 className="text-1xl font-semibold m-4 mr-16 ml-16">Right Meow is a fun, interactive cat adoption website inspired by popular matchmaking applications. It matches users to their perfect feline companion based on zodiac sign compatibility. The best search tool for meows in you area</h2>
            <input 
                type="text" 
                value={zodiacSign} 
                onChange={(e) => setZodiacSign(e.target.value)} 
                placeholder="Enter your zodiac sign"
                className="p-2 m-10 border border-gray-300 rounded text-center w-64 sm:w-80 lg:w-96" // Styled input
            />
            <CatList zodiacSign={zodiacSign} />
        </div>
    );
}

export default App;
