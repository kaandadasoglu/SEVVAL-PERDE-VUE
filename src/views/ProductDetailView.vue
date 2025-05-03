<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useHead } from "@vueuse/head";
import { getProductById } from "@/data/products.js";

const props = defineProps({
  id: String,
});

const product = computed(() => {
  return getProductById(props.id);
});

// Meta etiketleri (title ve description aynı kalabilir veya güncellenebilir)
useHead({
  title: computed(() =>
    product.value
      ? `${product.value.name} - Şevval Perde`
      : "Ürün Detayı - Şevval Perde"
  ),
  meta: [
    {
      name: "description",
      content: computed(() =>
        product.value
          ? `${product.value.name}: ${
              product.value.description?.substring(0, 150) ?? ""
            }... Şevval Perde Kadıköy mağazasında inceleyin.` // description yoksa diye kontrol eklendi
          : "Şevval Perde ürün detay sayfası."
      ),
    },
  ],
});
</script>

<template>
  <div class="container page-container product-detail-page">
    <template v-if="product">
      <div class="product-content">
        <div class="product-image-detail">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p class="description">{{ product.description }}</p>
          <div class="specs" v-if="product.material || product.color">
            <h4>Özellikler</h4>
            <ul>
              <li v-if="product.material">
                <strong>Malzeme:</strong> {{ product.material }}
              </li>
              <li v-if="product.color">
                <strong>Renk:</strong> {{ product.color }}
              </li>
            </ul>
          </div>
          <div class="actions">
            <RouterLink to="/iletisim" class="cta-button secondary"
              >Detaylı Bilgi / Teklif Al</RouterLink
            >
            <RouterLink to="/katalog" class="back-link"
              >Kataloğa Geri Dön</RouterLink
            >
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="not-found">
        <h1>Ürün Bulunamadı</h1>
        <p>Aradığınız ürün mevcut değil veya ID geçersiz.</p>
        <RouterLink to="/katalog" class="back-link"
          >&laquo; Kataloğa Geri Dön</RouterLink
        >
      </div>
    </template>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 40px;
  padding-bottom: 60px;
}

.product-content {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Daha esnek sütunlar */
  gap: 40px;
  align-items: flex-start;
}

.product-image-detail {
  position: sticky; /* Sayfa kaydırılınca resmin görünür kalması için (opsiyonel) */
  top: 100px; /* Header yüksekliğine göre ayarlayın */
}

.product-image-detail img {
  width: 100%;
  /* max-width: 500px; */ /* Kaldırıldı, grid boyutuna uysun */
  height: auto;
  border-radius: 8px;
  border: 1px solid #eee;
  display: block;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Hafif gölge */
}

.product-info {
  /* Sağ sütun için ekstra stil gerekirse */
}

.product-info h1 {
  font-size: 2.2em;
  color: #333;
  margin-bottom: 15px; /* Boşluk azaltıldı */
  line-height: 1.3;
}

.product-info .description {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.7;
}

/* Özellikler Bölümü Stilleri */
.specs {
  background-color: #f9f9f9; /* Hafif farklı arka plan */
  padding: 15px 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid #eee;
}
.specs h4 {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}
.specs ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.specs li {
  margin-bottom: 8px;
  font-size: 1em;
  color: #444;
}
.specs li:last-child {
  margin-bottom: 0;
}
.specs li strong {
  min-width: 80px; /* Hizalama için */
  display: inline-block;
  margin-right: 5px;
  color: #111;
}

/* Butonlar ve Link Alanı */
.actions {
  margin-top: 30px;
  display: flex;
  flex-direction: column; /* Butonları alt alta */
  align-items: flex-start; /* Sola hizala */
  gap: 15px; /* Aralarına boşluk */
}

.back-link {
  /* margin-top: 20px; */ /* Actions içine alındığı için üst boşluk kaldırıldı */
  color: #8b4513;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.95em; /* Biraz küçültelim */
}
.back-link:hover {
  color: #a0522d;
}
/* Geri dön linki için üstte ayırıcı (opsiyonel) */
/* .back-link.top-sep { margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; display: block; } */

.not-found {
  text-align: center;
  padding: 60px 20px;
}
.not-found h1 {
  color: #cc0000;
  margin-bottom: 20px;
  font-size: 2em;
}
.not-found p {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 30px;
}

/* --- Duyarlılık --- */
@media (max-width: 768px) {
  .product-content {
    /* display: grid kalabilir veya flex'e dönebilir */
    gap: 30px;
  }
  .product-image-detail {
    position: static; /* Mobilde sticky olmasın */
    max-width: 450px; /* Resim mobilde çok büyümesin */
    margin: 0 auto; /* Ortala */
  }
  .product-info {
    text-align: center; /* Bilgileri ortala */
  }
  .product-info h1 {
    font-size: 1.8em;
  }
  .specs {
    text-align: left; /* Özellikler sola hizalı kalsın */
    max-width: 400px; /* Çok genişlemesin */
    margin-left: auto;
    margin-right: auto;
  }
  .actions {
    align-items: center; /* Butonları ortala */
  }
  .back-link {
    display: block; /* Tam genişlik */
    text-align: center;
  }
}
@media (max-width: 600px) {
  .product-info h1 {
    font-size: 1.6em;
  }
  .product-info .description {
    font-size: 1em;
  }
  .specs h4 {
    font-size: 1.1em;
  }
  .specs li {
    font-size: 0.95em;
  }
}
</style>
