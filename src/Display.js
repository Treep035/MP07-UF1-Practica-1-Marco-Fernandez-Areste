import React from 'react';
import './styles/Display.css';

function Display({ input, isDarkMode }) {
  return (
    <div className={`display ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Muestra la entrada actual o '0' si está vacía */}
      {input || '0'}
    </div>
  );
}

export default Display;
