<script setup>
// İletişim bilgileri için değişkenler
const instagramUrl = "https://www.instagram.com/sevvalperde/"; // Gerçek URL ile değiştirin
const instagramUsername = "@sevvalperde";
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-container">
      <div class="footer-about">
        <img
          src="@/assets/sevval_perde_logo_footer.png"
          alt="Şevval Perde Logo"
          class="footer-logo"
        />
        <p>
          Kadıköy'ün perde uzmanı. Kaliteli kumaşlar, özel tasarım ve montaj
          hizmeti.
        </p>
      </div>

      <div class="footer-links">
        <h4>Hızlı Erişim</h4>
        <ul>
          <li><router-link to="/">Anasayfa</router-link></li>
          <li><router-link to="/katalog">Katalog</router-link></li>
          <li><router-link to="/iletisim">İletişim</router-link></li>
          <li><router-link to="/hakkimizda">Hakkımızda</router-link></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>İletişim</h4>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt contact-icon" aria-hidden="true"></i>
          <span>Merdivenköy, F. K. Gökay Cd No:223, Kadıköy/İstanbul</span>
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
          <span>H.içi & Cmt 09:00-19:00</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>
          &copy; {{ new Date().getFullYear() }} Şevval Perde. Tüm Hakları
          Saklıdır.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #333;
  color: #ccc;
  padding-top: 50px;
  font-size: 0.95em;
  /* Footer'ın kendisine padding ekleyerek beyaz kutunun kenarlardan taşmasını önleyebiliriz */
  padding-left: 15px;
  padding-right: 15px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 40px;
  /* Konteynerın max genişliğini burada da belirtmek iyi olabilir */
  max-width: 1300px;
  margin: 0 auto;
}

/* Footer sütunları */
.footer-about,
.footer-links,
.footer-contact {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
}

/* --- DEĞİŞİKLİK: Logo Bölümü Stilleri --- */
.footer-about {
  text-align: center; /* İçeriği ortala */
  /* Flex item olarak dikeyde hizalamayı ayarla (isteğe bağlı) */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-about p {
  color: #f5f5dc; /* Paragraf rengini tekrar tanımla (önemli) */
  line-height: 1.6;
  margin-top: 15px;
  font-size: 0.9em; /* Biraz daha küçük yazı */
}

/* --- DEĞİŞİKLİK: Logo Boyutu --- */
.footer-logo {
  display: block; /* Ortalamak için */
  max-height: 150px; /* <<<--- Logo boyutu büyütüldü */
  opacity: 1; /* Beyaz zeminde tam opak */
  margin: 0 auto 15px auto; /* Alt boşluk ve ortalama */
}
/* ------------------------------------------ */

.footer-links h4,
.footer-contact h4 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 1.2em;
  position: relative;
  padding-bottom: 8px;
}

.footer-links h4::after,
.footer-contact h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #a0522d;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links ul li {
  margin-bottom: 10px;
}
.footer-links ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease, padding-left 0.3s ease;
}
.footer-links ul li a:hover {
  color: #fff;
  padding-left: 5px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  line-height: 1.5;
}

.contact-icon {
  color: #a0522d;
  font-size: 1.1em;
  margin-right: 12px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
  margin-top: 3px;
}

.contact-item span,
.contact-item a {
  color: #ccc;
  text-decoration: none;
}

.contact-item a:hover {
  color: #fff;
  text-decoration: underline;
}

/* Footer Alt Kısım */
.footer-bottom {
  background-color: #222;
  padding: 15px 0;
  text-align: center;
  font-size: 1.1em;
  color: #aaa;
  /* Beyaz kutunun border-radius'u varsa ve alt şerit tam yapışık olacaksa,
     footer-bottom'a negatif margin verilebilir ama genellikle gerekmez */
}

.footer-bottom p {
  margin: 0;
}

/* Duyarlılık */
@media (max-width: 768px) {
  .footer-container {
    /* flex-direction: column; Zaten wrap ile alt alta geçiyor */
    align-items: stretch; /* Ortalamak yerine uzat */
    text-align: left; /* Genel hizalamayı sola al */
  }
  .footer-about {
    text-align: center; /* Beyaz kutu içeriği ortalı kalsın */
  }
  .footer-links h4::after,
  .footer-contact h4::after {
    left: 0; /* Çizgiyi sola al */
    transform: none;
  }
  .contact-item {
    /* justify-content: center; Kaldırıldı */
    align-items: center;
    text-align: left;
  }
}
</style>
