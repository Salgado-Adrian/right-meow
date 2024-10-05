// src/CatList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import compatibilityMatrix from './compatibility'; // Import the compatibility matrix

const CatList = ({ zodiacSign }) => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                // Fetch all cats
                const response = await axios.get(`http://127.0.0.1:5000/api/cats/all`);
                setCats(response.data);
            } catch (error) {
                console.error("Error fetching cats:", error);
            }
        };

        fetchCats();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">All Cats:</h2>
            <ul className="list-disc pl-5 bg-white rounded shadow-md p-4">
                {cats.map((cat, index) => {
                    // Calculate compatibility percentage
                    const compatibility = compatibilityMatrix[zodiacSign]?.[cat.zodiac_sign] || 0;

                    return (
                        <li key={index} className="mb-2">
                            {cat.name} ({cat.zodiac_sign}) - Compatibility: <span className="font-semibold">{compatibility}%</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CatList;
