<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Şevval Perde. Tüm hakları saklıdır.</p>
      <div class="footer-contact-info">
        <h3>Bize Ulaşın</h3>
        <address>
          <p>
            <strong>Adres:</strong> Merdivenköy, Fahrettin Kerim Gökay Cd
            No:223, 34730 Kadıköy/İstanbul
          </p>
          <p>
            <strong>Telefon:</strong>
            <a href="tel:+905333357636">+90 533 335 76 36</a>
          </p>
          <p>
            <strong>E-posta:</strong>
            <a href="mailto:sevvalperde@hotmail.com">sevvalperde@hotmail.com</a>
          </p>
          <p>
            <strong>Çalışma Saatleri:</strong> Hafta içi & Cumartesi 09:00 -
            19:00
          </p>
        </address>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #e0e0e0;
  color: #555;
  text-align: center;
  padding: 25px 0;
  margin-top: 50px; /* Üst içerikle arasına boşluk */
  border-top: 1px solid #ccc;
}

/* Global .container'ı burada tekrar tanımlamak yerine App.vue'da veya main.css'de tanımlamak daha iyi olabilir */
.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-contact-info {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}
.footer-contact-info h3 {
  margin-bottom: 15px;
  color: #333;
}
.footer-contact-info address {
  font-style: normal;
}
.footer-contact-info address p {
  margin-bottom: 8px;
  line-height: 1.5;
  font-size: 0.95em; /* Biraz küçülttüm */
}
.footer-contact-info address p strong {
  display: inline-block;
  min-width: 70px;
}
.footer-contact-info a {
  color: #8b4513;
  text-decoration: none;
}
.footer-contact-info a:hover {
  text-decoration: underline;
}

/* Mobil için footer içindeki strong etiketini ayrı satıra alma (isteğe bağlı) */
@media (max-width: 600px) {
  footer .container {
    text-align: center;
  }
  .footer-contact-info address p strong {
    display: block;
    margin-bottom: 3px;
    min-width: unset;
  }
  .footer-contact-info address p {
    text-align: center; /* Adres bilgilerini ortala */
  }
}
</style>
