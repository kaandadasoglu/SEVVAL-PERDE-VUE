<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_plise_perde.jpg"; // İlgili resmi import et (dosya adını kontrol edin)
import { RouterLink } from "vue-router";

useHead({
  title: "Plise Perdeler: Dar Alanlar İçin Esnek Çözüm | Şevval Perde",
  meta: [
    {
      name: "description",
      content:
        "Kadıköy Şevval Perde'de plise perde modelleri. Cam balkon, çatı penceresi gibi dar ve eğimli alanlar için ideal, şık ve modern plise perde çözümleri.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Plise Perdeler: Esnek ve Şık Çözümler</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Plise Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Plise perdeler, özel olarak kırılmış (plise edilmiş) kumaşlardan
          yapılan, akordeon gibi açılıp kapanan perdelerdir. İnce profilleri
          sayesinde genellikle doğrudan cam üzerine veya dar pencere kasalarına
          monte edilebilirler. Bu özellikleri onları farklı pencere tipleri ve
          dar alanlar için ideal kılar.
        </p>
        <h2>Plise Perdelerin Avantajları</h2>
        <ul>
          <li>
            <strong>Esnek Montaj:</strong> Cama yakın montaj imkanı sunar,
            pencere kolları gibi engelleri aşabilir.
          </li>
          <li>
            <strong>Farklı Pencere Tiplerine Uyum:</strong> Eğimli çatı
            pencereleri, kış bahçeleri veya standart dışı pencereler için
            mükemmel çözümler sunar.
          </li>
          <li>
            <strong>Çift Yönlü Çalışma (İsteğe Bağlı):</strong> Bazı modeller
            hem aşağıdan yukarıya hem de yukarıdan aşağıya hareket
            ettirilebilir, bu da esnek ışık ve mahremiyet kontrolü sağlar.
          </li>
          <li>
            <strong>Minimalist Görünüm:</strong> Toplandığında çok az yer kaplar
            ve pencere önünde sade bir duruş sergiler.
          </li>
          <li>
            <strong>Kumaş Seçenekleri:</strong> Işık geçiren, yarı karartma veya
            tam karartma (blackout) özellikli kumaş seçenekleri bulunur.
          </li>
        </ul>
        <h2>Plise Perdelerin Kullanım Alanları</h2>
        <p>
          Plise perdeler, balkon camları, çatı pencereleri, dar veya şekilli
          pencereler, kış bahçeleri gibi alanların yanı sıra standart
          pencerelerde de şık ve modern bir alternatif olarak kullanılabilir.
          Minimalist tasarımları sayesinde modern ev ve ofislere uyum sağlarlar.
        </p>
        <h2>Şevval Perde'de Plise Perde Seçenekleri</h2>
        <p>
          İstanbul Kadıköy'deki Şevval Perde mağazamızda, farklı renk, doku ve
          işlevsellikte plise perde modellerini keşfedebilirsiniz. Özellikle
          standart dışı pencereleriniz için pratik ve estetik çözümler
          arıyorsanız, plise perde seçeneklerimizi mutlaka inceleyin.
        </p>
        <div class="actions">
          <RouterLink
            :to="{ name: 'category', params: { slug: 'storlar' } }"
            class="cta-button"
            >Tüm Stor/Plise Modelleri</RouterLink
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
