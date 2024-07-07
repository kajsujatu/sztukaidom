import React, { useEffect } from 'react';
import styles from './AboutUs.module.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { useFontSize } from '../contexts/FontSizeContext';

const AboutUs = () => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery');

    lightbox.on('show.simplelightbox', function (e) {
      console.log('Image ' + (e.index + 1) + ' shown');
    });

    return () => {
      lightbox.destroy();
    };
  });
  const { backgroundColor } = useFontSize();

  return (
    <div className={styles.container_about_us} > 
    {/*   <section id='aktualnosci' className={styles.section}>
        <h2 className={styles.title}>Aktualności</h2>

        <div className={styles.fb_post}>
          <iframe
            className={styles.fb_iframe}
            src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsztukaidom%2Fposts%2Fpfbid0qEyrRvV12Za1KFxS2tKh289AZawfpYobQqz1BKjq9VeAZMd6EGTkkVHBqnsAsxDPl&show_text=true&width=500&is_preview=true'
            frameborder='0'
            allowfullscreen='true'
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          />
        </div>
      </section> */}

      <section id='o-nas' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>O nas</h2>
        <p>
          <b>
            Misją FUNDACJI SZTUKA I DOM jest upowszechnianie sztuki, kultury,
            edukacji i partycypacji społecznej w lokalnej społeczności.
          </b>
          Naszym celem jest stworzenie miejsca, gdzie wszyscy mają możliwość
          czerpania inspiracji ze sztuki i uczestniczenia w różnorodnych
          działaniach kulturalnych i obywatelskich w warunkach zrównoważonego
          środowiska.
          <br />
          <br />
          <b>
            Wizją FUNDACJI SZTUKA I DOM jest zapewnienie dla wszystkich
            dostępnego miejsca, gdzie sztuka staje się narzędziem transformacji
            społecznej.
          </b>
          Chcemy, aby nasza Fundacja była źródłem inspiracji i angażowała
          społeczność w działania artystyczne, edukacyjne oraz inicjatywy
          społeczne. Poprzez współtworzenie kultury i aktywne uczestnictwo,
          dążymy do tworzenia obywatelskiej, zintegrowanej i kreatywnej
          społeczności.
        </p>
      </section>

      <section id='prezes' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Prezes Zbigniew Strzyżyński</h2>
        <div className={styles.section_prezes}>
          <p>
            Urodzony w 1955 r. w Nałęczowie. Ukończył Instytut Wychowania
            Artystycznego UMCS w Lublinie, dyplom z wyróżnieniem w Pracowni
            Rzeźby prof. Sławomira Mieleszki oraz studia podyplomowe na Akademii
            Sztuk Pięknych w Krakowie. Zajmuje się malarstwem i rzeźbą.
            Współorganizator i komisarz Międzynarodowego Konkursu na Rysunek im.
            M. E. Andriollego. Brał udział w ponad 270. wystawach
            środowiskowych, ogólnopolskich i międzynarodowych (Polska, Belgia,
            Holandia, Czechy, Dania, Niemcy, Słowacja, Włochy, USA, Japonia,
            Tajwan). Zorganizował 25 wystaw indywidualnych (m.in. Nałęczów 2022,
            Lublin 2020, Radomsko 2019, Biała Podlaska 2019, Poznań 2016).
            Laureat 20. nagród (m.in.: II Nagroda w konkursie{' '}
            <i>Życie w czasie niezwykłym 2</i>, Chełm 2022, III Nagroda na 32.
            Ogólnopolskiej Wystawie Twórczości Pedagogów, Rzeszów 2020, I
            Nagroda na Ogólnopolskim Biennale Malarstwa i Grafiki - Piękne
            Sztuki, Radomsko 2018) i 6. wyróżnień w konkursach ogólnopolskich.
            Odznaczony Złotym i Srebrnym Krzyżem Zasługi, Odznaką Zasłużony
            Działacz Kultury oraz Zasłużony dla Lubelszczyzny. Za działalność
            artystyczną uhonorowany Nagrodą Starosty Puławskiego i dwukrotnie
            Marszałka Województwa Lubelskiego. W swoim dorobku ma liczne
            realizacje rzeźbiarskie m.in. ławeczki Bolesława Prusa w Nałęczowie
            i hrabiny Marii Resseguier w Nisku. Należy do Związku Polskich
            Artystów Plastyków, Stowarzyszenia Pastelistów Polskich,
            Kazimierskiej Konfraterni Sztuki (wiceprezes), Polskiego
            Stowarzyszenia Nauczycieli Plastyków oraz artystycznej Grupy
            Kontrast. Wicedyrektor ds. artystycznych Państwowego Liceum Sztuk
            Plastycznych im. Józefa Chełmońskiego w Nałęczowie, prezes Fundacji
            Sztuka i Dom.
          </p>

          <div className={`gallery ${styles.gallery_prezes}`}>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_1.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_1-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_2.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_2-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_brama-nadzieji.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_brama-nadzieji-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_brama-rybna.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_brama-rybna-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
                title='Zbigniew Strzyżyński, Brama Rybna, akryl, 80 x 100 cm, 2020'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_ku-farze-2.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_ku-farze-2-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
                title='Zbigniew Strzyżyński, Ku Farze II, akryl, 100 x 80 cm, 2020'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_ku-farze-fragment.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_ku-farze-fragment-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
                title='Zbigniew Strzyżyński, Ku Farze (fragment), akryl, 100 x 80 cm, 2020'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_mosina.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_mosina-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_pejzaz.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_pejzaz-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_sad.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_sad-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
              />
            </a>
            <a href='/img/galeria/prezes/zbigniew-strzyzynski_wisla.jpg'>
              <img
                src='/img/galeria/prezes/zbigniew-strzyzynski_wisla-min.jpg'
                alt='Obraz Zbigniewa Strzyżyńskiego'
                title='Zbigniew Strzyżyński, Wisła, akryl, 50 x 70 cm, 2019'
              />
            </a>
          </div>
        </div>
      </section>

      <section id='wiceprezeska' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Wiceprezeska Dorota Strzyżyńska</h2>
        <p>
          Specjalistka profilaktyki, rozwoju społecznego, pomysłodawczyni i
          realizatorka projektów kulturalnych i społecznych.
          <ul className={styles.list_numbers}>
            <li>Magister pedagogiki opiekuńczo-wychowawczej.</li>
            <li>
              Studia podyplomowe z wychowania przedszkolnego,
              oligofrenopedagogiki, wychowania do życia w rodzinie, doradztwa
              zawodowego, menadżer oświaty.
            </li>
            <li>
              Obecnie na emeryturze. Pracowała jako dyrektor przedszkola z
              10-letnim stażem, pedagog szkolny z 25-letnim stażem, nauczyciel
              dyplomowany wdż, doradztwa zawodowego oraz pedagog specjalny.
            </li>
            <li>
              Otrzymała Nagrodę Ministra Oświaty za osiągnięcia w pracy
              oświatowej i odznakę Zasłużonego Działacza Kultury za promowanie
              kultury.
            </li>
          </ul>
        </p>
      </section>

      <section id='patron' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Patron Stanisław Strzyżyński</h2>
        <div className={styles.section_patron}>
          <div>
            <p>
              Urodzony 3 kwietnia 1923 r. w Kaliskach, woj. wielkopolskie. Zmarł
              16 marca 2015 r. w Nałęczowie. Ukończył studia w Państwowej
              Wyższej Szkole Sztuk Plastycznych w Poznaniu w 1950 r. na Wydziale
              Rzeźby w pracowni prof. Bazylego Wójtowicza. Dyplom uzyskał w
              Akademii Sztuk Pięknych w Warszawie w 1955 r. u prof. Mariana
              Wnuka. W latach 1953-1983 pracował w Państwowym Liceum Sztuk
              Plastycznych w Nałęczowie. Od 1953 r. należał do Związku Polskich
              Artystów Plastyków pełniąc w nim przez wiele lat funkcję
              przewodniczącego sekcji rzeźbiarskiej.
            </p>
            <p>
              Zorganizował 22 wystawy indywidualne m.in. w: Nałęczowie,
              Lublinie, Puławach, Kazimierzu Dolnym, Dęblinie, Słupsku,
              Sieradzu, Bełchatowie. Brał udział w ok. 100 wystawach zbiorowych
              m.in. w: Radomiu, Wrocławiu Sopocie, Bytomiu, Warszawie,
              Bielsko-Białej, Lublinie, Krakowie, Poznaniu, Gdańsku, Zamościu,
              Dęblinie, Berlinie, Moskwie, Sofii, Ravennie, Arezzo, Paryżu.{' '}
            </p>
            <p>
              Jest autorem ponad dwudziestu pomników, kilkunastu rzeźb
              plenerowych i rzeźb sakralnych. Zrealizował m.in.: Pomnik ku czci
              Ofiar Faszyzmu w Bełżcu (1964), Pomnik Partyzantów w Łaszczowie
              (1966), Pomnik Bohaterskim Lotnikom w Dęblinie (1966), Pomnik
              Upamiętnienia Walk Kampanii Wrześniowej w Kocku (1968), Pomnik
              Partyzantów w Rąblowie (1969) i Samoklęskach (1969), Pomnik
              Pamięci Rozstrzelanych Rodzin w Zbędowicach (1981), Pomnik ku czci
              pomordowanych przez UB w Puławach (1995), Pomnik w hołdzie 17
              żołnierzy AK poległych w walce z NKWD w 1945 r. w Nałęczowie
              (1996), rzeźby plenerowe w Lublinie (1964), Nałęczowie (1977),
              Zamościu (1978), Świdniku (1979), Kraśniku (1979), pomniki
              Tadeusza Kościuszki w Maciejowicach (1982) i Kocku (1983),
              Maksymiliana Kolbe w Nałęczowie (1996), Chrystusa Zbawiciela w
              Warszawie (1996), ławeczki Bolesława Prusa w Nałęczowie (2002),
              Józefa Kraszewskiego w Romanowie (2007), Marii Cunitz w Świdnicy
              (2009), Stefana Żeromskiego w Siedlce (2010).{' '}
            </p>
            <p>
              Jest laureatem wielu nagród i wyróżnień w ogólnopolskich i
              międzynarodowych konkursach rzeźbiarskich. Uzyskał m.in.: III
              nagrodę w konkursie na monety polskie - Warszawa 1958, wyróżnienie
              na wystawie lubelskiej XXX-lecia w twórczości plastycznej - 1964,
              I nagrodę w konkursie na pomnik Bohaterskim Lotnikom w Dęblinie
              1966, wyróżnienie na Ogólnopolskiej Wystawie <i>Przeciw wojnie</i>{' '}
              - Lublin 1966, nagrodę na wystawie XXX-lecia ZPAP - Lublin 1966,
              główną nagrodę i wyróżnienie w Ogólnopolskim Konkursie na Pomnik
              Ofiar Majdanka - Warszawa 1967, wyróżnienie w konkursie na pomnik
              upamiętniający przełamanie Wału Pomorskiego - Koszalin 1968,
              nagrodę na Ogólnopolskiej Wystawie Plastyki |<i>Przeciw wojnie</i>{' '}
              - Lublin 1969, wyróżnienie w międzynarodowym konkursie na pomnik
              Chana Asparuchowa - Sofia 1969, III nagroda na Międzynarodowej
              Wystawie <i>Przeciw wojnie</i> - Lublin 1979.{' '}
            </p>
            <p>
              Prace artysty znajdują się m.in. w zbiorach: Centrum Rzeźby
              Polskiej w Orońsku, Muzeum Narodowym w Lublinie, Muzeum na
              Majdanku w Lublinie, Muzeum Medalierstwa we Wrocławiu, Muzeum
              Narodowym w Poznaniu, Muzeum Nadwiślańskim w Kazimierzu Dolnym,
              Muzeum Bolesława Prusa w Nałęczowie.{' '}
            </p>
            <p>
              Został uhonorowany m.in.: Złotym Krzyżem Zasługi (1973), Medalem
              Komisji Edukacji Narodowej (1978), Odznaką
              <i>Zasłużony dla Lubelszczyzny</i> (1980), Odznaką{' '}
              <i>Zasłużony działacz kultury</i> (1980), Krzyżem Kawalerskim
              Orderu Odrodzenia Polski (1983), Krzyżem Oficerskim Orderu
              Odrodzenia Polski (2002).
            </p>
          </div>
          <div className={`gallery ${styles.gallery_patron}`}>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_w-pracowni-przy-portrecie-mieczyslawa-kosza.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_w-pracowni-przy-portrecie-mieczyslawa-kosza-min.jpg'
                alt='Portret Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński w pracowni przy portrecie Mieczysława Kosza, 1973, fot. A. Polakowski'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_forma-rzezbiarska-przy-chatce-zaka_lublin.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_forma-rzezbiarska-przy-chatce-zaka_lublin-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Forma rzeźbiarska przy Chatce Żaka w Lublinie, 1964'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_glowa-kobieca.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_glowa-kobieca-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Głowa kobieca, 1961, fot. Andrzej Polakowski'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_glowa-niebieska-3.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_glowa-niebieska-3-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Głowa Niebieska III, 1963, wł. Centrum Rzeźby Polskiej w Orońsku, fot. Jan Gaworski'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_macierzynstwo.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_macierzynstwo-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Macierzyństwo, 1958, wł. MN w Lublinie, fot. Emilia Kaczanowska'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_pomnik-bohaterskim-lotnikom.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_pomnik-bohaterskim-lotnikom-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Pomnik Bohaterskim Lotnikom, 1966'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_pomnik-ku-czci-ofiar-faszyzmu-belzec.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_pomnik-ku-czci-ofiar-faszyzmu-belzec-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Pomnik Ku czci Ofiar faszyzmu, Bełżec 1963, współpraca - Jarosław Olejnicki'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_pomnik-pamieci-rozstrzelanych-rodzin_zbedowice.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_pomnik-pamieci-rozstrzelanych-rodzin_zbedowice-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Pomnik Pamięci Rozstrzelanych Rodzin, Zbędowice 1981, fot. Jakub Baranowski'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_projekt-pomnika-walki-i-meczenstwa-na-majdanku.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_projekt-pomnika-walki-i-meczenstwa-na-majdanku-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Projekt pomnika Walki i Męczeństwa na Majdanku, współpraca Juliusz Kłeczek, 1967'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_quo-vadis.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_quo-vadis-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Quo Vadis, 1976, fot. Jakub Baranowski'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_roza.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_roza-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Róża, 1971'
              />
            </a>
            <a href='/img/galeria/patron/stanislaw-strzyzynski_widmo-zaglady.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_widmo-zaglady-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Widmo Zagłady, beton, 1968'
              />
            </a>

            <a href='/img/galeria/patron/stanislaw-strzyzynski_z-cyklu-ekshumacja.jpg'>
              <img
                src='/img/galeria/patron/stanislaw-strzyzynski_z-cyklu-ekshumacja-min.jpg'
                alt='Rzeźba Stanisława Strzyżyńskiego'
                title='Stanisław Strzyżyński, Z cyklu Ekshumacja, brąz, 14 x 21 cm, ok. 1975, fot. Jan Gaworski'
              />
            </a>
          </div>
        </div>
      </section>

      <section id='dzialania' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Działania</h2>
        <p>
          <ol className={styles.list_numbers}>
            <li>
              Zrealizowano film dokumentalny w reżyserii Magdy Matwijow o
              Stanisławie Strzyżyńskim oraz wydarzenia związane z Jubileuszem
              setnej rocznicy urodzin rzeźbiarza Stanisława Strzyżyńskiego –
              wybitnego rzeźbiarza Lubelszczyzny – październik 2023 r. To
              wydarzenie pod patronatem posła na Sejm RP, Marszałka Województwa
              Lubelskiego, Starosty Puławskiego i Burmistrza Nałęczowa nie tylko
              uczciło jego dziedzictwo artystyczne, ale także stało się
              inspiracją dla lokalnej społeczności do aktywnego udziału w życiu
              kulturalnym.
            </li>
            <li>
              Wystawa plenerowa przed Nałęczowskim Ośrodkiem Kultury składająca
              się z cyklu 8 tablic zawierających informację o sylwetce i dorobku
              artystycznym Stanisława Strzyżyńskiego – październik 2023 r.
            </li>
            <li>
              Współorganizowanie wystawy{' '}
              <i>Pasjonują mnie ludzkie losy. Stanisław Strzyżyński</i> razem z
              Muzeum Nadwiślańskim w Kazimierzu Dolnym – grudzień 2023 r.
            </li>
            <li>
              Przygotowanie i wydanie monografii Stanisława Strzyżyńskiego razem
              z Muzeum Nadwiślańskim w Kazimierzu Dolnym – marzec 2024 r.
            </li>
            <li>
              Warsztaty artystyczne. Organizacja różnorodnych form aktywności
              twórczej, w tym warsztatów artystycznych – malarskich i
              rzeźbiarskich dla dzieci i młodzieży oraz seniorów rozwijających
              ich umiejętności twórcze i kreatywność
            </li>
            <li>
              Wspieranie rozwoju artystycznego. Udostępnienie młodym talentom
              możliwości nauki i eksperymentowania z różnymi technikami i
              materiałami, prezentując ich efekty na wystawach plenerowych
            </li>
            <li>
              Inicjatywy Kulturalne. Organizacja plenerów i wystaw malarstwa dla
              artystów Grupy Kontrast, malarstwa Magdy i Zbigniewa
              Strzyżyńskich, rzeźby, rysunków i projektów Stanisława
              Strzyżyńskiego, grafiki Michała Matwijowa oraz fotografii Jakuba
              Baranowskiego w Galerii Ogrodowej Fundacji Sztuka i Dom.
              Organizacja spotkań z poetką, pisarką, filozofem, z ciekawymi
              ludźmi, 3 koncertów charytatywnych dla młodych muzyków z Ukrainy a
              także 2 kawiarenek obywatelskich
            </li>
            <li>
              Współpraca Lokalna: Współpraca z lokalnymi i regionalnymi
              instytucjami, szkołami i organizacjami w celu realizacji projektów
              na rzecz lokalnej społeczności oraz zacieśniania więzi
              społecznych.
            </li>
          </ol>
        </p>
      </section>

      <section className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Projekty</h2>

        <h3 id='projekty-zrealizowane'>Zrealizowane</h3>
        <p>
          <ol className={styles.list_numbers}>
            <li>
              <strong>
                Projekt <i>Jeszcze będzie normalnie</i> (2022)
              </strong>
              . Realizacja projektu dla młodzieży i dorosłych uchodźców z
              Ukrainy w ramach działania grupy nieformalnej <i>Razem raźniej</i>
              .
            </li>
            <li>
              <strong>
                Projekt <i>Wsparcie na starcie</i> (2023)
              </strong>{' '}
              w ramach programu Małe FIO.
            </li>
            <li>
              <strong>
                Projekt <i>Debiuty w partycypacji</i> (2023)
              </strong>
              . Przeprowadzenie diagnozy partycypacyjnej badającej przyczyny
              niskiej aktywności społecznej mieszkańców wsi gminy Nałęczów.
            </li>
            <li>
              <strong>
                Projekt Fundacji mBanku <i>Matematyka – piękno i logika </i>
                (2023)
              </strong>
              . Realizacja projektu pokazującego dzieciom i młodzieży wartość
              nauki matematyki oraz jej związek ze sztuką.
            </li>
          </ol>
        </p>

        <h3 id='projekty-aktualne'>Trwające projekty</h3>
        <p>
          <ol className={styles.list_numbers}>
            <li>
              <strong>
                Projekt <i>Dwa sektory – jedna wizja</i> (2023/2024)
              </strong>
              , w którym wiceprezeska fundacji zdobywa umiejętności potrzebne do
              realizacji założonych celów osobistych i celów fundacji
              korzystając z profesjonalnych narzędzi i coachingu.
            </li>
            <li>
              <strong>
                Projekt <i>Masz Głos</i> Fundacji Batorego (2024)
              </strong>{' '}
              wspierający naszą fundację w powołaniu i działaniu Gminnej Rady
              Seniorów w Nałęczowie.
            </li>
            <li>
              <strong>
                Projekt <i>SPLOTOWE WARTOŚCI</i> (2023/2024)
              </strong>
              . Realizowanie projektu{' '}
              <i>
                Poznajmy prawa i wartości Unii Europejskiej poprzez sztukę,
                filozofię i dialog międzypokoleniowy{' '}
              </i>
              skierowanego do młodzieży, seniorów, artystów i osób
              zainteresowanych tematyką europejską poprzez udział w warsztatach,
              debatach, konferencji naukowej, plenerze malarskim i wystawie
              poplenerowej.
            </li>
          </ol>
        </p>
      </section>

      <section id='czlonkowie-zarzadu' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Członkowie zarządu</h2>
        <p>
          <ol className={styles.list_numbers}>
            <li>
              <b>Prezes Fundacji: Zbigniew Strzyżyński </b> - artysta, pedagog,
              społecznik, odznaczony Złotym i Srebrnym Krzyżem Zasługi, malarz i
              rzeźbiarz, który brał udział w 260 wystawach.
            </li>
            <li>
              <b>Wiceprezeska Fundacji: Dorota Strzyżyńska </b> - specjalistka
              profilaktyki, rozwoju społecznego, pomysłodawczyni i realizatorka
              projektów kulturalnych i społecznych.
              <ul>
                <li>Magister pedagogiki opiekuńczo-wychowawczej.</li>
                <li>
                  Studia podyplomowe z wychowania przedszkolnego,
                  oligofrenopedagogiki, wychowania do życia w rodzinie,
                  doradztwa zawodowego, menadżer oświaty.
                </li>
                <li>
                  Obecnie na emeryturze. Pracowała jako dyrektor przedszkola z
                  10-letnim stażem, pedagog szkolny z 25-letnim stażem,
                  nauczyciel dyplomowany wdż, doradztwa zawodowego oraz pedagog
                  specjalny.
                </li>
                <li>
                  Otrzymała Nagrodę Ministra Oświaty za osiągnięcia w pracy
                  oświatowej i odznakę Zasłużonego Działacza Kultury za
                  promowanie kultury.
                </li>
              </ul>
            </li>
          </ol>
        </p>
      </section>

      <section id='wspolpracownicy' className={styles.section} style={{ backgroundColor }}>
        <h2 className={styles.title}>Współpracownicy</h2>
        <p>
          <ol className={styles.list_numbers}>
            <li>
              <b>Reżyserka Magda Matwijow</b> - angażuje się w działania filmowe
              i artystyczne fundacji.
            </li>
            <li>
              <b>Psycholożka i coach Agnieszka Baranowska</b> - oferuje wsparcie
              psychologiczne uczestnikom projektów w ramach działań edukacyjnych
              i społecznych.
            </li>
            <li>
              <b>Edukatorka ekologiczna Małgorzata Szwałek</b> – uczestniczy w
              realizacji projektów edukacyjnych, propagując ideę zrównoważonego
              rozwoju.
            </li>
            <li>
              <b>Fotograficy – Jakub Baranowski, Michał Matwijow</b> -
              współpracują z fundacją, prezentując swoje prace i udzielając
              wsparcia w różnych projektach.
            </li>
            <li>
              <b>
                Specjaliści z branży IT: Jacek Szwałek, Jakub Baranowski, Michał
                Matwijow
              </b>
              – współpracują z fundacją w tym obszarze.
            </li>
            <li>
              <b>Artyści malarze, rzeźbiarze, graficy</b>.
            </li>
          </ol>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
