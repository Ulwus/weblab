export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center px-4 py-14"
    >
      <div className="text-center max-w-3xl">
        <p className="text-primary font-semibold mb-3">Merhaba, ben</p>
        <h1
          className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem]
            font-extrabold tracking-[-0.05em] text-gray-900 dark:text-white mb-5"
        >
          Oğuzhan Gündüz
        </h1>
        <p className="text-[1.15rem] sm:text-[1.35rem] text-slate-600 dark:text-gray-300 mb-10">
          Frontend Developer | React & TypeScript
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="no-underline inline-flex items-center justify-center
              px-7 py-3 rounded-[20px] font-bold bg-surface dark:bg-gray-800
              text-primary shadow-neo-in dark:shadow-inner
              hover:shadow-neo-hover transition-shadow"
          >
            Projelerim
          </a>
          <a
            href="#contact"
            className="no-underline inline-flex items-center justify-center
              px-7 py-3 rounded-[20px] font-bold bg-primary text-white
              hover:bg-primary-strong transition-colors shadow-neo dark:shadow-md"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}

