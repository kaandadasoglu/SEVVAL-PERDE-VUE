<script setup>
import { useHead } from "@vueuse/head";
import { RouterLink } from "vue-router"; // İsteğe bağlı olarak link eklemek için

// Sayfa başlığı ve meta açıklaması
useHead({
  title: "Hakkımızda - Şevval Perde | Kadıköy Perde Uzmanı",
  meta: [
    {
      name: "description",
      content:
        "Şevval Perde'nin hikayesini, misyonunu ve değerlerini keşfedin. İstanbul Kadıköy'de yılların tecrübesiyle perde çözümleri sunuyoruz.",
    },
  ],
});

// Hakkımızda sayfası için görsel (İsteğe bağlı, kendi görselinizle değiştirin)
import aboutImage from "@/assets/images/hakkimizda-gorsel.jpg"; // Örnek görsel yolu
</script>

<template>
  <div class="container page-container about-us-page">
    <h1>Hakkımızda</h1>

    <div class="about-content">
      <div class="about-text">
        <h2>Kadıköy'de Perde Sanatı: Şevval Perde</h2>
        <p>
          İstanbul'un kalbi Kadıköy'de, **Şevval Perde** olarak yıllardır yaşam
          alanlarınıza estetik ve işlevsellik katmanın gururunu yaşıyoruz.
          1998'den beri süregelen tecrübemizle, perde seçiminin bir mekanın
          atmosferini nasıl tamamen değiştirebileceğinin bilincindeyiz. Bu
          bilinçle, her müşterimizin zevkine ve ihtiyacına özel çözümler sunmak
          için tutkuyla çalışıyoruz.
        </p>

        <h3>Misyonumuz & Vizyonumuz</h3>
        <p>
          Misyonumuz, sadece pencere örtmek değil, aynı zamanda evlerinize ve iş
          yerlerinize sıcaklık, şıklık ve konfor katmaktır. En kaliteli
          malzemeleri, modern tasarımları ve uzman işçiliği bir araya getirerek,
          beklentilerinizin ötesinde hizmet sunmayı hedefliyoruz. Vizyonumuz
          ise, Kadıköy ve çevresinde perde denince akla gelen ilk isim olmak,
          yenilikçi yaklaşımlarımız ve müşteri memnuniyeti odaklı hizmet
          anlayışımızla sektörde fark yaratmaktır.
        </p>

        <h3>Değerlerimiz</h3>
        <ul>
          <li>
            <strong>Kalite:</strong> Uzun ömürlü, dayanıklı ve estetik ürünler
            sunmak.
          </li>
          <li>
            <strong>Müşteri Odaklılık:</strong> İhtiyaçlarınızı dinlemek ve size
            en uygun çözümü bulmak.
          </li>
          <li>
            <strong>Uzmanlık:</strong> Deneyimli ekibimizle doğru danışmanlık ve
            kusursuz montaj hizmeti sağlamak.
          </li>
          <li>
            <strong>Güvenilirlik:</strong> Söz verdiğimiz zamanda, söz
            verdiğimiz kalitede hizmet sunmak.
          </li>
          <li>
            <strong>Estetik:</strong> Mekanlarınıza değer katacak şık ve modern
            tasarımlar sunmak.
          </li>
        </ul>

        <h3>Neden Biz?</h3>
        <p>
          Geniş ürün yelpazemizde tül perdelerden fonlara, modern storlardan
          kullanışlı jaluzilere kadar aradığınız her şeyi bulabilirsiniz.
          Ücretsiz keşif ve danışmanlık hizmetimizle mekanınıza en uygun perdeyi
          seçmenize yardımcı oluyor, profesyonel montaj ekibimizle de son
          dokunuşu kusursuzca yapıyoruz. Şevval Perde olarak önceliğimiz, sizin
          memnuniyetiniz ve yaşam alanlarınızın güzelliğidir.
        </p>
        <div class="about-cta">
          <RouterLink to="/katalog" class="cta-button"
            >Ürünlerimizi Görün</RouterLink
          >
          <RouterLink to="/iletisim" class="cta-button secondary"
            >Bize Ulaşın</RouterLink
          >
        </div>
      </div>

      <div class="about-image" v-if="aboutImage">
        <img :src="aboutImage" alt="Şevval Perde Mağaza İçinden Bir Görünüm" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 40px;
  padding-bottom: 50px;
}

h1 {
  text-align: center;
  color: #8b4513; /* Ana renk */
  margin-bottom: 40px;
  font-size: 2.5em;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px; /* Metin ve resim arası boşluk */
  align-items: flex-start; /* Hizalama */
}

.about-text {
  flex: 2; /* Metin alanı daha geniş olsun */
  min-width: 300px; /* Minimum genişlik */
}

.about-image {
  flex: 1; /* Resim alanı */
  min-width: 280px;
  text-align: center; /* Resmi ortala */
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text h2 {
  color: #a0522d; /* Vurgu rengi */
  margin-bottom: 15px;
  font-size: 1.8em;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}

.about-text h3 {
  color: #8b4513;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 1.4em;
}

.about-text p {
  color: #444;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: justify;
}

.about-text ul {
  list-style: none;
  padding-left: 0;
  margin-top: 15px;
  margin-bottom: 30px;
}

.about-text ul li {
  color: #444;
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px; /* İkon için yer */
}

.about-text ul li::before {
  content: "✓"; /* Veya Font Awesome ikonu: content: '\f00c'; font-family: 'Font Awesome 5 Free'; font-weight: 900; */
  color: #8b4513; /* Ana renk */
  position: absolute;
  left: 0;
  top: 2px;
  font-weight: bold; /* Check işareti için */
}

.about-text strong {
  font-weight: 600;
}

.about-cta {
  margin-top: 40px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.cta-button {
  padding: 10px 20px;
  border: 2px solid #8b4513;
  background-color: #8b4513;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.95em;
}

.cta-button:hover {
  background-color: #a0522d;
  border-color: #a0522d;
}

.cta-button.secondary {
  background-color: transparent;
  color: #8b4513;
}

.cta-button.secondary:hover {
  background-color: rgba(139, 69, 19, 0.1);
  color: #a0522d;
  border-color: #a0522d;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  .about-content {
    flex-direction: column-reverse;
  }
  .about-text h2 {
    font-size: 1.6em;
  }
  .about-text h3 {
    font-size: 1.3em;
  }
  .about-text p,
  .about-text ul li {
    font-size: 0.95em;
  }
  .about-cta {
    justify-content: center;
  }
}
</style>
