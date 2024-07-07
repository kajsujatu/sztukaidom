import React, { useEffect } from 'react';
import styles from './Gallery.module.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const Gallery = () => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a');

    lightbox.on('show.simplelightbox', function (e) {
      console.log('Image ' + (e.index + 1) + ' shown');
    });

    return () => {
      lightbox.destroy();
    };
  });

  return (
    <section id='galeria' className={styles.gallery_container}>
      <h2> GALERIA</h2>
      <div className={`gallery a ${styles.gallery_fundacja}`}>
        <a href='/img/galeria/debata-wiosenna-1.jpg'>
          <img
            src='/img/galeria/debata-wiosenna-1-min.jpg'
            alt='Debata wiosenna, 2024'
            title='Debata wiosenna, 2024'
          />
        </a>
        <a href='/img/galeria/debata-wiosenna-2.jpg'>
          <img
            src='/img/galeria/debata-wiosenna-2-min.jpg'
            alt='Debata wiosenna, 2024'
            title='Debata wiosenna, 2024'
          />
        </a>
        <a href='/img/galeria/debata-zimowa-1.jpg'>
          <img
            src='/img/galeria/debata-zimowa-1-min.jpg'
            alt='Debata zimowa, 2023'
            title='Debata zimowa, 2023'
          />
        </a>
        <a href='/img/galeria/debata-zimowa-2.jpg'>
          <img
            src='/img/galeria/debata-zimowa-2-min.jpg'
            alt='Debata zimowa, 2023'
            title='Debata zimowa, 2023'
          />
        </a>
        <a href='/img/galeria/debata-zimowa-3.jpg'>
          <img
            src='/img/galeria/debata-zimowa-3-min.jpg'
            alt='Debata zimowa, 2023'
            title='Debata zimowa, 2023'
          />
        </a>
        <a href='/img/galeria/debata-zimowa-4.jpg'>
          <img
            src='/img/galeria/debata-zimowa-4-min.jpg'
            alt='Debata zimowa, 2023'
            title='Debata zimowa, 2023'
          />
        </a>
        <a href='/img/galeria/debata-zimowa-5.jpg'>
          <img
            src='/img/galeria/debata-zimowa-5-min.jpg'
            alt='Debata zimowa, 2023'
            title='Debata zimowa, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-1.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-1-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-2.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-2-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-3.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-3-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-4.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-4-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-6.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-6-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-7.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-7-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-8.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-8-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-9.jpg'>
          <img
            src='/img/galeria/jubileusz-100-rocznicy-urodzin-stanislawa-strzyzynskiego-w-naleczowie-9-min.jpg'
            alt='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
            title='Jubileusz setnej rocznicy urodzin Stanisława Strzyżyńskiego w Nałęczowie, 2023'
          />
        </a>
        <a href='/img/galeria/warsztaty-1.jpg'>
          <img
            src='/img/galeria/warsztaty-1-min.jpg'
            alt='Warsztaty'
            title='Warsztaty'
          />
        </a>
        <a href='/img/galeria/warsztaty-2.jpg'>
          <img
            src='/img/galeria/warsztaty-2-min.jpg'
            alt='Warsztaty'
            title='Warsztaty'
          />
        </a>
        <a href='/img/galeria/warsztaty-3.jpg'>
          <img
            src='/img/galeria/warsztaty-3-min.jpg'
            alt='Warsztaty'
            title='Warsztaty'
          />
        </a>
        <a href='/img/galeria/warsztaty-4.jpg'>
          <img
            src='/img/galeria/warsztaty-4-min.jpg'
            alt='Warsztaty'
            title='Warsztaty'
          />
        </a>
        <a href='/img/galeria/warsztaty-5.jpg'>
          <img
            src='/img/galeria/warsztaty-5-min.jpg'
            alt='Warsztaty'
            title='Warsztaty'
          />
        </a>
        <a href='/img/galeria/warsztaty-psychologiczne-1.jpg'>
          <img
            src='/img/galeria/warsztaty-psychologiczne-1-min.jpg'
            alt='Warsztaty psychologiczne'
            title='Warsztaty psychologiczne'
          />
        </a>
        <a href='/img/galeria/warsztaty-psychologiczne-2.jpg'>
          <img
            src='/img/galeria/warsztaty-psychologiczne-2-min.jpg'
            alt='Warsztaty psychologiczne'
            title='Warsztaty psychologiczne'
          />
        </a>
        <a href='/img/galeria/warsztaty-psychologiczne-3.jpg'>
          <img
            src='/img/galeria/warsztaty-psychologiczne-3-min.jpg'
            alt='Warsztaty psychologiczne'
            title='Warsztaty psychologiczne'
          />
        </a>
        <a href='/img/galeria/warsztaty-psychologiczne-4.jpg'>
          <img
            src='/img/galeria/warsztaty-psychologiczne-4-min.jpg'
            alt='Warsztaty psychologiczne'
            title='Warsztaty psychologiczne'
          />
        </a>
        <a href='/img/galeria/warsztaty-psychologiczne-5.jpg'>
          <img
            src='/img/galeria/warsztaty-psychologiczne-5-min.jpg'
            alt='Warsztaty psychologiczne'
            title='Warsztaty psychologiczne'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-etyki-1.jpg'>
          <img
            src='/img/galeria/warsztaty-z-etyki-1-min.jpg'
            alt='Warsztaty z etyki'
            title='Warsztaty z etyki'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-etyki-2.jpg'>
          <img
            src='/img/galeria/warsztaty-z-etyki-2-min.jpg'
            alt='Warsztaty z etyki'
            title='Warsztaty z etyki'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-etyki-3.jpg'>
          <img
            src='/img/galeria/warsztaty-z-etyki-3-min.jpg'
            alt='Warsztaty z etyki'
            title='Warsztaty z etyki'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-etyki-4.jpg'>
          <img
            src='/img/galeria/warsztaty-z-etyki-4-min.jpg'
            alt='Warsztaty z etyki'
            title='Warsztaty z etyki'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-etyki-5.jpg'>
          <img
            src='/img/galeria/warsztaty-z-etyki-5-min.jpg'
            alt='Warsztaty z etyki'
            title='Warsztaty z etyki'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-prawnikiem-1.jpg'>
          <img
            src='/img/galeria/warsztaty-z-prawnikiem-1-min.jpg'
            alt='Warsztaty z prawnikiem'
            title='Warsztaty z prawnikiem'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-prawnikiem-2.jpg'>
          <img
            src='/img/galeria/warsztaty-z-prawnikiem-2-min.jpg'
            alt='Warsztaty z prawnikiem'
            title='Warsztaty z prawnikiem'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-prawnikiem-3.jpg'>
          <img
            src='/img/galeria/warsztaty-z-prawnikiem-3-min.jpg'
            alt='Warsztaty z prawnikiem'
            title='Warsztaty z prawnikiem'
          />
        </a>
        <a href='/img/galeria/warsztaty-z-prawnikiem-4.jpg'>
          <img
            src='/img/galeria/warsztaty-z-prawnikiem-4-min.jpg'
            alt='Warsztaty z prawnikiem'
            title='Warsztaty z prawnikiem'
          />
        </a>
        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-1.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-1-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>

        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-2.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-2-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>
        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-3.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-3-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>
        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-4.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-4-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>
        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-5.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-5-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>
        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-6.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-6-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>
        <a href='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-7.jpg'>
          <img
            src='/img/galeria/wystawa-rzezby-stanislawa-strzyzynskiego-w-kazimierzu-dolnym-7-min.jpg'
            alt='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
            title='Wystawa rzeźby Stanisława Strzyżyńskiego w Kazimierzu Dolnym, 2024'
          />
        </a>
      </div>
    </section>
  );
};

export default Gallery;
