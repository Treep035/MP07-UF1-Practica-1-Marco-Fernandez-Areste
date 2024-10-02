// App.js
import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './styles/App.css';

function App() {
  // Estado para almacenar la entrada actual del usuario
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Función que maneja los clics en los botones
  const handleClick = (value) => {
    if (value === 'C') {
      // Reinicia la entrada si se presiona 'C' (Clear)
      setInput('');
    } else if (value === '=') {
      try {
        // Evalúa la expresión ingresada y actualiza la entrada con el resultado
        setInput(eval(input).toString());
      } catch (error) {
        // Muestra 'Error' si la evaluación falla
        setInput('Error');
      }
    } else {
      // Agrega el valor del botón presionado a la entrada actual
      setInput(input + value);
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <button className={`boton ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      </button>
      <div className={`calculator ${isDarkMode ? 'dark' : 'light'}`}>
        {/* Componente que muestra la entrada actual */}
        <Display input={input} isDarkMode={isDarkMode} />
        {/* Componente que contiene los botones de la calculadora */}
        <Keypad handleClick={handleClick} isDarkMode={isDarkMode} />
      </div>
    </div>
  );  
}

export default App;
