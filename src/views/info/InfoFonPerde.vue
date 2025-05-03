<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_fon_perde.jpg"; // İlgili resmi import et
import { RouterLink } from "vue-router";

useHead({
  title: "Fon Perdeler: Modelleri ve Dekorasyondaki Yeri | Şevval Perde",
  meta: [
    {
      name: "description",
      content:
        "Kadıköy Şevval Perde'de salon, yatak odası için şık fon perde modelleri. Keten, kadife, pamuklu kumaş seçenekleri ve dekorasyon ipuçları.",
    },
  ],
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Fon Perdeler: Dekorasyonun Vazgeçilmezi</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Fon Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Fon perdeler, pencerelerin iki yanına asılan ve genellikle dekoratif
          amaçlı kullanılan perdelerdir. Hem mekanın genel estetiğini
          tamamlarlar hem de kapatıldıklarında ışığı engelleme ve mahremiyet
          sağlama işlevi görürler. Tül perdelerle birlikte kullanıldıklarında
          katmanlı ve zengin bir görünüm oluştururlar.
        </p>
        <h2>Fon Perde Seçiminin Püf Noktaları</h2>
        <ul>
          <li>
            <strong>Kumaş Seçimi:</strong> Kadife, keten, pamuklu, ipek veya
            polyester gibi farklı kumaşlar mekanın tarzını ve perdenin dökümünü
            etkiler. Kadife daha ağır ve klasik bir hava katarken, keten daha
            doğal ve rahattır.
          </li>
          <li>
            <strong>Renk ve Desen:</strong> Duvar rengi, mobilyalar ve diğer
            tekstillerle uyumlu renk ve desenler seçilmelidir. Odaya hareket
            katmak için desenli, daha sakin bir görünüm için düz renkler tercih
            edilebilir.
          </li>
          <li>
            <strong>Işık Geçirgenliği:</strong> Daha kalın ve tok kumaşlar ışığı
            daha iyi engeller (dimout veya blackout olabilir), ince kumaşlar ise
            daha dekoratiftir.
          </li>
          <li>
            <strong>Montaj Şekli:</strong> Kornişe veya rustik boruya monte
            edilebilirler. Pile sıklığı (seyrek pile, sık pile) görünümü
            etkileyen önemli bir faktördür.
          </li>
        </ul>
        <h2>Fon Perdeler Nerelerde Kullanılır?</h2>
        <p>
          Fon perdeler en çok salon ve oturma odalarında tercih edilir. Yatak
          odalarında da hem dekoratif hem de ışığı engelleme amacıyla
          kullanılırlar. Doğru kumaş ve model seçimiyle ofis veya diğer ticari
          mekanlara da şıklık katabilirler.
        </p>
        <h2>Şevval Perde'de Fon Perde Seçenekleri</h2>
        <p>
          Kadıköy'deki mağazamızda zengin renk, desen ve kumaş çeşitliliğine
          sahip fon perde koleksiyonumuzu bulabilirsiniz. İster modern ister
          klasik, her tarza uygun çözümlerimizle mekanlarınıza değer katıyoruz.
          Ücretsiz keşif ve ölçü hizmetimizden yararlanın.
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
