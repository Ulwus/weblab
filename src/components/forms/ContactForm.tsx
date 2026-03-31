import { useState, type FormEvent } from 'react';
import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Ad soyad zorunludur.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Ad soyad en az 2 karakter olmalıdır.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'E-posta zorunludur.';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Geçerli bir e-posta adresi giriniz.';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Konu zorunludur.';
  }

  if (!data.message.trim()) {
    errors.message = 'Mesaj zorunludur.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Mesaj en az 10 karakter olmalıdır.';
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitSuccess(false);

    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Backend yoksa demo akışı: kısa bir gecikmeyle "gönderildi" simülasyonu.
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitSuccess(true);
      setErrors({});
      setFormData(initialFormData);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Alert variant="success" title="Teşekkürler!">
        Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.
        <div className="mt-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setSubmitSuccess(false)}
          >
            Yeni mesaj gönder
          </Button>
        </div>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="border-none rounded-3xl p-6 sm:p-10 bg-surface dark:bg-gray-800 shadow-neo-in dark:shadow-lg">
        <div className="space-y-6">
          <div className="space-y-1">
            <Input
              id="contact-name"
              name="name"
              label="Ad Soyad"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
              autoComplete="name"
              required
            />
          </div>

          <div className="space-y-1">
            <Input
              id="contact-email"
              name="email"
              label="E-posta"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-subject"
              className="block font-semibold text-slate-600 dark:text-gray-300"
            >
              Konu <span aria-hidden="true">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              aria-invalid={!!errors.subject}
              className="w-full px-4 py-3 rounded-2xl bg-surface dark:bg-gray-800
                border border-black/5 dark:border-white/10 text-gray-900 dark:text-gray-100
                shadow-neo-in dark:shadow-inner focus:outline-none"
              required
            >
              <option value="">-- Seçiniz --</option>
              <option value="is">İş Teklifi</option>
              <option value="soru">Soru</option>
              <option value="oneri">Öneri</option>
            </select>
            {errors.subject && (
              <p role="alert" className="text-red-500 font-semibold text-[0.95rem]">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="block font-semibold text-slate-600 dark:text-gray-300"
            >
              Mesajınız <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              aria-invalid={!!errors.message}
              required
              className="w-full px-4 py-3 rounded-2xl bg-surface dark:bg-gray-800
                border border-black/5 dark:border-white/10 text-gray-900 dark:text-gray-100
                shadow-neo-in dark:shadow-inner focus:outline-none resize-y"
              placeholder="Mesajınızı yazınız..."
            />
            {errors.message && (
              <p role="alert" className="text-red-500 font-semibold text-[0.95rem]">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full uppercase tracking-wide !py-5"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </div>
      </div>
    </form>
  );
}

