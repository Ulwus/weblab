import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  const [dismissedAlerts, setDismissedAlerts] = useState<Record<string, boolean>>({});

  const dismissAlert = (key: string) => {
    setDismissedAlerts((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          UI Kit
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Tüm component varyantlarının tek sayfada sergilendiği bileşen kütüphanesi.
        </p>

        {/* --- BUTTONS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Buttons
          </h2>

          {/* Renk varyantları */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Renk Varyantları
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Boyut varyantları */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Boyut Varyantları
            </h3>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Disabled durumu */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Disabled Durumu
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="secondary" disabled>Secondary Disabled</Button>
              <Button variant="danger" disabled>Danger Disabled</Button>
            </div>
          </div>
        </section>

        {/* --- INPUTS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Inputs
          </h2>

          <div className="max-w-md space-y-4">
            <Input
              id="ui-normal"
              label="Normal Input"
              placeholder="Bir şey yazın..."
            />
            <Input
              id="ui-error"
              label="Hatalı Input"
              error="Bu alan zorunludur"
            />
            <Input
              id="ui-help"
              label="Help Text Input"
              type="email"
              helpText="E-posta adresinizi girin"
            />
            <Input
              id="ui-disabled"
              label="Disabled Input"
              disabled
              value="Düzenlenemez"
            />
          </div>
        </section>

        {/* --- CARDS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Cards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">
              Gölge ile yükseltilmiş kart. Hover'da gölge büyür.
            </Card>
            <Card variant="outlined" title="Outlined Card">
              Çerçeveli kart. Minimal ve temiz görünüm.
            </Card>
            <Card variant="filled" title="Filled Card">
              Dolgulu arka plan. Sayfadan ayrışan alan.
            </Card>
            <Card
              variant="elevated"
              title="Görselli Kart"
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
              imageAlt="Kod editörü ekran görüntüsü"
              footer={<Button size="sm">Detay Gör</Button>}
            >
              Görsel, başlık, içerik ve footer içeren tam donanımlı kart.
            </Card>
          </div>
        </section>

        {/* --- ALERTS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Alerts
          </h2>

          <div className="max-w-xl space-y-4">
            <Alert variant="info" title="Bilgi">
              Bilgilendirme mesajı. Kullanıcıya genel bilgi verir.
            </Alert>
            <Alert variant="success" title="Başarılı">
              İşlem tamamlandı! Veriler kaydedildi.
            </Alert>
            <Alert variant="warning" title="Uyarı">
              Dikkat edilmesi gereken bir durum var.
            </Alert>
            <Alert variant="error" title="Hata">
              Bir hata oluştu. Lütfen tekrar deneyin.
            </Alert>
            {!dismissedAlerts['dismissible'] && (
              <Alert
                variant="info"
                title="Kapatılabilir Alert"
                dismissible
                onDismiss={() => dismissAlert('dismissible')}
              >
                Bu alert kapatılabilir. Sağ üstteki X butonuna tıklayın.
              </Alert>
            )}
          </div>
        </section>

        {/* --- ÖZET --- */}
        <section className="space-y-4 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Varyant Özeti
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3">Component</th>
                  <th className="px-4 py-3">Varyantlar</th>
                  <th className="px-4 py-3">Sayı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium">Button</td>
                  <td className="px-4 py-3">primary, secondary, danger, ghost + sm, md, lg + disabled</td>
                  <td className="px-4 py-3">4 renk × 3 boyut</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium">Input</td>
                  <td className="px-4 py-3">normal, error, helpText, disabled</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium">Card</td>
                  <td className="px-4 py-3">elevated, outlined, filled + image/footer</td>
                  <td className="px-4 py-3">3+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Alert</td>
                  <td className="px-4 py-3">info, success, warning, error + dismissible</td>
                  <td className="px-4 py-3">4+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
