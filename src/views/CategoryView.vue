<script setup>
import { computed } from "vue";
import ProductCard from "@/components/ProductCard.vue"; // ProductCard bileşenini import et
import {
  perdeProducts,
  jaluziProducts,
  storProducts,
  pliseProducts,
  katlamaliProducts,
} from "@/data/products.js"; // Veriyi import et
import { useHead } from "@vueuse/head"; // Meta etiketler için
import { RouterLink } from "vue-router"; // RouterLink import

// Route'dan gelen 'slug' parametresini prop olarak al
const props = defineProps({
  slug: String,
});

// Slug'a göre sayfa başlığını belirle
const pageTitle = computed(() => {
  if (!props.slug) return "Kategori";
  const titles = {
    perdeler: "Perdeler",
    jaluziler: "Jaluziler",
    storlar: "Stor Perdeler",
    pliseler: "Plise Perdeler",
    katlamali: "Katlamalı Perdeler",
  };
  return (
    titles[props.slug] ||
    props.slug.charAt(0).toUpperCase() + props.slug.slice(1)
  );
});

// Slug'a göre gösterilecek ürünleri belirle
const categoryProducts = computed(() => {
  if (props.slug === "perdeler") return perdeProducts;
  if (props.slug === "jaluziler") return jaluziProducts;
  if (props.slug === "storlar") return storProducts;
  if (props.slug === "pliseler") return pliseProducts;
  if (props.slug === "katlamali") return katlamaliProducts;
  return []; // Eşleşen kategori yoksa boş dizi
});

// Dinamik başlık ve açıklama için useHead kullanımı
useHead({
  title: computed(() => `${pageTitle.value} Modelleri | Şevval Perde Kadıköy`),
  meta: [
    {
      name: "description",
      content: computed(
        () =>
          `Şevval Perde Kadıköy ${pageTitle.value} kategorisindeki en yeni modelleri inceleyin. ${categoryProducts.value.length} ürün bulundu.`
      ),
    },
  ],
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
