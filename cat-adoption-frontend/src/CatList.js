import React, { useState, useEffect } from 'react';
import axios from 'axios';
import compatibilityMatrix from './compatibility';
import AdoptionModal from './AdoptionModal'; // Import the Modal Component

const CatList = ({ zodiacSign }) => {
  const [cats, setCats] = useState([]);
  const [adoptedCat, setAdoptedCat] = useState(null); // State to track the adopted cat

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/cats/all`);
        setCats(response.data);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  // Calculate compatibility and filter the top 25 compatible cats
  const compatibleCats = cats
    .map((cat) => ({
      ...cat,
      compatibility: compatibilityMatrix[zodiacSign]?.[cat.zodiac_sign] || 0,
    }))
    .sort((a, b) => b.compatibility - a.compatibility)
    .slice(0, 25);

  // Function to determine text color based on compatibility percentage
  const getTextColor = (compatibility) => {
    if (compatibility <= 25) {
      return 'text-red-600';
    } else if (compatibility <= 50) {
      return 'text-orange-500';
    } else if (compatibility <= 75) {
      return 'text-yellow-500';
    } else {
      return 'text-green-600';
    }
  };

  // Handler function for the "Adopt" button
  const handleAdopt = (catName) => {
    setAdoptedCat(catName); // Set the adopted cat name to display in the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setAdoptedCat(null); // Reset the adopted cat state to hide the modal
  };

  return (
    <div className="w-11/12 mx-auto p-4 p-12 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Top 25 Most Compatible Cats</h2>
      <div className="space-y-6">
        {compatibleCats.map((cat, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-md p-8 flex items-center justify-between hover:shadow-xl transition-shadow transform hover:-translate-y-1"
          >
            {/* Cat Name and Zodiac Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
              <p className="text-xl text-gray-600">Zodiac Sign: <span className="font-bold">{cat.zodiac_sign}</span></p>
            </div>

            {/* Compatibility Percentage and Adopt Button */}
            <div className="flex items-center space-x-6">
              <div className={`text-2xl ${getTextColor(cat.compatibility)}`}>
                Compatibility: <span className="font-bold">{cat.compatibility}%</span>
              </div>
              {/* Adopt Button */}
              <button
                className="p-2 bg-amber-600 text-white rounded hover:bg-violet-800 transition-all"
                onClick={() => handleAdopt(cat.name)}
              >
                Adopt
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show the Modal when a cat is adopted */}
      {adoptedCat && (
        <AdoptionModal catName={adoptedCat} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CatList;
