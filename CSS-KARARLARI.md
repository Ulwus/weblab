
# CSS Kararları

## 1. Breakpoint Seçimi

* **Neden 640px ve 1024px seçtim?**
  640px değeri çoğu tablet için mantıklı bir geçiş noktası olduğu için, 1024px ise tipik masaüstü genişliklerini temsil ettiği için seçtim. Ayrıca modern UI kütüphanelerinde de sık kullanılan eşikler olduğu için uyumlu bir yapı kurmak istedim.

* **İçeriğim bu noktalarda nasıl değişiyor?**
  Mobilde içerik tek sütunlu ve daha dar boşluklu. 640px sonrası header yatay hizalanıyor ve about kısmı iki sütuna geçiyor. 1024px sonrası proje kartları 3 sütunlu düzene geçerek masaüstünde daha dengeli görünüyor.

---

## 2. Layout Tercihleri

* **Header için neden Flexbox seçtim?**
  Header tek boyutlu (yatay/dikey) hizalama gerektirdiği için Flexbox daha pratik geldi. Logo ve navigasyonu kolayca hizalayabildim ve mobilde column, tablette row yapısına rahatça geçiş yaptım.

* **Proje kartları için neden Grid seçtim?**
  Kart yapısı iki boyutlu bir düzen gerektirdiği için Grid daha uygundu. Özellikle sütun sayısını breakpoint’e göre değiştirmek Grid ile daha temiz ve kontrol edilebilir oldu.

* **auto-fit mi auto-fill mi kullandım, neden?**
  `auto-fit` kullandım çünkü boş kalan kolonların esneyip alanı doldurmasını istedim. Böylece geniş ekranlarda kartlar boşluk bırakmadan dengeli yayılıyor.

---

## 3. Design Tokens

* **Hangi renk paletini seçtim ve neden?**
  Açık tonlu, yumuşak bir arka plan ve mor/mavi tonlu primary renkler kullandım. Neumorphic tasarıma uygun, gölgeleri belli eden ama gözü yormayan bir palet tercih ettim.

* **Spacing skalasını nasıl belirledim?**
  Küçükten büyüğe düzenli artan bir boşluk sistemi oluşturdum (`3xs`–`3xl`). Böylece margin ve padding değerlerini rastgele değil, tutarlı bir sistem üzerinden verdim.

* **Fluid typography için clamp değerlerini nasıl ayarladım?**
  Minimum değeri mobil için okunabilir tuttum, maksimum değeri masaüstü için fazla büyümeyecek şekilde belirledim. Ortadaki `vw` değeriyle ekran genişledikçe yazının orantılı büyümesini sağladım.

---

## 4. Responsive Stratejiler

* **Mobile-first yaklaşımını nasıl uyguladım?**
  Tüm temel stilleri media query’siz yazdım, yani varsayılan stil mobil oldu. Daha büyük ekranlar için sadece `min-width` kullanarak üzerine ekleme yaptım.

* **Hangi elemanlar breakpoint’lerde değişiyor?**
  Header yönü değişiyor, about kısmı iki sütuna geçiyor ve proje kartları 3 sütunlu düzene dönüşüyor. Ayrıca padding değerleri büyüyor.

* **Görsel boyutlarını nasıl yönettim?**
  Tüm görsellere `max-width: 100%` ve `height: auto` verdim. Böylece taşma olmadan responsive şekilde ölçeklenmelerini sağladım.

