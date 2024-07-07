// contexts/FontSizeContext.js
import React, { createContext, useContext, useState } from 'react';
import styles from '../components/App.module.css';

const FontSizeContext = createContext();

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 2);
  };

  const [backgroundColor, setBackgroundColor] = useState('white');

  const [fontColor, setFontColor] = useState('black');

  const changeContrast = () => {
    setBackgroundColor('black');
    setFontColor('yellow');
  };

  const resetChanges = () => {
    setBackgroundColor('white');
    setFontSize(16);
    setFontColor('black');
  };

  return (
    <FontSizeContext.Provider
      value={{ fontSize, increaseFontSize, backgroundColor }}
    >
      <div
        style={{
          backgroundColor: backgroundColor,
          color: fontColor,
        }}
      >
        <div className={styles.button_container}>
          <button onClick={increaseFontSize}>
            <img
              src='./img/increase.svg'
              className={styles.icons}
              alt='Zwiększ tekst'
            />
          </button>
          <button onClick={decreaseFontSize}>
            <img
              src='./img/decrease.svg'
              className={styles.icons}
              alt='Zmniejsz tekst'
            />
          </button>
          <button onClick={changeContrast}>
            <img
              src='./img/contrast.svg'
              className={styles.icons}
              alt='Zmień kontrast'
            />
          </button>
          <button onClick={resetChanges}>
            <img src='./img/reset.svg' className={styles.icons} alt='Resetuj zmiany' />
          </button>
        </div>
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};

export default FontSizeContext;
