export default function About() {
  return (
    <section
      id="about"
      className="mt-20 scroll-mt-28 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[2.25rem] font-extrabold tracking-[-0.025em]
            flex items-center gap-4 text-gray-900 dark:text-white mb-12"
        >
          <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
          Hakkımda
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <p className="text-[1.25rem] text-slate-600 dark:text-gray-400 leading-[1.8] m-0">
            Merhaba, ben bir yazılım mühendisliği öğrencisiyim. Web teknolojileri
            ve erişilebilirlik üzerine çalışıyorum.
          </p>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center
              list-none p-0 m-0"
          >
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
      </div>
    </section>
  );
}

