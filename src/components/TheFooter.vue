<script setup>
const instagramUrl = "https://www.instagram.com/sevvalperde/";
const instagramUsername = "@sevvalperde";

const kaanDadasogluLinkedIn = "https://www.linkedin.com/in/kaan-dadasoglu/";
import kaanDadasogluLogo from "@/assets/Kaan-Dadasoglu-logo.png";
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
          <li><router-link to="/hakkimizda">Hakkımızda</router-link></li>
          <li><router-link to="/iletisim">İletişim</router-link></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>İletişim</h4>
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
          <span>H.içi & Cmt 09:00-19:00</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-content">
        <div class="footer-bottom-left-spacer"></div>
        <p class="copyright-text">
          &copy; {{ new Date().getFullYear() }} Şevval Perde. Tüm Hakları
          Saklıdır.
        </p>
        <div class="crafted-by">
          <a
            :href="kaanDadasogluLinkedIn"
            target="_blank"
            rel="noopener noreferrer author"
          >
            <img
              v-if="kaanDadasogluLogo"
              :src="kaanDadasogluLogo"
              alt="Kaan Dadaşoğlu Logo"
              class="crafted-by-logo"
            />
            <span>Crafted by Kaan Dadaşoğlu</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ... (site-footer, footer-container, footer-about, footer-links, footer-contact, ve diğer üst bölüm stilleri aynı kalır) ... */
.site-footer {
  background-color: #333;
  color: #ccc;
  padding-top: 50px;
  font-size: 0.95em;
  padding-left: 15px;
  padding-right: 15px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 40px;
  max-width: 1300px;
  margin: 0 auto;
}

.footer-about,
.footer-links,
.footer-contact {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
}

.footer-about {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-about p {
  color: #f5f5dc;
  line-height: 1.6;
  margin-top: 15px;
  font-size: 0.9em;
}

.footer-logo {
  display: block;
  max-height: 150px;
  opacity: 1;
  margin: 0 auto 15px auto;
}

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
  padding: 12px 0;
  font-size: 1em;
  color: #aaa;
  width: 100%;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between; /* Bu, sol ve sağ arasında boşluk bırakır */
  align-items: center;
  flex-wrap: wrap; /* Mobilde alt alta sarması için */
  gap: 10px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px; /* Kenar boşlukları */
}

/* YENİ: Sol tarafta boşluk yaratmak için (crafted-by'ı en sağa iterken copyright'ı ortalamak için) */
.footer-bottom-left-spacer {
  flex-grow: 1; /* Esneyerek crafted-by ile aynı alanı kaplamaya çalışır */
  /* Görünmez bir eleman, sadece yer tutar */
}

.copyright-text {
  margin: 0;
  text-align: center; /* Metni kendi içinde ortalar */
  flex-grow: 2; /* Crafted-by'a göre daha fazla yer kaplar, böylece daha merkezi durur */
  /* Eğer tam ortada isteniyorsa ve sol/sağda eşit boşluk isteniyorsa: */
  /* flex-grow: 1; ve footer-bottom-left-spacer'a da flex-grow: 1; verilir. */
}

.crafted-by {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0; /* Bu bölümün küçülmesini engelle, sabit kalsın */
  /* margin-left: auto; Eğer justify-content: flex-start kullansaydık bu işe yarardı */
}

.crafted-by a {
  display: inherit;
  align-items: center;
  color: #bbb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.crafted-by a:hover {
  color: #fff;
}

.crafted-by-logo {
  max-height: 30px;
  margin-right: 8px;
  vertical-align: middle;
}

/* Duyarlılık */
@media (max-width: 900px) {
  /* Daha erken bir breakpoint'te düzenleme */
  .footer-bottom-content {
    justify-content: center; /* Ortala */
    flex-direction: column; /* Alt alta */
  }
  .copyright-text {
    order: 2; /* Telif hakkı alta */
    font-size: 0.9em;
    margin-top: 8px; /* Üstündekiyle boşluk */
  }
  .crafted-by {
    order: 1; /* Crafted by üste */
  }
  .footer-bottom-left-spacer {
    display: none; /* Mobilde bu boşluğa gerek yok */
  }
}

@media (max-width: 768px) {
  /* Diğer mobil stilleriniz aynı kalır */
  .footer-container {
    padding-left: 15px;
    padding-right: 15px;
    align-items: stretch;
    text-align: left;
  }
  .footer-about {
    text-align: center;
  }
  .footer-links h4::after,
  .footer-contact h4::after {
    left: 0;
    transform: none;
  }
  .contact-item {
    align-items: center;
    text-align: left;
  }
  .crafted-by-logo {
    max-height: 25px;
  }
}
</style>
