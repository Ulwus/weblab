export default function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Form Validation',
    'API Entegrasyonu',
    'Erişilebilirlik (a11y)',
  ];

  return (
    <section id="skills" className="mt-20 scroll-mt-28 px-4 pb-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[2.0rem] font-extrabold tracking-[-0.02em]
            text-gray-900 dark:text-white mb-10"
        >
          Yetenekler
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-[18px] font-bold text-primary
                bg-surface dark:bg-gray-800 shadow-neo-in dark:shadow-inner
                border border-black/5 dark:border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

