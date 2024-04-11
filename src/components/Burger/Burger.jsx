import React from 'react';

const Burger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <input className="checkbox" type="checkbox" checked={isMenuOpen} readOnly />
      <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
        <path
          className={`lineTop line ${isMenuOpen ? 'lineTopClose' : ''}`}
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 11L44 11"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 24H43"
          className={`lineMid line ${isMenuOpen ? 'lineMidClose' : ''}`}
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 37H43"
          className={`lineBottom line ${isMenuOpen ? 'lineBottomClose' : ''}`}
        ></path>
      </svg>
    </div>
  );
};

export default Burger;
