import { useState } from "react";
import "./App.css";

import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import image6 from "./assets/image6.jpeg";
import logo from "./assets/image.8.png";

const photos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setSelectedImage((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = (e) => {
    e.stopPropagation();

    setSelectedImage((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Didim Decoration" className="emblem" />

          <div className="brand-text">
            DIDIM
            <span>DECORATION</span>
          </div>
        </a>

        <nav className="desktop-menu">
          <a href="#home">Ana Sayfa</a>
          <a href="#services">Hizmetler</a>
          <a href="#portfolio">Projeler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#contact">İletişim</a>
        </nav>

        <a href="#contact" className="nav-button">
          İletişim
        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* ================= MOBILE MENU ================= */}

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Ana Sayfa
        </a>

        <a href="#services" onClick={closeMenu}>
          Hizmetler
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Projeler
        </a>

        <a href="#about" onClick={closeMenu}>
          Hakkımızda
        </a>

        <a href="#contact" onClick={closeMenu}>
          İletişim
        </a>

      </div>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-left">

          <div className="hero-label">
            DIDIM DECORATION
          </div>

          <h1>
            Evinizi
            <br />

            <span>
              hayalinizdeki
            </span>

            <br />

            yaşam alanına
            <br />

            dönüştürüyoruz.
          </h1>

          <p className="hero-description">
            Modern, şık ve size özel ev dekorasyonu.
            Yaşam alanlarınızı estetik, konforlu ve
            benzersiz mekanlara dönüştürüyoruz.
          </p>

          <div className="hero-buttons">

            <a
              href="#portfolio"
              className="primary-button"
            >
              Projelerimizi Keşfet
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              İletişime Geç
            </a>

          </div>

        </div>


        {/* HERO PHOTO */}

        <div className="hero-right">

          <div
            className="hero-photo-card"
            onClick={() => setSelectedImage(0)}
          >

            <img
              src={photos[0]}
              alt="Didim Decoration"
            />

            <div className="photo-tag">
              <span>01</span>
              <span>HOME DECORATION</span>
            </div>

          </div>

          <div className="yellow-circle"></div>

          <div className="hero-decoration">
            INTERIOR
            <br />
            DESIGN
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section id="services" className="services-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              HİZMETLERİMİZ
            </span>

            <h2>
              Eviniz için
              <br />
              <span>tasarlıyoruz.</span>
            </h2>
          </div>

          <p>
            Yaşam alanlarınızı sizin tarzınızı
            yansıtan özel mekanlara dönüştürüyoruz.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-number">
              01
            </div>

            <div className="service-icon">
              🏠
            </div>

            <h3>
              Ev Dekorasyonu
            </h3>

            <p>
              Evinizin karakterine uygun,
              modern ve estetik dekorasyon.
            </p>

          </div>


          <div className="service-card yellow-card">

            <div className="service-number">
              02
            </div>

            <div className="service-icon">
              🛋️
            </div>

            <h3>
              İç Mekan Tasarımı
            </h3>

            <p>
              Fonksiyonel ve şık yaşam alanları
              tasarlıyoruz.
            </p>

          </div>


          <div className="service-card">

            <div className="service-number">
              03
            </div>

            <div className="service-icon">
              🪴
            </div>

            <h3>
              Yaşam Alanları
            </h3>

            <p>
              Kendinizi iyi hissedeceğiniz
              sıcak ve konforlu mekanlar.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PORTFOLIO ================= */}

      <section id="portfolio" className="portfolio-section">

        <div className="portfolio-heading">

          <div>

            <span className="section-label">
              PORTFOLYOMUZ
            </span>

            <h2>
              İlham veren
              <br />
              <span>mekanlar.</span>
            </h2>

          </div>

          <p>
            Daha önce gerçekleştirdiğimiz
            dekorasyon projelerimizden seçmeler.
          </p>

        </div>


        <div className="gallery">

          {photos.map((photo, index) => (

            <div
              className={`gallery-item gallery-${index + 1}`}
              key={index}
              onClick={() => setSelectedImage(index)}
            >

              <img
                src={photo}
                alt={`Didim Decoration proje ${index + 1}`}
              />

              <div className="gallery-overlay">

                <div>
                  <small>
                    DIDIM DECORATION
                  </small>

                  <h3>
                    Ev Dekorasyonu
                  </h3>
                </div>

                <span>
                  ↗
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="about-section">

        <div className="about-image">

          <img
            src={photos[1]}
            alt="Didim Decoration"
          />

          <div className="about-number">
            06
          </div>

        </div>


        <div className="about-content">

          <span className="section-label">
            BİZ KİMİZ?
          </span>

          <h2>
            Eviniz,
            <br />
            sizin
            <span> hikayeniz.</span>
          </h2>

          <p>
            Didim Decoration olarak evleri sadece
            dekore etmiyor, kendinizi iyi hissedeceğiniz
            yaşam alanları tasarlıyoruz.
          </p>

          <p>
            Her projede modern tasarımı, konforu ve
            sizin kişisel tarzınızı bir araya getiriyoruz.
          </p>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-main">

          <span className="section-label">
            BİZE ULAŞIN
          </span>

          <h2>
            Hayalinizdeki
            <br />
            <span>evi</span>
            birlikte
            <br />
            tasarlayalım.
          </h2>

        </div>


        <div className="contact-info">

          <a
            href="tel:+905459752586"
            className="contact-item"
          >

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <small>
                TELEFON
              </small>

              <strong>
                +90 545 975 25 86
              </strong>
            </div>

          </a>


          <a
            href="mailto:umit_didim09@hotmail.com"
            className="contact-item"
          >

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <small>
                E-MAIL
              </small>

              <strong>
                umit_didim09@hotmail.com
              </strong>
            </div>

          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-brand">

          <img
            src={logo}
            alt="Didim Decoration"
          />

          <div>
            DIDIM
            <span>DECORATION</span>
          </div>

        </div>


        <div className="footer-contact">

          <a href="tel:+905459752586">
            +90 545 975 25 86
          </a>

          <a href="mailto:umit_didim09@hotmail.com">
            umit_didim09@hotmail.com
          </a>

        </div>


        <p>
          © 2026 Didim Decoration
        </p>

      </footer>


      {/* ================= LIGHTBOX ================= */}

      {selectedImage !== null && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>


          <button
            className="lightbox-arrow lightbox-left"
            onClick={previousImage}
          >
            ←
          </button>


          <div
            className="lightbox-image-container"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={photos[selectedImage]}
              alt="Didim Decoration"
            />

            <div className="lightbox-counter">
              {selectedImage + 1} / {photos.length}
            </div>

          </div>


          <button
            className="lightbox-arrow lightbox-right"
            onClick={nextImage}
          >
            →
          </button>

        </div>

      )}

    </div>
  );
}

export default App;