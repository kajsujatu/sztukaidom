import React from 'react';
import styles from './App.module.css';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Footer from './Footer';
import { useFontSize } from '../contexts/FontSizeContext';

function App() {
  const { fontSize } = useFontSize();
  const { backgroundColor } = useFontSize();

  return (
    <div
      style={{
        fontSize: `${fontSize}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <Navbar />
      <div className={styles.app}>
        <div className={styles.slider}>
          <h1>Piękno w nas i wokół nas</h1>
        </div>
        <div className={styles.container}>
          <AboutUs />
          <Gallery />

          <section
            id='dane-urzedowe'
            className={styles.section}
            style={{ backgroundColor }}
          >
            <h2 className={styles.title}>Dane urzędowe</h2>

            <b>FUNDACJA SZTUKA I DOM</b>
            <br />
            <p>
              <b>Numer KRS:</b> 0000964614
            </p>
            <p>
              <b>Numer NIP:</b> 7162835810
            </p>
            <p>
              <b>Numer REGON:</b> 521729172
            </p>
            <p>
              <b>Adres siedziby:</b> ul. Bolesława Prusa 1 a, 24 -150 Nałęczów
            </p>
            <p>
              <b>Data rejestracji:</b> 11 kwietnia 2022 r.
            </p>
            <p>
              <b>Numer konta:</b> 61 1020 3219 0000 9902 0172 9763
            </p>
          </section>

          <section
            id='kontakt'
            className={styles.section}
            style={{ backgroundColor }}
          >
            <h2 className={styles.title}>Kontakt</h2>
            <p>
              <b>Adres:</b> ul. Bolesława Prusa 1 a, 24-150 Nałęczów
            </p>

            <p>
              <b>Telefon:</b> <a href='tel:572876950'>572 876 950</a>
            </p>
            <p>
              <a href='tel:508244607'>508 244 607</a>
            </p>
            <p>
              <b>E-mail: </b>
              <a href='mailto:fundacja.sztukaidom@gmail.com'>
                fundacja.sztukaidom@gmail.com
              </a>
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
