<script setup>
import { useHead } from "@vueuse/head";
import { RouterLink } from "vue-router"; // İsteğe bağlı olarak link eklemek için

// Sayfa başlığı ve meta açıklaması (yeni metne göre güncellendi)
useHead({
  title: "Hakkımızda - Şevval Perde | 1998'dan Beri Kadıköy'de Kalite",
  meta: [
    {
      name: "description",
      content:
        "Şevval Perde'nin 1998'da Kadıköy Göztepe'de başlayan hikayesini, kalite anlayışını, geniş ürün yelpazesini ve müşteri odaklı yaklaşımını keşfedin.",
    },
  ],
});

// Hakkımızda sayfası için görsel (İsteğe bağlı, kendi görselinizle değiştirin)
// Eğer bu görseli kullanmayacaksanız bu satırı ve template'deki ilgili kısmı silebilirsiniz.
import aboutImage from "@/assets/images/slider13.png"; // Örnek görsel yolu
</script>

<template>
  <div class="container page-container about-us-page">
    <h1>Hakkımızda</h1>

    <div class="about-content">
      <div class="about-text">
        <h2>Şevval Perde: Kadıköy'ün Perde Uzmanı</h2>
        <p>
          Şevval Perde'nin hikayesi, 1998 yılında İstanbul'un kalbi Kadıköy
          Göztepe'de başladı. Kuruluşumuzun temelinde yatan vizyon, her zaman
          üstün kaliteyi erişilebilir fiyatlarla buluşturarak, yaşam alanlarına
          değer katmak oldu. Bu ilke, geçen yıllar boyunca rehberimiz olmaya
          devam etti.
        </p>
        <p>
          Kurucumuz Mahmut Şeftalicioğlu'nun 1989 yılından itibaren sektörde
          edindiği derin deneyim ve bilgi birikimi, Şevval Perde'nin sağlam
          temeller üzerine inşa edilmesini sağladı. Bu tecrübe, yıllar içinde
          binlerce memnun müşterimizin referansıyla taçlandı.
        </p>

        <h3>Kalite Anlayışımız</h3>
        <p>
          Şevval Perde olarak, ürünlerimizde kullanılan malzeme kalitesine en
          üst düzeyde önem veriyoruz. Kumaş seçiminden dikişine kadar her
          aşamada titizlikle çalışıyor, uzun ömürlü ve estetik açıdan kusursuz
          ürünler sunmayı hedefliyoruz. İşçiliğimizdeki detaycılık, her perdenin
          yaşam alanlarınıza değer katan özel bir dokunuş olmasını sağlar.
        </p>

        <h3>Geniş Ürün Yelpazemiz</h3>
        <p>
          Müşterilerimizin farklı ihtiyaçlarına ve zevklerine hitap edebilmek
          için geniş bir ürün yelpazesi sunuyoruz. Zarif fon perdelerden, ışığı
          yumuşatan tül perdelere, modern ve kullanışlı stor perdelerden, şık ve
          kontrol mekanizmalı jaluzilere kadar her türlü perde çözümünü Şevval
          Perde'de bulabilirsiniz.
        </p>

        <h3>Tasarım Anlayışımız</h3>
        <p>
          Mekanların ruhunu yansıtan tasarımlara inanıyoruz. Klasik çizgilerden
          modern minimalizme, avangart detaylardan sıcak country esintilerine
          kadar farklı tasarım anlayışlarına hakimiz. Uzman ekibimiz, en güncel
          trendleri ve kişisel tercihlerinizi harmanlayarak yaşam alanlarınıza
          özgün bir stil katmanıza yardımcı olur.
        </p>

        <h3>Teknolojik Entegrasyon</h3>
        <p>
          Geleceğin yaşam alanlarına uyum sağlayacak çözümler sunmaktan mutluluk
          duyuyoruz. Akıllı ev sistemleriyle entegre edilebilen motorlu perde
          seçeneklerimiz, konfor ve kullanım kolaylığını bir üst seviyeye
          taşıyor.
        </p>

        <h3>Sürdürülebilirlik</h3>
        <p>
          Çevreye duyarlılık, iş yapış biçimimizin önemli bir parçasıdır.
          Sürdürülebilir kaynaklardan elde edilen ve çevreye minimum etki eden
          malzemeleri tercih etmeye özen gösteriyoruz.
        </p>

        <h3>Müşteri Yaklaşımımız ve Size Özel Çözümler</h3>
        <p>
          Şevval Perde ekibi olarak benimsediğimiz en önemli değer, her
          misafirimize özenle yaklaşmak ve onların yaşam tarzlarını, hayallerini
          anlamaktır. Müşterilerimizi sadece birer alıcı olarak görmüyor, yaşam
          alanlarını en iyi ve en estetik çözümlerle buluşturmak için titizlikle
          çalışıyoruz. Bu yaklaşımımız, perde seçiminden montajına kadar her
          aşamada hissedilir.
        </p>
        <p>
          Şevval Perde'den alışveriş yapmak, sadece bir perde edinmekten çok
          daha fazlasını ifade eder. Müşterilerimiz, yılların getirdiği
          tecrübeyle harmanlanmış, en güncel tasarım trendlerini yansıtan kişiye
          özel danışmanlık ve tasarım desteği alırlar. Mekanlarınızın ruhunu en
          iyi yansıtacak renkler, desenler ve kumaşlar, uzman ekibimiz
          tarafından özenle seçilir ve size özel çözümler sunulur.
        </p>

        <h3>25 Yılı Aşkın Tecrübe</h3>
        <p>
          Geçen 25 yılı aşkın sürede edindiğimiz bilgi birikimi ve müşteri
          memnuniyeti odaklı yaklaşımımızla, İstanbul'da perde sektöründe
          güvenilir bir marka haline geldik. Şevval Perde olarak, yaşam
          alanlarınıza zarafet, konfor ve özgünlük katmaya devam etmek için ilk
          günkü heyecanımızla çalışıyoruz.
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
        <img :src="aboutImage" alt="Şevval Perde Mağaza Deneyimi" />
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
  flex: 2; /* Metin alanı daha geniş olsun (eğer resim varsa) */
  min-width: 300px; /* Minimum genişlik */
}

.about-image {
  flex: 1; /* Resim alanı (eğer resim varsa) */
  min-width: 280px;
  text-align: center; /* Resmi ortala */
  position: sticky; /* Resmin scroll ile kayarken belli bir yerde kalması için (opsiyonel) */
  top: 100px; /* Sticky pozisyonu için üstten boşluk (header yüksekliğine göre ayarlayın) */
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text h2 {
  color: #a0522d; /* Vurgu rengi */
  margin-bottom: 20px; /* Alt boşluk artırıldı */
  font-size: 1.9em; /* Biraz büyütüldü */
  padding-bottom: 10px; /* Alt çizgi için boşluk */
  border-bottom: 1px solid #eee;
}

.about-text h3 {
  color: #8b4513; /* Ana renk */
  margin-top: 35px; /* Üst boşluk artırıldı */
  margin-bottom: 15px; /* Alt boşluk artırıldı */
  font-size: 1.5em; /* Biraz büyütüldü */
}

.about-text p {
  color: #444;
  line-height: 1.75; /* Satır yüksekliği artırıldı */
  margin-bottom: 25px; /* Paragraflar arası boşluk artırıldı */
  text-align: justify; /* İki yana yaslı (daha profesyonel bir görünüm için) */
}

/* Eğer ul listesi kullanılmayacaksa bu stiller silinebilir veya yorum satırı yapılabilir */
/*
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
  padding-left: 25px;
}

.about-text ul li::before {
  content: "✓";
  color: #8b4513;
  position: absolute;
  left: 0;
  top: 2px;
  font-weight: bold;
}
*/

.about-text strong {
  /* Metin içindeki strong etiketleri için */
  font-weight: 600;
  color: #333;
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

/* Duyarlılık */
@media (max-width: 991px) {
  /* Resim ve metnin alt alta geçtiği breakpoint */
  .about-image {
    /*position: static;  Sticky pozisyonunu mobilde kaldır */
    margin-top: 30px; /* Metinden sonra boşluk */
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  .about-content {
    flex-direction: column-reverse;
    /*flex-direction: column;  Veya metin üstte kalsın */
  }
  .about-image {
    position: static;
    margin-top: 30px; /* Metinden sonra boşluk */
  }
  .about-text h2 {
    font-size: 1.6em;
  }
  .about-text h3 {
    font-size: 1.3em;
  }
  .about-text p,
  .about-text ul li {
    /* ul hala kullanılmıyor ama stil burada kalabilir */
    font-size: 0.95em;
    text-align: left; /* Mobilde sola yaslı daha okunaklı olabilir */
  }
  .about-cta {
    justify-content: center;
  }
}
</style>
