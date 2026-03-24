import { useState } from 'react';
import type { FormEvent } from 'react';
import profileImg from './assets/resim.jpeg';
import Button from './components/Button';
import Input from './components/Input';
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
          className="fixed top-4 right-4 z-50 bg-gray-800 dark:bg-yellow-400
            text-white dark:text-gray-900 w-10 h-10 flex items-center justify-center
            text-xl rounded-full shadow-lg hover:scale-110 transition-transform
            border-2 border-gray-600 dark:border-yellow-500"
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
    <div className="min-h-screen bg-surface sm:bg-bg dark:bg-gray-950 flex justify-center sm:p-8 lg:p-12">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
          bg-gradient-to-br from-primary to-accent text-white px-6 py-3 rounded-xl
          font-bold z-[9999] no-underline"
      >
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-800 dark:bg-yellow-400
          text-white dark:text-gray-900 w-10 h-10 flex items-center justify-center
          text-xl rounded-full shadow-lg hover:scale-110 transition-transform
          border-2 border-gray-600 dark:border-yellow-500"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Neumorphic Container */}
      <div className="w-full sm:max-w-[1200px] bg-surface dark:bg-gray-900
        sm:rounded-[2rem] sm:shadow-neo dark:sm:shadow-2xl
        p-[clamp(1.5rem,4vw,2.5rem)] sm:p-[clamp(2.5rem,4vw,4rem)] lg:px-20 lg:py-16">

        {/* Header */}
        <header className="sticky top-0 z-10 bg-surface dark:bg-gray-900
          flex flex-col sm:flex-row items-center justify-between
          gap-5 pb-6 border-b border-black/8 dark:border-white/10 mb-14 pt-2">
          <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold
            tracking-[-0.05em] bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent
            text-center sm:text-left m-0">
            Oğuzhan Gündüz
          </h1>
          <nav aria-label="Ana navigasyon" className="flex items-center gap-3">
            <ul className="flex flex-wrap gap-4 justify-center list-none p-0 m-0">
              <li className="flex">
                <a
                  href="#hakkimda"
                  className="inline-flex items-center justify-center no-underline
                    text-slate-600 dark:text-gray-300 font-semibold leading-none
                    px-[1.4rem] py-[0.85rem] rounded-[20px]
                    bg-surface dark:bg-gray-700 shadow-neo dark:shadow-md
                    hover:text-primary hover:shadow-neo-in hover:translate-y-0.5
                    dark:hover:shadow-inner transition-all"
                >
                  Hakkımda
                </a>
              </li>
              <li className="flex">
                <a
                  href="#projeler"
                  className="inline-flex items-center justify-center no-underline
                    text-slate-600 dark:text-gray-300 font-semibold leading-none
                    px-[1.4rem] py-[0.85rem] rounded-[20px]
                    bg-surface dark:bg-gray-700 shadow-neo dark:shadow-md
                    hover:text-primary hover:shadow-neo-in hover:translate-y-0.5
                    dark:hover:shadow-inner transition-all"
                >
                  Projeler
                </a>
              </li>
              <li className="flex">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center no-underline
                    text-slate-600 dark:text-gray-300 font-semibold leading-none
                    px-[1.4rem] py-[0.85rem] rounded-[20px]
                    bg-surface dark:bg-gray-700 shadow-neo dark:shadow-md
                    hover:text-primary hover:shadow-neo-in hover:translate-y-0.5
                    dark:hover:shadow-inner transition-all"
                >
                  İletişim
                </a>
              </li>
            </ul>
            <button
              onClick={() => setPage('uikit')}
              className="inline-flex items-center justify-center
                text-primary dark:text-primary-soft font-semibold leading-none
                px-[1.4rem] py-[0.85rem] rounded-[20px]
                bg-surface dark:bg-gray-700 shadow-neo dark:shadow-md
                hover:shadow-neo-in hover:translate-y-0.5
                dark:hover:shadow-inner transition-all text-sm"
            >
              UI Kit
            </button>
          </nav>
        </header>

        {/* Main */}
        <main id="main-content">
          {/* Hakkımda */}
          <section id="hakkimda" className="mt-20 scroll-mt-32">
            <h2 className="text-[2.25rem] font-extrabold tracking-[-0.025em] mb-12
              flex items-center gap-4 text-gray-900 dark:text-white">
              <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
              Hakkımda
            </h2>

            {/* Profile */}
            <div className="flex items-center gap-12 justify-center mb-12">
              <figure className="relative flex flex-col items-center m-0">
                <img
                  src={profileImg}
                  alt="Oğuzhan Gündüz'ün vesikalık fotoğrafı"
                  className="w-[220px] h-[220px] rounded-3xl object-cover shadow-neo dark:shadow-xl
                    border-4 border-surface dark:border-gray-700"
                />
                <figcaption className="absolute -bottom-5 font-bold text-[1.1rem]
                  text-gray-900 dark:text-white bg-surface dark:bg-gray-800
                  px-6 py-3 rounded-2xl shadow-neo dark:shadow-lg whitespace-nowrap">
                  Oğuzhan Gündüz
                </figcaption>
              </figure>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <p className="text-[1.25rem] text-slate-600 dark:text-gray-400 leading-[1.8] m-0">
                Merhaba, ben bir yazılım mühendisliği öğrencisiyim. Web teknolojileri ve
                erişilebilirlik üzerine çalışıyorum.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center list-none p-0">
                <li className="bg-surface dark:bg-gray-800 px-7 py-4 rounded-2xl font-semibold text-primary shadow-neo dark:shadow-md">
                  Öğrenci No: 230541054
                </li>
                <li className="bg-surface dark:bg-gray-800 px-7 py-4 rounded-2xl font-semibold text-primary shadow-neo dark:shadow-md">
                  HTML5 &amp; CSS3
                </li>
                <li className="bg-surface dark:bg-gray-800 px-7 py-4 rounded-2xl font-semibold text-primary shadow-neo dark:shadow-md">
                  JavaScript &amp; React
                </li>
                <li className="bg-surface dark:bg-gray-800 px-7 py-4 rounded-2xl font-semibold text-primary shadow-neo dark:shadow-md">
                  Git &amp; GitHub
                </li>
              </ul>
            </div>
          </section>

          {/* Projeler */}
          <section id="projeler" className="mt-20 scroll-mt-32">
            <h2 className="text-[2.25rem] font-extrabold tracking-[-0.025em] mb-12
              flex items-center gap-4 text-gray-900 dark:text-white">
              <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
              Projelerim
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:grid-cols-3 gap-10">
              {/* Proje 1 */}
              <article className="flex flex-col bg-surface dark:bg-gray-800 rounded-3xl p-10 mb-0 shadow-neo dark:shadow-lg">
                <h3 className="text-[1.75rem] font-extrabold mb-4 text-gray-900 dark:text-white">
                  E-Ticaret Uygulaması
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-[1.1rem]">
                  Kullanıcıların ürün arayıp sepete ekleyebildiği tam yığın bir web uygulaması.
                </p>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-[1.1rem]">
                  <strong className="text-primary">Teknolojiler:</strong> React, Node.js, MongoDB
                </p>
                <ul className="flex flex-wrap gap-2 mt-4 list-none p-0">
                  <li className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary
                    bg-gradient-to-br from-slate-400/15 to-slate-400/5 shadow-neo dark:shadow-sm dark:bg-gray-700">
                    React
                  </li>
                  <li className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary
                    bg-gradient-to-br from-slate-400/15 to-slate-400/5 shadow-neo dark:shadow-sm dark:bg-gray-700">
                    Node.js
                  </li>
                  <li className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary
                    bg-gradient-to-br from-slate-400/15 to-slate-400/5 shadow-neo dark:shadow-sm dark:bg-gray-700">
                    MongoDB
                  </li>
                </ul>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
                  alt="E-ticaret uygulaması ürün listeleme ekran görüntüsü"
                  loading="lazy"
                  className="w-full rounded-2xl mt-8 shadow-neo-in dark:shadow-inner border-4 border-surface dark:border-gray-700"
                />
              </article>

              {/* Proje 2 */}
              <article className="flex flex-col bg-surface dark:bg-gray-800 rounded-3xl p-10 mb-0 shadow-neo dark:shadow-lg">
                <h3 className="text-[1.75rem] font-extrabold mb-4 text-gray-900 dark:text-white">
                  Otomatik Sınav Çizelgeleyici
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-[1.1rem]">
                  Genetik algoritmalar kullanarak okul sınav takvimini optimize eden sistem.
                </p>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-[1.1rem]">
                  <strong className="text-primary">Teknolojiler:</strong> Java, Spring Boot
                </p>
                <ul className="flex flex-wrap gap-2 mt-4 list-none p-0">
                  <li className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary
                    bg-gradient-to-br from-slate-400/15 to-slate-400/5 shadow-neo dark:shadow-sm dark:bg-gray-700">
                    Java
                  </li>
                  <li className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary
                    bg-gradient-to-br from-slate-400/15 to-slate-400/5 shadow-neo dark:shadow-sm dark:bg-gray-700">
                    Spring Boot
                  </li>
                  <li className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary
                    bg-gradient-to-br from-slate-400/15 to-slate-400/5 shadow-neo dark:shadow-sm dark:bg-gray-700">
                    Algoritmalar
                  </li>
                </ul>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
                  alt="Sınav takvimi optimizasyon arayüzü"
                  loading="lazy"
                  className="w-full rounded-2xl mt-8 shadow-neo-in dark:shadow-inner border-4 border-surface dark:border-gray-700"
                />
              </article>
            </div>
          </section>

          {/* İletişim */}
          <section id="iletisim" className="mt-20 scroll-mt-32">
            <h2 className="text-[2.25rem] font-extrabold tracking-[-0.025em] mb-12
              flex items-center gap-4 text-gray-900 dark:text-white">
              <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
              İletişim
            </h2>

            <form onSubmit={handleSubmit} noValidate>
              <fieldset className="border-none rounded-3xl p-8 sm:p-12 bg-surface dark:bg-gray-800 shadow-neo dark:shadow-lg">
                <legend className="text-2xl font-extrabold px-6 py-3 text-primary
                  bg-surface dark:bg-gray-800 rounded-2xl shadow-neo dark:shadow-md mb-6">
                  İletişim Formu
                </legend>

                <div className="space-y-7">
                  <Input
                    id="name"
                    name="name"
                    label="Ad Soyad"
                    required
                    error={errors.name || undefined}
                  />

                  <Input
                    id="email"
                    name="email"
                    label="E-posta"
                    type="email"
                    required
                    error={errors.email || undefined}
                  />

                  <div className="space-y-1">
                    <label
                      htmlFor="subject"
                      className="block font-semibold mb-3 text-slate-600 dark:text-gray-300 pl-2"
                    >
                      Konu <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      aria-invalid={!!errors.subject}
                      className="w-full px-6 py-5 border-none rounded-2xl
                        text-[1.05rem] text-gray-900 dark:text-gray-100
                        bg-surface dark:bg-gray-800 shadow-neo-in dark:shadow-inner
                        transition-all font-[inherit]
                        focus:outline-none"
                    >
                      <option value="">-- Seçiniz --</option>
                      <option value="is">İş Teklifi</option>
                      <option value="soru">Soru</option>
                      <option value="oneri">Öneri</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" role="alert"
                        className="text-red-500 text-[0.9rem] font-semibold mt-2 pl-2">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block font-semibold mb-3 text-slate-600 dark:text-gray-300 pl-2"
                    >
                      Mesajınız <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      className="w-full px-6 py-5 border-none rounded-2xl
                        text-[1.05rem] text-gray-900 dark:text-gray-100
                        bg-surface dark:bg-gray-800 shadow-neo-in dark:shadow-inner
                        transition-all font-[inherit]
                        focus:outline-none"
                    />
                    {errors.message && (
                      <p id="message-error" role="alert"
                        className="text-red-500 text-[0.9rem] font-semibold mt-2 pl-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button variant="primary" size="lg" type="submit"
                    className="w-full !py-5 uppercase mt-4">
                    Gönder
                  </Button>
                </div>
              </fieldset>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t-2 border-black/5 dark:border-white/5
          text-center text-slate-600 dark:text-gray-400 font-medium pb-4">
          <p>&copy; {new Date().getFullYear()} Oğuzhan Gündüz. Tüm hakları saklıdır.</p>
          <p className="mt-4">
            <a
              href="https://github.com/Ulwus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profilim (Yeni sekmede açılır)"
              className="text-primary font-bold no-underline px-4 py-2 rounded-lg
                shadow-neo dark:shadow-md ml-2 hover:shadow-neo-in dark:hover:shadow-inner
                active:shadow-neo-in transition-shadow"
            >
              GitHub Profilim
            </a>
            <a
              href="https://linkedin.com/in/Ulwus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profilim (Yeni sekmede açılır)"
              className="text-primary font-bold no-underline px-4 py-2 rounded-lg
                shadow-neo dark:shadow-md ml-2 hover:shadow-neo-in dark:hover:shadow-inner
                active:shadow-neo-in transition-shadow"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
