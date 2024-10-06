import React from 'react';

// Modal Component
const AdoptionModal = ({ catName, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center w-1/3">
        <h2 className="text-4xl font-bold mb-4">Congratulations!</h2>
        <p className="text-xl mb-6">You have adopted <span className="font-bold text-amber-600">{catName}</span>!</p>
        <button
          className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-violet-800 transition-all"
          onClick={onClose} // Trigger the onClose function to hide the modal
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AdoptionModal;
