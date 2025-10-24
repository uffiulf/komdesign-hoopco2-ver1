import React from 'react';
import shipIcon from '../assets/ship-svgrepo-com.svg';

const BECCSInfographic: React.FC = () => {
  return (
    <div id="infografikk-2">
      <img src={shipIcon} id="beccs-skip" alt="BECCS Ship" />
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="beccs-particle"></div>
      ))}
      <svg id="beccs-svg" viewBox="0 0 300 300">
        <path 
          id="beccs-pipe-path" 
          d="M 150 25 L 150 250" 
          stroke="#333a45" 
          strokeWidth="4" 
          fill="none" 
          strokeDasharray="230" 
          strokeDashoffset="230"
        />
        <rect 
          id="beccs-bottom-svg" 
          x="0" 
          y="250" 
          width="300" 
          height="50" 
          fill="#967a6d" 
        />
        <text 
          x="150" 
          y="280" 
          textAnchor="middle" 
          fill="white" 
          fontSize="12"
        >
          Havbunn (2600m)
        </text>
      </svg>
    </div>
  );
};

export default BECCSInfographic;