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
        "Şevval Perde ile iletişime geçin. Adres: Fahrettin Kerim Gökay Cd No:223, Kadıköy/İstanbul. Telefon: +90 533 335 76 36. Konum ve iletişim bilgileri.",
    },
  ],
});
</script>

<template>
  <div class="container page-container">
    <h1>İletişim Bilgilerimiz</h1>
    <p class="contact-intro">
      Bizimle iletişime geçmekten çekinmeyin. Mağazamıza bekleriz!
    </p>

    <div class="contact-section">
      <div class="contact-info">
        <h2>Şevval Perde - Kadıköy</h2>
        <p>
          <strong>Adres:</strong> Merdivenköy, Fahrettin Kerim Gökay Cd No:223,
          34730 Kadıköy/İstanbul
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
          <strong>Çalışma Saatleri:</strong> Hafta içi & Cumartesi 09:00 - 19:00
        </p>
      </div>

      <div class="map-container">
        <h2>Konumumuz</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.9430085662066!2d29.063786076227725!3d40.982728771354076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79122819e4d%3A0xd9ebf39b8e4c54d8!2s%C5%9EEVVAL%20PERDE!5e0!3m2!1str!2str!4v1746020811218!5m2!1str!2str"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 30px;
  padding-bottom: 40px;
}

h1 {
  text-align: center;
  color: #8b4513;
  margin-bottom: 15px;
}

.contact-intro {
  text-align: center;
  color: #666;
  font-size: 1.1em;
  margin-bottom: 40px;
}
</style>
