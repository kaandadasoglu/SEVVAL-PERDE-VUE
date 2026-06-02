<script setup>
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router"; // Vue Router'dan useRoute'u import ediyoruz

const route = useRoute(); // Mevcut route bilgilerini almak için
const pageTitleForBreadcrumb = "İletişim"; // Breadcrumb'da görünecek sayfa adı

// Instagram bilgileri (şablonunuzda kullanılıyor)
const instagramUrl = "https://www.instagram.com/sevvalperde/";
const instagramUsername = "@sevvalperde";

  const branches = [
  {
    name: "Şevval Perde - Göztepe / Merdivenköy",
    addressText:
      "Merdivenköy, Fahrettin Kerim Gökay Cd No:223, 34730 Kadıköy/İstanbul",
    streetAddress: "Merdivenköy, Fahrettin Kerim Gökay Cd No:223",
    postalCode: "34730",
    phone: "+90 533 335 76 36",
    phoneHref: "tel:+905333357636",
    email: "sevvalperde@hotmail.com",
    emailHref: "mailto:sevvalperde@hotmail.com",
    workingHours: "Hafta içi & Cumartesi 09:00 - 19:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Merdivenk%C3%B6y%2C%20Fahrettin%20Kerim%20G%C3%B6kay%20Cd%20No%3A223%2C%2034730%20Kad%C4%B1k%C3%B6y/%C4%B0stanbul",
    embedUrl:
      "https://www.google.com/maps?q=Merdivenk%C3%B6y%2C%20Fahrettin%20Kerim%20G%C3%B6kay%20Cd%20No%3A223%2C%2034730%20Kad%C4%B1k%C3%B6y/%C4%B0stanbul&output=embed",
  },
  {
    name: "Şevval Perde - Sahrayı Cedit",
    addressText:
      "Sahrayı Cedit, İnönü Cd. NO:2 / 1, 34734 Kadıköy/İstanbul",
    streetAddress: "Sahrayı Cedit, İnönü Cd. NO:2 / 1",
    postalCode: "34734",
    phone: "+90 533 335 76 36",
    phoneHref: "tel:+905333357636",
    email: "sevvalperde@hotmail.com",
    emailHref: "mailto:sevvalperde@hotmail.com",
    workingHours: "Hafta içi & Cumartesi 09:00 - 19:00",
    mapUrl: "https://maps.app.goo.gl/4GFwLbUE51U2E9ER9",
    embedUrl:
      "https://www.google.com/maps?q=Sahray%C4%B1%20Cedit%2C%20%C4%B0n%C3%B6n%C3%BC%20Cd.%20NO%3A2%20/%201%2C%2034734%20Kad%C4%B1k%C3%B6y/%C4%B0stanbul&output=embed",
  },
];
// useHead'i reaktif hale getirmek için bir fonksiyon olarak tanımlıyoruz
useHead(() => {
  const baseUrl = "https://www.sevvalperde.com"; // Sitenizin ana URL'si
  const currentPath = route.path; // Mevcut sayfanın yolu (örn: /iletisim)
  const currentUrl = baseUrl + currentPath; // Mevcut sayfanın tam URL'si

  // BreadcrumbList için öğeler
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: baseUrl + "/", // Ana sayfa URL'si
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageTitleForBreadcrumb, // Bu sayfanın adı
      item: currentUrl, // Bu sayfanın URL'si
    },
  ];

  // LocalBusiness (Yerel İşletme) Şeması
  const localBusinessSchema = branches.map((branch) => ({
  "@context": "https://schema.org",
  "@type": "CurtainStore",
  name: branch.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: branch.streetAddress,
    addressLocality: "Kadıköy",
    addressRegion: "İstanbul",
    postalCode: branch.postalCode,
    addressCountry: "TR",
  },
  telephone: "+905333357636",
  url: baseUrl,
  image: baseUrl + "/logo-sevval-perde.png",
  openingHours: "Mo-Sa 09:00-19:00",
  hasMap: branch.mapUrl,
  identifier: branch.mapUrl,
  sameAs: [instagramUrl, branch.mapUrl],
}));
  return {
    title: "İletişim - Şevval Perde | Kadıköy Mağaza ve Telefon",
    meta: [
      {
        name: "description",
        content:
  "Şevval Perde Kadıköy şubelerimize ulaşın. Göztepe/Merdivenköy ve Sahrayı Cedit şubelerimizin adres, telefon, harita ve iletişim bilgileri.",
      },
    ],
    link: [
      // Kanonik URL etiketi
      {
        rel: "canonical",
        href: currentUrl, // Bu sayfanın tam ve asıl URL'si
      },
    ],
    script: [
      // Yapılandırılmış veri scriptleri
      {
        type: "application/ld+json",
        children: JSON.stringify({
          // BreadcrumbList Şeması
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema), // LocalBusiness Şeması
      },
    ],
  };
});
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
  <h2>Şubelerimiz</h2>

  <div class="branches-grid">
    <div v-for="branch in branches" :key="branch.name" class="branch-card">
      <h3>{{ branch.name }}</h3>

      <div class="contact-item">
        <i class="fas fa-map-marker-alt contact-icon" aria-hidden="true"></i>
        <span>{{ branch.addressText }}</span>
      </div>

      <div class="contact-item">
        <i class="fas fa-phone-alt contact-icon" aria-hidden="true"></i>
        <a :href="branch.phoneHref">{{ branch.phone }}</a>
      </div>

      <div class="contact-item">
        <i class="fas fa-envelope contact-icon" aria-hidden="true"></i>
        <a :href="branch.emailHref">{{ branch.email }}</a>
      </div>

      <div class="contact-item">
        <i class="fas fa-clock contact-icon" aria-hidden="true"></i>
        <span>{{ branch.workingHours }}</span>
      </div>

      <div class="contact-item">
        <i class="fas fa-location-arrow contact-icon" aria-hidden="true"></i>
        <a :href="branch.mapUrl" target="_blank" rel="noopener noreferrer">
          Google Haritalar’da Aç
        </a>
      </div>
    </div>
  </div>
</div>

<div class="maps-grid">
  <div v-for="branch in branches" :key="`${branch.name}-map`" class="map-container">
    <h2>{{ branch.name }} Konumu</h2>

    <iframe
      :src="branch.embedUrl"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      :title="`${branch.name} Konumu`"
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
