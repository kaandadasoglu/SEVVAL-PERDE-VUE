<script setup>
import { computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import {
  perdeProducts,
  jaluziProducts,
  storProducts,
  pliseProducts,
  katlamaliProducts,
} from "@/data/products.js";
import { useHead } from "@vueuse/head";
import { RouterLink, useRoute } from "vue-router"; // useRoute import edin

const props = defineProps({
  slug: String,
});

const route = useRoute(); // Mevcut route bilgilerini almak için

const pageTitle = computed(() => {
  if (!props.slug) return "Kategori";
  const titles = {
    perdeler: "Perde",
    jaluziler: "Jaluzi",
    storlar: "Stor Perde",
    pliseler: "Plise Perde",
    katlamali: "Katlamalı Perde",
  };
  return (
    titles[props.slug] ||
    props.slug.charAt(0).toUpperCase() + props.slug.slice(1)
  );
});

const categoryProducts = computed(() => {
  if (props.slug === "perdeler") return perdeProducts;
  if (props.slug === "jaluziler") return jaluziProducts;
  if (props.slug === "storlar") return storProducts;
  if (props.slug === "pliseler") return pliseProducts;
  if (props.slug === "katlamali") return katlamaliProducts;
  return [];
});

// Dinamik başlık, açıklama ve YENİ: BreadcrumbList için useHead kullanımı
useHead(() => {
  // useHead'i bir fonksiyon haline getirin ki route.path reaktif olsun
  const baseUrl = "https://www.sevvalperde.com";
  const currentPath = route.path; // Mevcut sayfanın tam yolu

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
      name: pageTitle.value, // Dinamik kategori adı
      item: baseUrl + currentPath, // Mevcut kategori sayfasının URL'i
    },
  ];

  return {
    title: `${pageTitle.value} Modelleri | Şevval Perde Kadıköy`,
    meta: [
      {
        name: "description",
        content: `Şevval Perde Kadıköy ${pageTitle.value} kategorisindeki en yeni modelleri inceleyin. ${categoryProducts.value.length} ürün bulundu.`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: baseUrl + currentPath, // Bu sayfanın tam URL'si
      },
    ],
    script: [
      // YENİ: BreadcrumbList için script etiketi
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems,
        }),
      },
    ],
  };
});
</script>

<template>
  <div class="container page-container">
    <h1>{{ pageTitle }}</h1>

    <div v-if="categoryProducts.length > 0" class="product-grid category-grid">
      <ProductCard
        v-for="product in categoryProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else class="no-products">
      <p>Bu kategoriye ait ürün bulunamadı veya kategori geçerli değil.</p>
      <RouterLink to="/katalog" class="back-link"
        >&laquo; Kataloğa Geri Dön</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
/* Kategori sayfasına özel stiller */
.page-container {
  padding-top: 30px;
  padding-bottom: 40px;
}

h1 {
  text-align: center;
  color: #8b4513;
  margin-bottom: 40px;
  font-size: 2.5em; /* CatalogView ile aynı boyutta */
}

/* Kategori sayfasındaki grid stilleri global main.css'den gelmeli */
/* Eğer override gerekirse buraya .category-grid {...} ekleyin */
/* Örneğin: */
/* .category-grid { justify-content: flex-start; } */

.no-products {
  text-align: center;
  padding: 50px 20px;
  color: #777;
}
.no-products p {
  margin-bottom: 20px;
  font-size: 1.1em;
}

.back-link {
  display: inline-block;
  margin-top: 10px;
  color: #8b4513;
  text-decoration: underline;
  font-weight: bold;
}
.back-link:hover {
  color: #a0522d;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.1em;
  }
}
@media (max-width: 600px) {
  h1 {
    font-size: 1.8em;
    margin-bottom: 30px;
  }
}
</style>
