import React from 'react';

const ShoeLoader = () => {
  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg
        className="w-full h-full animate-bounce"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 60 Q30 50 50 55 Q70 60 80 65 L85 70 Q80 75 70 75 L30 75 Q20 70 20 60 Z"
          fill="#3B82F6"
          className="animate-pulse"
        />
        <path
          d="M25 60 Q35 55 50 58 Q65 62 75 65"
          stroke="#1E40AF"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="35" cy="62" r="2" fill="#1E40AF" />
        <circle cx="50" cy="60" r="2" fill="#1E40AF" />
        <circle cx="65" cy="63" r="2" fill="#1E40AF" />
      </svg>

      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          <div className="w-2 h-1 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-1 bg-gray-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-1 bg-gray-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoeLoader;