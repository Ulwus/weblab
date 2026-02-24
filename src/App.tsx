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

          <div className="profile-container">
            <figure>
              <img src={profileImg} alt="Oğuzhan Gündüz'ün vesikalık fotoğrafı" />
              <figcaption>Oğuzhan Gündüz</figcaption>
            </figure>
          </div>

          <div className="about-content">
            <p>
              Merhaba, ben bir yazılım mühendisliği öğrencisiyim. Web teknolojileri ve erişilebilirlik üzerine çalışıyorum.
            </p>
            <ul>
              <li>Öğrenci No: 230541054</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript & React</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>E-Ticaret Uygulaması</h3>
            <p>Kullanıcıların ürün arayıp sepete ekleyebildiği tam yığın bir web uygulaması.</p>
            <p><strong>Teknolojiler:</strong> React, Node.js, MongoDB</p>
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" alt="E-ticaret uygulaması ürün listeleme ekran görüntüsü" loading="lazy" />
          </article>

          <article>
            <h3>Otomatik Sınav Çizelgeleyici</h3>
            <p>Genetik algoritmalar kullanarak okul sınav takvimini optimize eden sistem.</p>
            <p><strong>Teknolojiler:</strong> Java, Spring Boot</p>
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" alt="Sınav takvimi optimizasyon arayüzü" loading="lazy" />
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST">
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: <span aria-hidden="true">*</span></label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: <span aria-hidden="true">*</span></label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: <span aria-hidden="true">*</span></label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız: <span aria-hidden="true">*</span></label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Oğuzhan Gündüz. Tüm hakları saklıdır.</p>
        <p>
          <a href="https://github.com/Ulwus" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profilim (Yeni sekmede açılır)">GitHub Profilim</a>
          <a href="https://linkedin.com/in/Ulwus" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profilim (Yeni sekmede açılır)">LinkedIn</a>
        </p>
      </footer>
    </>
  );
}

export default App;
