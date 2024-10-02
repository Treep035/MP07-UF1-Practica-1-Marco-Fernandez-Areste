import React from 'react';
import './styles/Keypad.css';

function Keypad({ handleClick, isDarkMode }) {
  // Lista de botones de la calculadora
  const buttons = [
    'C', '/', '*', '-', // Primera fila
    '7', '8', '9', '+', // Segunda fila
    '4', '5', '6', '=', // Tercera fila
    '1', '2', '3', '.', // Cuarta fila
    '0',               // Quinta fila
  ];

  return (
    <div className={`keypad ${isDarkMode ? 'dark' : 'light'}`}>
      {buttons.map((btn, index) => (
        // Renderiza cada botón y asigna el evento de clic
        <button 
          key={index} 
          onClick={() => handleClick(btn)}
          className={isDarkMode ? 'dark-button' : 'light-button'}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
