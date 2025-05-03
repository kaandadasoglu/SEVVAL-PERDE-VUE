<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_katlamali.jpg"; // İlgili resmi import et (dosya adını kontrol edin)
import { RouterLink } from "vue-router";

useHead({
  title: "Katlamalı Perdeler (Roman Shade) | Şevval Perde Kadıköy",
  meta: [
    {
      name: "description",
      content:
        "Dekoratif ve şık katlamalı perde (Roman Shade) modelleri Kadıköy Şevval Perde'de. Farklı kumaş ve mekanizma seçenekleri, ev ve iş yerleri için estetik çözümler.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Katlamalı Perdeler (Roman Shade): Şıklık ve Zarafet</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Katlamalı Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Katlamalı perdeler, kumaşın yukarı doğru toplandığında zarif katmanlar
          oluşturduğu, estetik ve dekoratif bir perde türüdür. Mekanizması
          sayesinde stor perdeler gibi pratik bir kullanım sunarken, kumaşın
          sıcaklığı ve şıklığıyla da öne çıkarlar.
        </p>
        <h2>Katlamalı Perdelerin Özellikleri</h2>
        <ul>
          <li>
            <strong>Dekoratif Görünüm:</strong> Toplandığında oluşan katmanlı
            yapı, pencereye estetik bir boyut katar.
          </li>
          <li>
            <strong>Kumaş Çeşitliliği:</strong> Tül, pamuklu, keten, sentetik
            gibi birçok farklı kumaş türüyle üretilebilirler. Bu sayede
            istenilen ışık geçirgenliği ve görünüm elde edilebilir.
          </li>
          <li>
            <strong>Yer Tasarrufu:</strong> Pencere boşluğuna veya dışına monte
            edilebilirler ve toplandıklarında az yer kaplarlar.
          </li>
          <li>
            <strong>Kolay Kullanım:</strong> Zincirli veya ipli mekanizmaları
            sayesinde kolayca açılıp kapanabilirler. Motorlu seçenekleri de
            mevcuttur.
          </li>
        </ul>
        <h2>Kullanım Alanları ve Dekorasyon İpuçları</h2>
        <p>
          Katlamalı perdeler, klasik, modern veya rustik fark etmeksizin birçok
          dekorasyon tarzına uyum sağlayabilir. Özellikle salon, oturma odası ve
          yatak odalarında şık bir tercih olabilirler. Mutfaklarda da
          kullanılabilirler ancak kumaş seçimine dikkat edilmelidir. Kumaş ve
          renk seçimi, odanın genel atmosferini belirlemede önemli rol oynar.
        </p>
        <h2>Şevval Perde'de Katlamalı Perde Seçenekleri</h2>
        <p>
          Kadıköy Şevval Perde olarak, evinize zarafet katacak birbirinden şık
          katlamalı perde modellerini sunuyoruz. Kaliteli kumaşlar, dayanıklı
          mekanizmalar ve isteğinize özel üretim imkanları için mağazamıza
          uğrayabilir veya bizimle iletişime geçebilirsiniz.
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
