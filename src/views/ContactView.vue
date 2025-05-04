<script setup>
// YENİ: useHead import et
import { useHead } from "@vueuse/head";

// YENİ: Sayfa başlığı ve açıklamasını tanımla
useHead({
  title: "İletişim - Şevval Perde | Kadıköy Mağaza ve Telefon",
  meta: [
    {
      name: "description",
      content:
        "Şevval Perde ile iletişime geçin. Adres: Fahrettin Kerim Gökay Cd No:223, Kadıköy/İstanbul. Telefon: +90 533 335 76 36. Instagram ve e-posta bilgileri.", // Açıklamaya Instagram eklendi
    },
  ],
});

// Instagram profil URL'si (Gerçek URL ile değiştirin)
const instagramUrl = "https://www.instagram.com/sevvalperde/"; // Örnek URL
const instagramUsername = "@sevvalperde"; // Gösterilecek kullanıcı adı
</script>

<template>
  <div class="container page-container">
    <h1>İletişim Bilgilerimiz</h1>
    <p class="contact-intro">
      Aşağıdaki bilgilerden veya haritadan bize ulaşabilirsiniz. Mağazamıza
      bekleriz!
    </p>

    <div class="contact-section">
      <div class="contact-info">
        <h2>Şevval Perde - Kadıköy</h2>

        <div class="contact-item">
          <i class="fas fa-map-marker-alt contact-icon" aria-hidden="true"></i>
          <span
            >Merdivenköy, Fahrettin Kerim Gökay Cd No:223, 34730
            Kadıköy/İstanbul</span
          >
        </div>

        <div class="contact-item">
          <i class="fas fa-phone-alt contact-icon" aria-hidden="true"></i>
          <a href="tel:+905333357636">+90 533 335 76 36</a>
        </div>

        <div class="contact-item">
          <i class="fas fa-envelope contact-icon" aria-hidden="true"></i>
          <a href="mailto:sevvalperde@hotmail.com">sevvalperde@hotmail.com</a>
        </div>

        <div class="contact-item">
          <i class="fab fa-instagram contact-icon" aria-hidden="true"></i>
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">{{
            instagramUsername
          }}</a>
        </div>

        <div class="contact-item">
          <i class="fas fa-clock contact-icon" aria-hidden="true"></i>
          <span>Hafta içi & Cumartesi 09:00 - 19:00</span>
        </div>
      </div>

      <div class="map-container">
        <h2>Konumumuz</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.9430085662066!2d29.063786076227725!3d40.982728771354076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79122819e4d%3A0xd9ebf39b8e4c54d8!2s%C5%9EEVVAL%20PERDE!5e0!3m2!1str!2str!4v1746020811218!5m2!1str!2str"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Şevval Perde Konumu"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 40px; /* Biraz daha boşluk */
  padding-bottom: 50px;
}

h1 {
  text-align: center;
  color: #8b4513; /* Ana renk */
  margin-bottom: 15px;
}

.contact-intro {
  text-align: center;
  color: #555; /* Biraz daha koyu */
  font-size: 1.15em;
  margin-bottom: 50px; /* Daha fazla boşluk */
  max-width: 600px; /* Çok genişlemesin */
  margin-left: auto;
  margin-right: auto;
}

.contact-section {
  display: flex;
  flex-wrap: wrap; /* Küçük ekranlarda alt alta geçsin */
  gap: 40px; /* Aradaki boşluk */
  justify-content: space-between; /* Mümkünse arayı aç */
}

.contact-info {
  flex-basis: 100%; /* Başlangıçta tam genişlik */
  margin-bottom: 20px; /* Haritadan önce boşluk */
}

@media (min-width: 992px) {
  /* Geniş ekranlarda yan yana */
  .contact-info {
    flex-basis: 48%; /* Genişliğin yarısına yakın */
    margin-bottom: 0;
  }
  .map-container {
    flex-basis: 48%; /* Genişliğin yarısına yakın */
  }
}

.contact-info h2 {
  color: #a0522d; /* Başlık rengi */
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.6em;
}

/* YENİ: İkonlu iletişim bilgisi satırı */
.contact-item {
  display: flex;
  align-items: flex-start; /* İkon ve metni üste hizala (uzun adresler için) */
  margin-bottom: 18px; /* Satırlar arası boşluk */
  font-size: 1.05em; /* Yazı boyutu */
  line-height: 1.6; /* Satır yüksekliği */
}

/* YENİ: İkon stilleri */
.contact-icon {
  color: #8b4513; /* İkon rengi */
  font-size: 1.3em; /* İkon boyutu */
  margin-right: 15px; /* İkon ile metin arası boşluk */
  width: 25px; /* İkonun kaplayacağı alan (hizalama için) */
  text-align: center; /* İkonu kendi alanında ortala */
  flex-shrink: 0; /* İkonun küçülmesini engelle */
  margin-top: 2px; /* Dikeyde hizalamayı ince ayarla */
}

.contact-item span,
.contact-item a {
  color: #333; /* Metin rengi */
  text-decoration: none; /* Linklerin alt çizgisini kaldır */
}

.contact-item a:hover {
  color: #a0522d; /* Link hover rengi */
  text-decoration: underline; /* Hover'da altını çiz */
}

.map-container h2 {
  color: #a0522d;
  margin-bottom: 15px;
  font-size: 1.6em;
}

.map-container iframe {
  border-radius: 8px; /* Haritaya yuvarlak köşe */
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  max-width: 100%; /* Taşmayı engelle */
}
</style>
