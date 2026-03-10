# Web Tasarımı ve Programlama Laboratuvar Çalışmaları

Bu depo, Web Tasarımı ve Programlama dersi kapsamındaki laboratuvar çalışmalarını içermektedir.

## Geliştirici
**Ad Soyad:** Oğuzhan Gündüz  
**Öğrenci No:** 230541054

---

## Lab 1: Temel Kurulum ve Modern UI Tasarımı

Bu projede Vite + React + TypeScript kullanılarak temel bir web uygulaması oluşturulmuş ve modern bir arayüz ile (Glassmorphism vb.) şekillendirilmiştir.

### Kullanılan Teknolojiler
* React 18
* TypeScript
* Vite
* Özel CSS (Animasyonlar, Modern UI)

### Kurulum
```bash
npm install
```

### Çalıştırma
```bash
npm run dev
```
Tarayıcıda `http://localhost:5173` adresini açın.

### Ekran Görüntüleri
![Giriş Ekranı](gitassets/lab1/giris.png)

### Yapılan Commitler

* [`7a317dc`](https://github.com/Ulwus/weblab/commit/7a317dc) Merge pull request #2 from Ulwus/feature/personalize-ui
* [`a722d4c`](https://github.com/Ulwus/weblab/commit/a722d4c) style : update page styling and layout
* [`ec3accd`](https://github.com/Ulwus/weblab/commit/ec3accd) Merge pull request #1 from Ulwus/feature/personalize-ui
* [`62fe894`](https://github.com/Ulwus/weblab/commit/62fe894) docs: add comprehensive README
* [`4688c40`](https://github.com/Ulwus/weblab/commit/4688c40) feat: add personal details to homepage
* [`2dbf330`](https://github.com/Ulwus/weblab/commit/2dbf330) chore: initial project setup with Vite React + TS

---

## Lab 2: Semantik HTML ve Erişilebilirlik (A11Y)

Bu çalışmada, önceden oluşturulan portföy tasarımı semantik HTML5 etiketleriyle (header, nav, main, section, article, footer vb.) yeniden yapılandırılmış ve Web Erişilebilirlik Yönergelerine (WCAG 2.1) tam uyumlu hale getirilmiştir. Neumorphic modern bir UI tasarımı uygulanmıştır.

### Değerlendirme Kriterleri (Checklist)

- [x] Sayfa semantik etiketlerle yapılandırılmış mı? (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Heading hiyerarşisi doğru mu? (`h1` → `h2` → `h3`, seviye atlanmamış)
- [x] Tüm görsellerde anlamlı `alt` metni var mı?
- [x] İletişim formu mevcut ve tüm input'larda `<label>` ilişkisi kurulmuş mu?
- [x] Form alanlarında `required`, `minlength`, `type` gibi doğrulama öznitelikleri var mı?
- [x] Hata mesajı alanları (`<small>` + `role="alert"`) hazırlanmış mı?
- [x] Tab ile gezinme sorunsuz çalışıyor mu? Focus göstergesi görünüyor mu?
- [x] Skip navigation bağlantısı eklenmiş mi?
- [x] `<html lang="tr">` ayarlanmış mı?
- [x] Lighthouse erişilebilirlik puanı 90+ mı? (Ekran görüntüsü eklendi)
- [x] En az 3 commit atılmış ve branch kullanılmış mı?
- [x] GitHub'a push edilmiş mi?

### Erişilebilirlik Puanı (Lighthouse)
![Lighthouse Puanı](gitassets/lab2/puan.png)

### Yapılan Commitler

* [`462c145`](https://github.com/Ulwus/weblab/commit/462c145) feat(a11y): add accessible react form validation with role alert
* [`a7f1ab4`](https://github.com/Ulwus/weblab/commit/a7f1ab4) Merge pull request #3 from Ulwus/feature/semantic-portfolio
* [`46c2bf7`](https://github.com/Ulwus/weblab/commit/46c2bf7) fix(a11y): remove noValidate from form to enforce HTML5 required fields
* [`d64d8d7`](https://github.com/Ulwus/weblab/commit/d64d8d7) fix: adjust text colors for improved a11y contrast ratio
* [`54897a8`](https://github.com/Ulwus/weblab/commit/54897a8) fix: ensure strict a11y focus indicators are visible in neumorphic ui
* [`275f589`](https://github.com/Ulwus/weblab/commit/275f589) style: perfect neumorphic redesign to match provided image and update social links
* [`a44366b`](https://github.com/Ulwus/weblab/commit/a44366b) style: add base CSS and skip link
* [`534fba9`](https://github.com/Ulwus/weblab/commit/534fba9) feat: add accessible contact form
* [`67c65ec`](https://github.com/Ulwus/weblab/commit/67c65ec) feat: add semantic HTML portfolio structure

---

## Lab 3: Responsive Layout ve Design Tokens

Bu çalışmada, portföy sitesine mobile-first responsive layout uygulanmış, CSS design token'ları ile tutarlı bir stil sistemi kurulmuş ve fluid typography ile farklı ekran boyutlarına uyum sağlanmıştır. Navigasyon Flexbox, proje kartları ise CSS Grid ile düzenlenmiştir.

### Değerlendirme Kriterleri (Checklist)

- [x] CSS değişkenleri (`:root` içinde design tokens) tanımlanmış mı?
- [x] Fluid typography (`clamp()`) uygulanmış mı?
- [x] Navigasyon çubuğu Flexbox ile responsive yapılmış mı?
- [x] Proje kartları Grid ile ızgara düzeninde mi?
- [x] Mobile-first yaklaşım uygulanmış mı? (`min-width` media query'ler)
- [x] En az 3 breakpoint tanımlanmış ve çalışıyor mu? (mobil / tablet / masaüstü)
- [x] Görseller `max-width: 100%` ile responsive mi?
- [x] `<meta name="viewport">` etiketi mevcut mu?
- [x] Tab ile gezinme ve focus göstergesi hâlâ çalışıyor mu? (LAB-2 kazanımları bozulmamış)
- [x] 3 ekran görüntüsü (mobil / tablet / masaüstü) alınmış mı?
- [x] CSS Kararları notu yazılmış mı?
- [x] En az 3 anlamlı commit atılmış ve branch kullanılmış mı?
- [x] GitHub'a push edilmiş mi?

### Ekran Görüntüleri

| Mobil | Tablet | Masaüstü |
|-------|--------|----------|
| ![Mobil](screenshots/screenshot-mobile.png) | ![Tablet](screenshots/screenshot-tablet.png) | ![Masaüstü](screenshots/screenshot-desktop.png) |

### Yapılan Commitler

* [`f58c5b4`](https://github.com/Ulwus/weblab/commit/f58c5b4) added image
* [`84054da`](https://github.com/Ulwus/weblab/commit/84054da) docs: document CSS responsive layout decisions
* [`0560dbf`](https://github.com/Ulwus/weblab/commit/0560dbf) fix: responsive and colors
* [`4bceca7`](https://github.com/Ulwus/weblab/commit/4bceca7) feat: implement mobile-first responsive layout
* [`e87cb53`](https://github.com/Ulwus/weblab/commit/e87cb53) feat: add project card grid layout
* [`d2b7d4d`](https://github.com/Ulwus/weblab/commit/d2b7d4d) feat: add responsive navigation with Flexbox
* [`a3d8132`](https://github.com/Ulwus/weblab/commit/a3d8132) feat: add CSS design tokens with fluid typography

---

## Lab 4: Tailwind CSS ve UI Kit Entegrasyonu

Bu çalışmada projeye Tailwind CSS v4 entegre edilmiş, Utility-First yaklaşımıyla özel bileşenlerden oluşan bir UI Kit (Button, Input, Card, Alert) geliştirilmiş ve portföy sayfası Tailwind CSS kullanılarak Neumorphic tasarım diline sadık kalacak şekilde yeniden yazılmıştır.

### Değerlendirme Kriterleri (Checklist)

- [x] Tailwind CSS v4 kurulu ve çalışıyor mu? (npm run dev ile hata yok)
- [x] @theme ile özel renk/font tanımlanmış mı?
- [x] Responsive prefix’ler (sm:, md:, lg:) kullanılmış mı?
- [x] Dark mode (dark:) desteği eklenmiş mi? Toggle butonu çalışıyor mu?
- [x] Button component en az 4 renk varyantına sahip mi?
- [x] Input component hata durumunu (error) destekliyor mu?
- [x] Card component en az 2 stil varyantına sahip mi?
- [x] Alert component en az 4 renk varyantına sahip mi?
- [x] UI Kit sayfasında en az 8 component varyantı sergilenmiş mi?
- [x] Portföy sayfası (veya landing page) Tailwind ile stillenmiş mi?
- [x] Erişilebilirlik korunmuş mu? (focus:ring, aria-label, skip link, role="alert")

### Yapılan Commitler

* [`b0f9d08`](https://github.com/Ulwus/weblab/commit/b0f9d08) Merge pull request #5 from Ulwus/feature/tailwind-ui-kit
* [`4465e26`](https://github.com/Ulwus/weblab/commit/4465e26) fix: restore neumorphic design with Tailwind utility classes
* [`4da0797`](https://github.com/Ulwus/weblab/commit/4da0797) fix: improve dark mode toggle visibility, UI Kit button, and focus styles
* [`bcc1ea6`](https://github.com/Ulwus/weblab/commit/bcc1ea6) feat: add UI Kit page showcasing 8+ component variants
* [`7892508`](https://github.com/Ulwus/weblab/commit/7892508) feat: migrate portfolio page to Tailwind CSS with responsive and dark mode
* [`3d03c7b`](https://github.com/Ulwus/weblab/commit/3d03c7b) feat: add Card and Alert components with multiple variants
* [`12ad511`](https://github.com/Ulwus/weblab/commit/12ad511) feat: add Input component with error and help text states
* [`dc2b7c5`](https://github.com/Ulwus/weblab/commit/dc2b7c5) feat: add Button component with 4 color and 3 size variants
* [`aceae48`](https://github.com/Ulwus/weblab/commit/aceae48) feat: install and configure Tailwind CSS v4 with custom theme
