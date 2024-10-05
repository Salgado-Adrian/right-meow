import React, { useState } from 'react';
import CatList from './CatList';

function App() {
    const [zodiacSign, setZodiacSign] = useState(''); // Default zodiac sign

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> {/* Centering and background color */}
        <div className='absolute top-1 bg-blue-500 text-white p-2 rounded hover:bg-green-600'> {/* Styled div */}
            <h1 className="text-8xl font-bold mb-8">Right Meow Adoption</h1> {/* Title with Tailwind styles */}
            </div>
            <h2 className='text-3xl font-semibold m-4 mr-10 ml-10 text-left whitespace-break-spaces'>Right Meow is a fun, interactive cat adoption website inspired by popular matchmaking applications. 
                It matches users to their perfect feline companion based on zodiac sign compatibility. 
                </h2>
                <h1 className='text-center text-5xl semi-bold font-mono tracking-tighter'>The best search tool for meows in your area</h1>
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
