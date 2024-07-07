import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavbarLinks = () => {
    setShowLinks(!showLinks);
    const toggleButton = document.querySelector(`.${styles.toggle_button}`);
    toggleButton.classList.toggle(`${styles.active}`);
  };

  const [fundacjaDropdownOpen, setFundacjaDropdownOpen] = useState(false);
  const [projektyDropdownOpen, setProjektyDropdownOpen] = useState(false);

  const toggleFundacjaDropdown = () => {
    setFundacjaDropdownOpen(!fundacjaDropdownOpen);
  };

  const toggleProjektyDropdown = () => {
    setProjektyDropdownOpen(!projektyDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img
          src='img/sztuka_i_dom_logo-fundacja.png'
          alt='Logo'
          className={styles.logo}
        />
      </div>
      <ul className={`${styles.navbar_right} ${showLinks ? styles.show : ''}`}>
        <li>
          <a href='#aktualnosci'>Aktualności</a>
        </li>
        <li>
          <a href='#fundacja' onClick={toggleFundacjaDropdown}>
            Fundacja
          </a>
          {fundacjaDropdownOpen && (
            <ul className={styles.navbar_right_dropdown}>
              <li>
                <a href='#dane-urzedowe'> Dane urzędowe</a>{' '}
              </li>
              <li>
                <a href='files/statut_fundacja-sztuka-i-dom.pdf'> Statut</a>
              </li>
              <li>
                <a href='#o-nas'> O nas </a>
              </li>

              <li>
                <a href='#prezes'> Prezes</a>
              </li>
              <li>
                <a href='#wiceprezeska'> Wiceprezeska</a>
              </li>
              <li>
                <a href='#patron'> Patron</a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href='#' onClick={toggleProjektyDropdown}>
            Projekty
          </a>
          {projektyDropdownOpen && (
            <ul className={styles.navbar_right_dropdown}>
               <li>
                <a href='#dzialania'> Działania</a>
              </li>
              <li>
                <a href='#projekty-aktualne'> Projekty aktualne</a>
              </li>
              <li>
                <a href='#projekty-zrealizowane'> Projekty zrealizowane</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href='#galeria'>Galeria</a>
        </li>
        <li>
          <a href='#kontakt'>Kontakt</a>
        </li>
      </ul>
      <a href='#' className={styles.toggle_button} onClick={toggleNavbarLinks}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
    </nav>
  );
}

export default Navbar;
