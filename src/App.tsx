import { useState } from 'react';
import type { FormEvent } from 'react';
import profileImg from './assets/resim.jpeg';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import UIKit from './pages/UIKit';

function App() {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formVals = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const newErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formVals.name || formVals.name.trim().length < 2) {
      newErrors.name = 'Lütfen geçerli bir ad soyad giriniz (en az 2 karakter).';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formVals.email || !emailRegex.test(formVals.email)) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi giriniz.';
      isValid = false;
    }

    if (!formVals.subject) {
      newErrors.subject = 'Lütfen bir konu seçiniz.';
      isValid = false;
    }

    if (!formVals.message || formVals.message.trim().length < 10) {
      newErrors.message = 'Mesajınız en az 10 karakter uzunluğunda olmalıdır.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert('Form başarıyla gönderildi!');
      e.currentTarget.reset();
    }
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  if (page === 'uikit') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700
            text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg
            hover:scale-110 transition-transform"
          aria-label="Tema değiştir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => setPage('portfolio')}
            className="text-primary hover:text-primary-strong dark:text-primary-soft
              font-medium mb-4 inline-flex items-center gap-1"
          >
            &larr; Portföye Dön
          </button>
        </div>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0
          bg-primary text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700
          text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg
          hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary-soft">
            Oğuzhan Gündüz
          </h1>
          <nav aria-label="Ana navigasyon" className="flex items-center gap-2">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                    hover:bg-primary/10 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                    hover:bg-primary/10 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                    hover:bg-primary/10 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
            <button
              onClick={() => setPage('uikit')}
              className="px-3 py-1 rounded-md text-primary dark:text-primary-soft
                font-medium border border-primary/30 hover:bg-primary/10
                dark:hover:bg-gray-800 transition-colors text-sm"
            >
              UI Kit
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main id="main-content" className="max-w-6xl mx-auto px-4">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src={profileImg}
                alt="Oğuzhan Gündüz'ün vesikalık fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba, ben bir yazılım mühendisliği öğrencisiyim. Web teknolojileri ve
                erişilebilirlik üzerine çalışıyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">HTML5 &amp; CSS3</li>
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">JavaScript &amp; React</li>
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">Git &amp; GitHub</li>
                <li className="bg-secondary text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Projelerim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              variant="elevated"
              title="E-Ticaret Uygulaması"
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
              imageAlt="E-ticaret uygulaması ürün listeleme ekran görüntüsü"
            >
              <p className="mb-2">Kullanıcıların ürün arayıp sepete ekleyebildiği tam yığın bir web uygulaması.</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">React</span>
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">Node.js</span>
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">MongoDB</span>
              </div>
            </Card>

            <Card
              variant="elevated"
              title="Otomatik Sınav Çizelgeleyici"
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
              imageAlt="Sınav takvimi optimizasyon arayüzü"
            >
              <p className="mb-2">Genetik algoritmalar kullanarak okul sınav takvimini optimize eden sistem.</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">Java</span>
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">Spring Boot</span>
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">Algoritmalar</span>
              </div>
            </Card>

            <Card
              variant="outlined"
              title="Portföy Web Sitesi"
            >
              <p className="mb-2">Tailwind CSS ile tasarlanmış kişisel portföy sitesi.</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">React</span>
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">Tailwind</span>
                <span className="bg-primary/10 text-primary dark:text-primary-soft text-xs px-2 py-0.5 rounded-full">TypeScript</span>
              </div>
            </Card>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 scroll-mt-20">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4" noValidate onSubmit={handleSubmit}>
              <Input
                id="name"
                name="name"
                label="Ad Soyad"
                placeholder="Oğuzhan Gündüz"
                required
                error={errors.name || undefined}
              />

              <Input
                id="email"
                name="email"
                label="E-posta"
                type="email"
                placeholder="ornek@mail.com"
                required
                error={errors.email || undefined}
              />

              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Konu
                </label>
                <select
                  id="subject"
                  name="subject"
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  aria-invalid={!!errors.subject}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300
                    focus:ring-2 focus:ring-primary-soft focus:outline-none
                    dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                    transition-colors"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                {errors.subject && (
                  <p id="subject-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300
                    focus:ring-2 focus:ring-primary-soft focus:outline-none
                    dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                    transition-colors"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200
        dark:border-gray-700 text-center py-6 px-4 text-gray-500
        dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Oğuzhan Gündüz. Tüm hakları saklıdır.</p>
        <p className="mt-2 space-x-4">
          <a
            href="https://github.com/Ulwus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilim (Yeni sekmede açılır)"
            className="text-primary dark:text-primary-soft hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/Ulwus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profilim (Yeni sekmede açılır)"
            className="text-primary dark:text-primary-soft hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
