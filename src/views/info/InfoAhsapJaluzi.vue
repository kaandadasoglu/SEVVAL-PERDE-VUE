<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_ahsap_jaluzi.jpg"; // İlgili resmi import et
import { RouterLink } from "vue-router";

useHead({
  // Bu sayfaya özel Başlık
  title: "Ahşap Jaluzi Perdeler: Doğallık ve Şıklık | Şevval Perde Kadıköy",
  meta: [
    {
      // Bu sayfaya özel Açıklama
      name: "description",
      content:
        "Kadıköy Şevval Perde'de doğal ahşap jaluzi modellerini keşfedin. Ev ve ofisler için sıcak, şık ve fonksiyonel ahşap jaluzi çözümleri ve avantajları.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Ahşap Jaluzi Perdeler: Doğallık ve Kontrol</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Ahşap Jaluzi Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Ahşap jaluzi perdeler, mekanlara doğal bir sıcaklık ve sofistike bir
          hava katmanın en zarif yollarından biridir. Gerçek ahşap veya
          dayanıklı ahşap görünümlü malzemelerden üretilen bu perdeler, yatay
          bantlarının (slat) açısı ayarlanarak ışık miktarını ve mahremiyeti
          hassas bir şekilde kontrol etmenizi sağlar.
        </p>

        <h2>Ahşap Jaluzilerin Avantajları Nelerdir?</h2>
        <ul>
          <li>
            <strong>Doğal Estetik:</strong> Ahşabın benzersiz dokusu ve
            sıcaklığı, her türlü dekorasyon stiline kolayca uyum sağlar.
          </li>
          <li>
            <strong>Işık Kontrolü:</strong> Yatay bantların eğimi değiştirilerek
            içeri giren ışık miktarı istenildiği gibi ayarlanabilir.
          </li>
          <li>
            <strong>Mahremiyet:</strong> Kapatıldığında tam bir gizlilik sunar.
          </li>
          <li>
            <strong>Dayanıklılık:</strong> Kaliteli ahşap jaluziler uzun ömürlü
            bir kullanım sunar.
          </li>
          <li>
            <strong>Kolay Bakım:</strong> Tozları nemli bir bezle kolayca
            alınabilir.
          </li>
        </ul>

        <h2>Nerede Kullanılır?</h2>
        <p>
          Ahşap jaluziler özellikle salonlar, oturma odaları, çalışma odaları ve
          ofisler için popüler bir tercihtir. Doğal görünümleri sayesinde hem
          klasik hem de modern dekorasyonlarla mükemmel uyum yakalarlar. Ancak
          yüksek neme maruz kalan banyo gibi alanlar için gerçek ahşap yerine
          PVC veya alüminyum jaluziler daha uygun olabilir.
        </p>

        <h2>Şevval Perde Farkıyla Ahşap Jaluziler</h2>
        <p>
          İstanbul Kadıköy'deki mağazamızda farklı renk ve ahşap türlerinde
          geniş bir ahşap jaluzi koleksiyonu bulabilirsiniz. Mekanınıza en uygun
          modeli seçmeniz için uzman ekibimizle ücretsiz keşif ve danışmanlık
          hizmeti sunuyoruz. Kaliteli malzeme ve profesyonel montaj için bize
          ulaşın.
        </p>

        <div class="actions">
          <RouterLink
            :to="{ name: 'category', params: { slug: 'jaluziler' } }"
            class="cta-button"
            >Tüm Jaluzi Modelleri</RouterLink
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

.info-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  align-items: flex-start;
}

.info-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid #eee;
  position: sticky;
  top: 100px;
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
  margin-top: 40px;
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
    max-width: 400px;
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
