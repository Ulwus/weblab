import { useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#about', label: 'Hakkımda' },
  { href: '#projects', label: 'Projeler' },
  { href: '#contact', label: 'İletişim' },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-10 bg-surface/80 dark:bg-gray-900/80 backdrop-blur
        border-b border-black/5 dark:border-white/10"
    >
      <nav
        className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Ana navigasyon"
      >
        <a
          href="#hero"
          className="text-[1.65rem] font-extrabold tracking-[-0.04em] text-primary hover:text-primary-strong transition-colors no-underline"
        >
          Portfolyo
        </a>

        <ul className="hidden md:flex items-center gap-5 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 dark:text-gray-300 font-semibold no-underline
                  hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-xl border border-black/5 dark:border-white/10
            bg-surface dark:bg-gray-800"
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-slate-700 dark:bg-gray-200 mb-1" />
          <span className="block w-6 h-0.5 bg-slate-700 dark:bg-gray-200 mb-1" />
          <span className="block w-6 h-0.5 bg-slate-700 dark:bg-gray-200" />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden border-t border-black/5 dark:border-white/10
            bg-surface dark:bg-gray-900 px-4 pb-4"
        >
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-slate-600 dark:text-gray-300 font-semibold
                    hover:text-primary transition-colors no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

