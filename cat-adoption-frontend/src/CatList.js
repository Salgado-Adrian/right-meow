// src/CatList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatList = ({ zodiacSign }) => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/cats?zodiac_sign=${zodiacSign}`);
                setCats(response.data);
            } catch (error) {
                console.error("Error fetching cats:", error);
            }
        };

        if (zodiacSign) {
            fetchCats();
        }
    }, [zodiacSign]);

    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-2">Cats that match your zodiac sign:</h2>
            <ul className="list-disc pl-5 w-11/12 p-4 m-2 bg-white rounded shadow-md mt-4">
                {cats.length > 0 ? (
                    cats.map((cat, index) => (
                        <li key={index} className="mb-1">
                            {cat.name} ({cat.zodiac_sign})
                        </li>
                    ))
                ) : (
                    <li>No cats found for this zodiac sign.</li>
                )}
            </ul>
        </div>
    );
};

export default CatList;
