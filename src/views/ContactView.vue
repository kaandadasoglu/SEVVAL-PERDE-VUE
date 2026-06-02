<script setup>
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router"; // Vue Router'dan useRoute'u import ediyoruz

const route = useRoute(); // Mevcut route bilgilerini almak için
const pageTitleForBreadcrumb = "İletişim"; // Breadcrumb'da görünecek sayfa adı

// Instagram bilgileri
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
  const currentPath = route.path; // Mevcut sayfanın yolu
  const currentUrl = baseUrl + currentPath; // Mevcut sayfanın tam URL'si

  // BreadcrumbList için öğeler
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: baseUrl + "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageTitleForBreadcrumb,
      item: currentUrl,
    },
  ];

  // LocalBusiness / CurtainStore şeması
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
      {
        rel: "canonical",
        href: currentUrl,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  };
});
</script>

<template>
  <div class="container page-container">
    <h1>İletişim Bilgilerimiz</h1>

    <p class="contact-intro">
      Aşağıdaki bilgilerden veya haritadan bize ulaşabilirsiniz. Mağazalarımıza
      bekleriz!
    </p>

    <div class="contact-section">
      <div class="contact-info">
        <h2>Şubelerimiz</h2>

        <div class="branches-grid">
          <div
            v-for="branch in branches"
            :key="branch.name"
            class="branch-card"
          >
            <h3>{{ branch.name }}</h3>

            <div class="contact-item">
              <i
                class="fas fa-map-marker-alt contact-icon"
                aria-hidden="true"
              ></i>
              <span>{{ branch.addressText }}</span>
            </div>

            <div class="contact-item">
              <i
                class="fas fa-phone-alt contact-icon"
                aria-hidden="true"
              ></i>
              <a :href="branch.phoneHref">{{ branch.phone }}</a>
            </div>

            <div class="contact-item">
              <i
                class="fas fa-envelope contact-icon"
                aria-hidden="true"
              ></i>
              <a :href="branch.emailHref">{{ branch.email }}</a>
            </div>

            <div class="contact-item">
              <i class="fas fa-clock contact-icon" aria-hidden="true"></i>
              <span>{{ branch.workingHours }}</span>
            </div>

            <div class="contact-item">
              <i
                class="fas fa-location-arrow contact-icon"
                aria-hidden="true"
              ></i>
              <a
                :href="branch.mapUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Haritalar’da Aç
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="maps-grid">
        <div
          v-for="branch in branches"
          :key="`${branch.name}-map`"
          class="map-container"
        >
          <h2>{{ branch.name }} </h2>

          <iframe
            :src="branch.embedUrl"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="`${branch.name} `"
          ></iframe>
        </div>
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
  color: #8b4513;
  margin-bottom: 15px;
}

.contact-intro {
  text-align: center;
  color: #555;
  font-size: 1.15em;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-section {
  width: 100%;
}

.contact-info {
  width: 100%;
  margin-bottom: 40px;
}

.contact-info h2 {
  color: #a0522d;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.6em;
}

.branches-grid,
.maps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.branch-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
}

.branch-card h3 {
  color: #a0522d;
  margin-bottom: 20px;
  font-size: 1.25em;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  font-size: 1.05em;
  line-height: 1.6;
}

.contact-icon {
  color: #8b4513;
  font-size: 1.3em;
  margin-right: 15px;
  width: 25px;
  text-align: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item span,
.contact-item a {
  color: #333;
  text-decoration: none;
}

.contact-item a:hover {
  color: #a0522d;
  text-decoration: underline;
}

.maps-grid {
  margin-top: 40px;
}

.map-container h2 {
  color: #a0522d;
  margin-bottom: 15px;
  font-size: 1.6em;
}

.map-container iframe {
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}

@media (min-width: 992px) {
  .branches-grid,
  .maps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
