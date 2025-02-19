"use client";
import React, { useState } from 'react';

const MoveDotButton = () => {
  // State to store the position of the dot (0 = left, 50 = right)
  const [position, setPosition] = useState(0);

  // Function to toggle the dot's position between left and right
  const moveDot = () => {
    // Toggle between 0 and 50 (left and right)
    setPosition(position === 0 ? 50 : 0);
  };

  return (
    <div>
      {/* Button that toggles the dot's position */}
      <button onClick={moveDot} className=' border-blue-400 rounded-full border border-solid w-auto ' >
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          position: 'relative',
          left: `${position}px`, // Move the dot based on position (0 or 50)
          transition: 'left 0.3s ease', // Smooth transition when the dot moves
        }}
      ></div>
      </button>

      {/* Dot element */}
    
    </div>
  );
};

export default MoveDotButton;
