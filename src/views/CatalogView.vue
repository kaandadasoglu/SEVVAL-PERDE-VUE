<script setup>
import ProductCarousel from "@/components/ProductCarousel.vue";
import { RouterLink } from "vue-router";
import { useHead } from "@vueuse/head";

// Veriyi merkezi dosyadan import et
import {
  perdeProducts,
  jaluziProducts,
  storProducts,
  pliseProducts,
} from "@/data/products.js";

// Sayfa başlığı ve açıklamasını tanımla
useHead({
  title:
    "Ürün Kataloğu - Perdeler, Jaluziler, Storlar, Pliseler | Şevval Perde Kadıköy",
  meta: [
    {
      name: "description",
      content:
        "Şevval Perde Kadıköy ürün kataloğu. En yeni fon perde, tül perde, ahşap/metal jaluzi, stor, plise perde modellerini ve çeşitlerini inceleyin.",
    },
  ],
});
</script>

<template>
  <div class="container page-container">
    <h1>Ürün Kataloğumuz</h1>
    <p class="catalog-intro">
      Eviniz ve iş yeriniz için en şık ve fonksiyonel perde çözümlerini
      keşfedin.
    </p>

    <section class="catalog-section">
      <h2>
        <RouterLink :to="{ name: 'category', params: { slug: 'perdeler' } }"
          >Fon Perdeler & Tüller</RouterLink
        >
      </h2>
      <ProductCarousel :products="perdeProducts" />
    </section>

    <section class="catalog-section">
      <h2>
        <RouterLink :to="{ name: 'category', params: { slug: 'jaluziler' } }"
          >Jaluziler</RouterLink
        >
      </h2>
      <ProductCarousel :products="jaluziProducts" />
    </section>

    <section class="catalog-section">
      <h2>
        <RouterLink :to="{ name: 'category', params: { slug: 'storlar' } }"
          >Stor Perdeler</RouterLink
        >
      </h2>
      <ProductCarousel :products="storProducts" />
    </section>

    <section class="catalog-section">
      <h2>
        <RouterLink :to="{ name: 'category', params: { slug: 'pliseler' } }"
          >Plise Perdeler</RouterLink
        >
      </h2>
      <ProductCarousel :products="pliseProducts" />
    </section>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 30px;
  padding-bottom: 40px;
}

.page-container h1 {
  text-align: center;
  color: #8b4513;
  margin-bottom: 15px;
  font-size: 2.5em;
}

.catalog-intro {
  text-align: center;
  color: #666;
  font-size: 1.1em;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.catalog-section {
  margin-bottom: 60px;
}

.catalog-section h2 {
  color: #333;
  border-bottom: 2px solid #8b4513;
  padding-bottom: 10px;
  margin-bottom: 35px;
  font-size: 1.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catalog-section h2 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.catalog-section h2 a:hover {
  color: #a0522d;
}

@media (max-width: 768px) {
  .page-container h1 {
    font-size: 2.1em;
  }
  .catalog-section h2 {
    font-size: 1.6em;
  }
}
@media (max-width: 600px) {
  .page-container h1 {
    font-size: 1.8em;
  }
  .catalog-intro {
    font-size: 1em;
    margin-bottom: 30px;
  }
  .catalog-section h2 {
    font-size: 1.4em;
    margin-bottom: 20px;
  }
}
</style>
