<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_zebra.jpg"; // İlgili resmi import et (dosya adını kontrol edin)
import { RouterLink } from "vue-router";

useHead({
  title: "Zebra Stor Perdeler: Modern Işık Kontrolü | Şevval Perde",
  meta: [
    {
      name: "description",
      content:
        "Kadıköy Şevval Perde'de modern ve kullanışlı zebra stor perde modelleri. Hem tül hem güneşlik fonksiyonu, kolay ışık ayarı ve şık tasarımlar.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Zebra Stor Perdeler: Modern ve Fonksiyonel Çözüm</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Zebra Stor Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Zebra stor perdeler, yatay olarak sıralanmış opak ve şeffaf (tül)
          kumaş şeritlerinden oluşan, modern ve son derece fonksiyonel bir perde
          sistemidir. Zincirli mekanizması sayesinde bu şeritler birbiri üzerine
          getirilerek ışık miktarı ve mahremiyet kolayca ayarlanabilir.
        </p>
        <h2>Zebra Perdelerin Avantajları</h2>
        <ul>
          <li>
            <strong>Çift Fonksiyon:</strong> Hem tül perde (şeffaf şeritler
            hizalandığında) hem de güneşlik (opak şeritler hizalandığında)
            görevini tek bir perdede birleştirir.
          </li>
          <li>
            <strong>Kolay Işık Kontrolü:</strong> Zincir mekanizması ile ışık
            hassas bir şekilde ayarlanabilir.
          </li>
          <li>
            <strong>Modern Görünüm:</strong> Düzgün hatları ve minimalist
            tasarımı ile modern mekanlara çok yakışır.
          </li>
          <li>
            <strong>Geniş Model Seçeneği:</strong> Farklı renklerde, desenlerde,
            hatta karartma (blackout) özellikli kumaşlarda bile bulunabilirler.
          </li>
          <li>
            <strong>Pratik Kullanım:</strong> Tek mekanizma ile kontrol edilir
            ve temizliği genellikle kolaydır.
          </li>
        </ul>
        <h2>Zebra Stor Perde Kullanım Alanları</h2>
        <p>
          Modern tasarımları sayesinde evlerin salon, oturma odası, mutfak ve
          yatak odaları başta olmak üzere birçok alanında kullanılabilirler.
          Ofisler için de şık ve pratik bir alternatiftir.
        </p>
        <h2>Kadıköy'de Zebra Perde İçin Şevval Perde</h2>
        <p>
          Şevval Perde olarak, kaliteli mekanizmalar ve zengin kumaş
          seçenekleriyle en iyi zebra perde modellerini sunuyoruz. İstanbul
          Kadıköy'deki mağazamızda farklı renk ve desenleri inceleyebilir,
          mekanınıza en uygun zebra perde için profesyonel destek alabilirsiniz.
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
