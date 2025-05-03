<script setup>
import { RouterLink } from "vue-router";

// Bu bileşenin 'product' adında bir prop alacağını ve
// bunun bir Obje olması gerektiğini tanımla
const props = defineProps({
  product: {
    type: Object,
    required: true, // Bu prop'un gönderilmesi zorunlu
  },
});
</script>

<template>
  <RouterLink
    :to="{ name: 'product-detail', params: { id: product.id } }"
    class="product-item-link"
    v-if="product && product.id"
    বালক
  >
    <div class="product-item">
      <div class="product-image">
        <img v-if="product.image" :src="product.image" :alt="product.name" />
        <div v-else class="image-placeholder">Resim Yok</div>
      </div>

      <h3 class="product-name">{{ product.name || "Ürün Adı Yok" }}</h3>

      <p class="product-desc">{{ product.description || "" }}</p>
    </div>
  </RouterLink>
  <div v-else class="product-item placeholder">
    <p>Ürün bilgisi yüklenemedi.</p>
  </div>
</template>

<style scoped>
.product-item-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  border-radius: 8px;
}

.product-item {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  flex: 1 1 280px;
}

.product-item.placeholder {
  align-items: center;
  justify-content: center;
  color: #999;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

.product-image {
  margin-bottom: 15px;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 5px;
}

.product-image img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

.image-placeholder {
  color: #ccc;
  font-size: 0.9em;
}

.product-name {
  font-size: 1.15em;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;

  flex-grow: 1;
  min-height: 40px;
  line-height: 1.3;
}

.product-desc {
  font-size: 0.9em;
  color: #777;
  line-height: 1.5;
}
</style>
