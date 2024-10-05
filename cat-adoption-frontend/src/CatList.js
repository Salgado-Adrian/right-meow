import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatList = ({ zodiacSign }) => {
    const [cats, setCats] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const fetchCats = async () => {
        setIsFetching(true); // Set fetching state to true
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/cats?zodiac_sign=${zodiacSign}`);
            setCats(response.data);
        } catch (error) {
            console.error("Error fetching cats:", error);
        } finally {
            setIsFetching(false); // Reset fetching state
        }
    };

    return (
        <div className="w-full p-4"> {/* Full-width container with padding */}
            <h2 className="text-2xl font-semibold mb-2">Meows in your area!!!</h2>
            <button 
                onClick={fetchCats} 
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                disabled={isFetching} // Disable the button while fetching
            >
                {isFetching ? 'Loading...' : 'Show Cats'}
            </button>
            <ul className="list-disc pl-5 w-full bg-white rounded shadow-md mt-4 p-5"> {/* Full-width ul */}
                {cats.length > 0 ? (
                    cats.map((cat, index) => (
                        <li key={index} className="mb-1">{cat.name} ({cat.zodiac_sign})</li>
                    ))
                ) : (
                    <li>No cats found for this zodiac sign.</li>
                )}
            </ul>
        </div>
    );
};

export default CatList;
