<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_tul_perde.jpg"; // İlgili resmi import et
import { RouterLink } from "vue-router";

useHead({
  title: "Tül Perdeler: Ferahlık ve Zarafet | Şevval Perde Kadıköy",
  meta: [
    {
      name: "description",
      content:
        "Şık ve modern tül perde modelleri Şevval Perde'de. Işığı süzen, mahremiyet sağlayan, kaliteli ve çeşitli desenlerde tül perdeler Kadıköy mağazamızda.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Tül Perdeler: Zarafet ve Işık Bir Arada</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Tül Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Tül perdeler, ince ve ışık geçiren yapılarıyla mekanlara ferahlık ve
          aydınlık katan, mahremiyeti ise nazikçe sağlayan perde türüdür.
          Genellikle fon perdeler veya güneşliklerle birlikte kullanılırlar ve
          pencere dekorasyonunun temel unsurlarından biridir.
        </p>
        <h2>Tül Perdelerin Özellikleri</h2>
        <ul>
          <li>
            <strong>Işık Geçirgenliği:</strong> Doğal ışığın içeri girmesine
            izin verirken dışarıdan içerinin görünmesini engeller (gündüz
            vakti).
          </li>
          <li>
            <strong>Ferahlık Hissi:</strong> İnce dokuları sayesinde mekanı daha
            geniş ve havadar gösterirler.
          </li>
          <li>
            <strong>Dekoratif Çeşitlilik:</strong> Düz, kırık beyaz, ekru gibi
            klasik renklerin yanı sıra işlemeli, desenli, simli veya farklı
            dokularda birçok modeli bulunur.
          </li>
          <li>
            <strong>Kullanım Kolaylığı:</strong> Hafif yapıları sayesinde
            kolayca açılıp kapanabilirler.
          </li>
        </ul>
        <h2>Tül Perde Seçerken Nelere Dikkat Edilmeli?</h2>
        <p>
          Tül perde seçimi yaparken odanın aldığı ışık miktarı, mobilya tarzı ve
          istenen mahremiyet düzeyi göz önünde bulundurulmalıdır. Düz tüller
          daha modern ve sade bir görünüm sunarken, işlemeli veya desenli tüller
          daha klasik veya hareketli bir atmosfer yaratabilir. Kumaşın dökümü ve
          kalitesi de önemlidir.
        </p>
        <h2>Şevval Perde'nin Tül Perde Koleksiyonu</h2>
        <p>
          Şevval Perde olarak Kadıköy mağazamızda her zevke uygun, kaliteli ve
          şık tül perde modellerini sizlere sunuyoruz. İster sade ister
          gösterişli, aradığınız tül perdeyi bulmanıza yardımcı oluyoruz. Uzman
          ekibimizle ölçü ve model seçimi konusunda destek almak için bizimle
          iletişime geçin.
        </p>
        <div class="actions">
          <RouterLink
            :to="{ name: 'category', params: { slug: 'perdeler' } }"
            class="cta-button"
            >Tüm Perde Modelleri</RouterLink
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
