export default function Footer() {
  return (
    <footer
      className="mt-24 pt-12 border-t-2 border-black/5 dark:border-white/5
        text-center text-slate-600 dark:text-gray-400 font-medium pb-4"
    >
      <p>&copy; {new Date().getFullYear()} Oğuzhan Gündüz. Tüm hakları saklıdır.</p>
      <p className="mt-4">
        <a
          href="https://github.com/Ulwus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profilim"
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
          aria-label="LinkedIn Profilim"
          className="text-primary font-bold no-underline px-4 py-2 rounded-lg
            shadow-neo dark:shadow-md ml-2 hover:shadow-neo-in dark:hover:shadow-inner
            active:shadow-neo-in transition-shadow"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

