import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { useFontSize } from '../contexts/FontSizeContext'; // Zaktualizowany import


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    const intervalId = setInterval(updateYear, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.footer}>
      <p>Fundacja Sztuka i Dom © {currentYear}</p>
    </div>
  );
};

export default Footer;
