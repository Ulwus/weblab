import './App.css';
import profileImg from './assets/resim.jpeg';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <h1>Oğuzhan Gündüz - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">

        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src={profileImg} alt="Oğuzhan Gündüz'ün vesikalık fotoğrafı" style={{ width: '150px', borderRadius: '8px' }} />
            <figcaption>Oğuzhan Gündüz</figcaption>
          </figure>
          <p>Merhaba, ben bir yazılım mühendisliği öğrencisiyim. Web teknolojileri ve erişilebilirlik üzerine çalışıyorum.</p>
          <ul>
            <li>Öğrenci No: 230541054</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript & React</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>E-Ticaret Uygulaması</h3>
            <p>Kullanıcıların ürün arayıp sepete ekleyebildiği tam yığın bir web uygulaması.</p>
            <p><strong>Teknolojiler:</strong> React, Node.js, MongoDB</p>
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" alt="E-ticaret uygulaması ürün listeleme ekran görüntüsü" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} />
          </article>

          <article>
            <h3>Otomatik Sınav Çizelgeleyici</h3>
            <p>Genetik algoritmalar kullanarak okul sınav takvimini optimize eden sistem.</p>
            <p><strong>Teknolojiler:</strong> Java, Spring Boot</p>
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" alt="Sınav takvimi optimizasyon arayüzü" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} />
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 Oğuzhan Gündüz. Tüm hakları saklıdır.</p>
        <p><a href="https://github.com/Ulwus">GitHub Profilim</a></p>
      </footer>
    </>
  );
}

export default App;
