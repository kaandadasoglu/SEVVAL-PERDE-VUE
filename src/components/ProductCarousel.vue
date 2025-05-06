<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import ProductCard from "./ProductCard.vue"; // Ürün kartı bileşenini import et

// Dışarıdan 'products' dizisini prop olarak al
const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [], // Varsayılan boş dizi
  },
});

const carouselContainerRef = ref(null); // Konteyner referansı
const gridRef = ref(null); // Grid referansı

let itemsPerPage = ref(3); // Ekrana göre değişecek
let currentPage = ref(0); // Aktif sayfa (0'dan başlar)

const totalItems = computed(() => props.products.length); // Toplam ürün sayısı
const totalPages = computed(() =>
  Math.ceil(totalItems.value / itemsPerPage.value)
); // Toplam sayfa

// Boyutları hesapla ve state'i güncelle
function calculateDimensions() {
  const screenWidth = window.innerWidth;
  let newItemsPerPage = 3;
  if (screenWidth <= 540) {
    newItemsPerPage = 1;
  } else if (screenWidth <= 900) {
    newItemsPerPage = 2;
  }
  itemsPerPage.value = newItemsPerPage;

  // Sayfa sayısı değiştiyse mevcut sayfayı ayarla
  if (currentPage.value >= totalPages.value) {
    currentPage.value = Math.max(0, totalPages.value - 1);
  }
  updateGridPosition(); // Boyut değişince pozisyonu hemen güncelle
  checkButtons(); // Buton durumunu kontrol et
}

// Grid pozisyonunu ayarla
function updateGridPosition() {
  if (!gridRef.value || !gridRef.value.children.length) return;

  const targetItemIndex = Math.min(
    currentPage.value * itemsPerPage.value,
    totalItems.value - 1
  );
  const targetElement = gridRef.value.children[targetItemIndex];

  let newTransformX = 0;
  if (targetElement) {
    newTransformX = -targetElement.offsetLeft;
  }
  gridRef.value.style.transform = `translateX(${newTransformX}px)`;
}

const isPrevDisabled = computed(() => currentPage.value === 0);
const isNextDisabled = computed(
  () => currentPage.value >= totalPages.value - 1
);

// Buton durumunu kontrol et (computed ile otomatikleşti)
function checkButtons() {
  // Bu fonksiyon artık sadece butonları gizlemek/göstermek için kullanılabilir
  const prevBtn =
    carouselContainerRef.value?.querySelector(".carousel-btn.prev");
  const nextBtn =
    carouselContainerRef.value?.querySelector(".carousel-btn.next");
  if (!prevBtn || !nextBtn) return;

  if (totalItems.value <= itemsPerPage.value) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}

function moveToPage(pageIndex) {
  const newPageIndex = Math.max(0, Math.min(pageIndex, totalPages.value - 1));
  if (newPageIndex !== currentPage.value) {
    currentPage.value = newPageIndex;
    updateGridPosition();
    // checkButtons() otomatik olarak computed ile güncellenir
  }
}

function nextPage() {
  moveToPage(currentPage.value + 1);
}

function prevPage() {
  moveToPage(currentPage.value - 1);
}

// Resize listener için debounce
let resizeTimer = null;
const handleResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(calculateDimensions, 250);
};

// Bileşen yüklendiğinde ve products prop'u değiştiğinde boyutları hesapla
onMounted(() => {
  calculateDimensions();
  window.addEventListener("resize", handleResize);
});

// Bileşen kaldırıldığında listener'ı temizle
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Ürünler değişirse (örn. API'den gelirse) yeniden hesapla
watch(
  () => props.products,
  () => {
    currentPage.value = 0; // Ürünler değişince ilk sayfaya dön
    calculateDimensions();
  },
  { deep: true }
); // İçerik değişirse de tetikle (opsiyonel)
</script>

<template>
  <div class="product-carousel-container" ref="carouselContainerRef">
    <button
      @click="prevPage"
      class="carousel-btn prev"
      :disabled="isPrevDisabled"
      aria-label="Önceki Ürünler"
      v-show="totalItems > itemsPerPage"
    >
      &#10094;
    </button>

    <div class="product-grid-wrapper">
      <div class="product-grid" ref="gridRef">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="carousel-item-override"
        />
      </div>
    </div>

    <button
      @click="nextPage"
      class="carousel-btn next"
      :disabled="isNextDisabled"
      aria-label="Sonraki Ürünler"
      v-show="totalItems > itemsPerPage"
    >
      &#10095;
    </button>
  </div>
</template>

<style scoped>
/* Statik CSS'den alınan Carousel stilleri */
.product-carousel-container {
  position: relative;
  /* Genişlik ve padding global CSS'den veya media query'den gelecek */
  width: 890px; /* Örnek masaüstü */
  max-width: 100%;
  margin: 0 auto;
  padding: 0 40px; /* Oklar için padding */
}

/* Grid'i saran ve taşmayı gizleyen div */
.product-grid-wrapper {
  overflow: hidden;
}

.product-grid {
  display: flex;
  flex-wrap: nowrap; /* Tek satır */
  transition: transform 0.5s ease-in-out;
  transform: translateX(0);
  /* Not: Bu gridin padding'i olmamalı */
}

/* Carousel içindeki ürün kartı için genişlik override */
.carousel-item-override {
  flex: 0 0 auto; /* Esneme/küçülme yapma */
  width: 260px; /* Sabit genişlik */
  margin-right: 15px; /* Ürün arası boşluk */
}

/* Carousel Ok Butonları */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.8em;
  cursor: pointer;
  display: flex; /* V-show ile gizlenip gösterildiği için flex önemli */
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease,
    box-shadow 0.3s ease;
  opacity: 0.7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.carousel-btn:hover:not(:disabled) {
  /* Sadece etkinse hover stili */
  background-color: white;
  color: #000;
  opacity: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.carousel-btn.prev {
  left: 5px;
} /* Padding alanı içi */
.carousel-btn.next {
  right: 5px;
} /* Padding alanı içi */
.carousel-btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
  box-shadow: none;
  background-color: rgba(200, 200, 200, 0.7);
}

/* --- Duyarlılık --- */
@media (max-width: 900px) {
  .product-carousel-container {
    width: 535px;
    padding: 0 30px;
  }
  .carousel-item-override {
    width: 230px;
  }
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5em;
  }
  .carousel-btn.prev {
    left: 5px;
  }
  .carousel-btn.next {
    right: 5px;
  }
}
@media (max-width: 540px) {
  .product-carousel-container {
    width: 270px;
    height: 400px;
    padding: 0 25px;
  }
  .carousel-item-override {
    width: 220px;
    height: 400px;
    margin-right: 0;
  }
  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1.3em;
  }
  .carousel-btn.prev {
    left: 3px;
  }
  .carousel-btn.next {
    right: 3px;
  }
}
</style>
