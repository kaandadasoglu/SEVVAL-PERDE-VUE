<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_normal_stor.jpg"; // İlgili resmi import et (dosya adını kontrol edin)
import { RouterLink } from "vue-router";

useHead({
  title:
    "Stor Perdeler (Roller): Kullanım Alanları ve Çeşitleri | Şevval Perde",
  meta: [
    {
      name: "description",
      content:
        "Şevval Perde Kadıköy'de karartma (blackout), screen (güneş kırıcı), desenli ve motorlu stor perde seçenekleri. Modern, pratik ve uygun fiyatlı storlar.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Stor Perdeler (Roller): Pratik, Modern ve Fonksiyonel</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Stor Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Stor perdeler, bir rulo mekanizmasına sarılarak açılıp kapanan, düz
          bir kumaş panelinden oluşan, modern ve minimalist perde çözümleridir.
          Kullanım kolaylığı, yer kaplamaması ve temizliğinin pratik olması
          nedeniyle sıkça tercih edilirler.
        </p>
        <h2>Stor Perdelerin Başlıca Türleri ve Avantajları</h2>
        <ul>
          <li>
            <strong>Karartma (Blackout) Storlar:</strong> Işığı tamamen
            engelleyen özel kumaşlardan yapılırlar. Özellikle yatak odaları ve
            sunum odaları için idealdir.
          </li>
          <li>
            <strong>Güneş Kırıcı (Screen) Storlar:</strong> Güneşin zararlı UV
            ışınlarını ve parlamayı engellerken dışarının görünmesine izin veren
            delikli yapıya sahiptirler. Ofisler ve manzaralı odalar için
            uygundur.
          </li>
          <li>
            <strong>Desenli ve Renkli Storlar:</strong> Dekorasyona uygun
            sayısız renk ve desen seçeneği sunarlar. Çocuk odaları veya mekana
            renk katmak istenen her yer için kullanılabilirler.
          </li>
          <li>
            <strong>Kullanım Kolaylığı:</strong> Zincirli veya yaylı
            mekanizmalarıyla kolayca kontrol edilirler. Motorlu ve uzaktan
            kumandalı seçenekleri de mevcuttur.
          </li>
          <li>
            <strong>Kolay Temizlik:</strong> Genellikle nemli bir bezle
            silinerek kolayca temizlenebilirler.
          </li>
        </ul>
        <h2>Stor Perdeler Nerelerde Kullanılır?</h2>
        <p>
          Stor perdeler, evlerin hemen her odasında (mutfak, banyo dahil kumaş
          türüne göre) ve ofislerde rahatlıkla kullanılabilir. Sade görünümleri
          modern dekorasyonlara çok yakışır.
        </p>
        <h2>Kadıköy Stor Perde Çözümleri: Şevval Perde</h2>
        <p>
          Şevval Perde'de ihtiyacınıza uygun, kaliteli ve dayanıklı stor perde
          modellerini bulabilirsiniz. Karartma, screen, desenli veya düz renk...
          Geniş koleksiyonumuz ve uzman ekibimizle Kadıköy'deki mağazamızda size
          en uygun stor perdeyi seçmenize yardımcı oluyoruz.
        </p>
        <div class="actions">
          <RouterLink
            :to="{ name: 'category', params: { slug: 'storlar' } }"
            class="cta-button"
            >Tüm Stor Modelleri</RouterLink
          >
          <RouterLink to="/iletisim" class="cta-button secondary"
            >İletişime Geç</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-page h1 {
  text-align: center;
  color: #8b4513;
  margin-bottom: 40px;
  font-size: 2.5em;
}
.page-container {
  padding-top: 40px;
  padding-bottom: 60px;
}
.info-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  align-items: flex-start;
}
.info-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid #eee;
  position: sticky;
  top: 100px;
  max-height: 80vh;
  object-fit: contain;
}
.info-text h2 {
  font-size: 1.6em;
  color: #333;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}
.info-text h2:first-of-type {
  margin-top: 0;
}
.info-text p,
.info-text ul {
  font-size: 1.05em;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
}
.info-text ul {
  list-style: disc;
  padding-left: 25px;
}
.info-text li {
  margin-bottom: 8px;
}
.actions {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .info-content {
    grid-template-columns: 1fr;
  }
  .info-image img {
    position: static;
    max-width: 450px;
    margin: 0 auto 30px auto;
  }
  .info-page h1 {
    font-size: 2em;
  }
  .info-text h2 {
    font-size: 1.4em;
  }
  .info-text p,
  .info-text ul {
    font-size: 1em;
  }
  .actions {
    justify-content: center;
  }
}
</style>
