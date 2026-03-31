import ContactForm from '../forms/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="mt-20 scroll-mt-28 px-4 pb-14">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[2.25rem] font-extrabold tracking-[-0.025em]
            flex items-center gap-4 text-gray-900 dark:text-white mb-10"
        >
          <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
          İletişim
        </h2>

        <ContactForm />
      </div>
    </section>
  );
}

