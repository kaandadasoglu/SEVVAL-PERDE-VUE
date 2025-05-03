<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Slider verisi (görseller ve başlıklar)
// Not: Görsel yollarını @/assets/images/ olarak güncelledik
const slidesData = ref([
  {
    img: new URL("@/assets/images/slider1.jpg", import.meta.url).href,
    caption: "Kadıköy'de Perde Şıklığı",
  },
  {
    img: new URL("@/assets/images/slider2.jpg", import.meta.url).href,
    caption: "Modern Jaluzi Çözümleri",
  },
  {
    img: new URL("@/assets/images/slider3.jpg", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  // Daha fazla slayt eklenebilir
]);

const currentSlide = ref(0); // Aktif slaytın index'i
let slideInterval = null; // Otomatik kaydırma için interval ID'si
const sliderContainerRef = ref(null); // Slider konteynerına referans (hover için)

// Belirli bir slaytı gösteren fonksiyon
function showSlide(index) {
  const totalSlides = slidesData.value.length;
  if (totalSlides === 0) return;
  // Index'i sınırlar içinde tut
  currentSlide.value = (index + totalSlides) % totalSlides;
}

// Sonraki slayta geç
function nextSlide() {
  showSlide(currentSlide.value + 1);
}

// Önceki slayta geç
function prevSlide() {
  showSlide(currentSlide.value - 1);
}

// Otomatik kaydırmayı başlatan fonksiyon
function startSlideShow() {
  stopSlideShow(); // Önce varsa durdur
  if (slidesData.value.length > 1) {
    slideInterval = setInterval(nextSlide, 5000); // 5 saniyede bir
  }
}

// Otomatik kaydırmayı durduran fonksiyon
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Bileşen yüklendiğinde slider'ı başlat
onMounted(() => {
  startSlideShow();
  // Hover olaylarını ekle (isteğe bağlı)
  if (sliderContainerRef.value) {
    sliderContainerRef.value.addEventListener("mouseenter", stopSlideShow);
    sliderContainerRef.value.addEventListener("mouseleave", startSlideShow);
  }
});

// Bileşen kaldırıldığında interval'i temizle (hafıza sızıntısını önle)
onUnmounted(() => {
  stopSlideShow();
  // Event listener'ları da kaldırmak iyi pratiktir ama burada basitlik için atladık
});
</script>

<template>
  <section class="slider-container" ref="sliderContainerRef">
    <div class="slider">
      <div
        v-for="(slide, index) in slidesData"
        :key="index"
        class="slide"
        :class="{ 'active-slide': index === currentSlide }"
        :style="{ backgroundImage: `url(${slide.img})` }"
      >
        <div class="slide-caption">{{ slide.caption }}</div>
      </div>
    </div>
    <template v-if="slidesData.length > 1">
      <button
        @click="prevSlide"
        class="slider-btn prev"
        aria-label="Önceki Slayt"
      >
        &#10094;
      </button>
      <button
        @click="nextSlide"
        class="slider-btn next"
        aria-label="Sonraki Slayt"
      >
        &#10095;
      </button>
    </template>
  </section>
</template>

<style scoped>
/* Daha önceki style.css'den alınan slider stilleri */
.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f5f5dc;
}

.slider {
  display: flex;
  position: relative;

  /* Yaygın oranlar: 16/9 (Geniş Ekran), 21/9 (Daha Geniş), 3/2, 4/3 */
  aspect-ratio: 3/2; /* <<<--- Örnek: 16:9 oranı */
  /* İsterseniz farklı bir oran deneyebilirsiniz: aspect-ratio: 21 / 9; veya aspect-ratio: 3 / 2; */

  width: 100%; /* Genişliğin %100 olduğundan emin olun */
  /* Fallback için minimum yükseklik (çok eski tarayıcılar veya çok dar ekranlar için) */
  min-height: 250px; /* Çok küçülmesini engellemek için */
}

.slide {
  min-width: 100%; /* Bu gerekli değil artık, aşağıdaki stiller yeterli */
  background-size: cover; /* Görselin alanı kaplaması ÖNEMLİ */
  background-position: center; /* Ortalaması ÖNEMLİ */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Parent (.slider) genişliğini al */
  height: 100%; /* Parent (.slider) yüksekliğini al */
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  z-index: 1;
}

.slide.active-slide {
  opacity: 1;
  z-index: 2;
}

.slide-caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px 20px;
  font-size: 1.5em;
  border-radius: 5px;
  z-index: 3; /* Caption en üstte */
}

/* Slider Butonları */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2em;
  padding: 10px;
  cursor: pointer;
  z-index: 5; /* Butonlar caption'dan da üstte */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}
.slider-btn.prev {
  left: 15px;
}
.slider-btn.next {
  right: 15px;
}
.slider-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* --- Duyarlılık Ayarları (Farklı Ekranlarda Farklı Oran) --- */

/* Örneğin: Tablet ve daha küçüklerde oranı biraz daha kareye yakın yapalım */
@media (max-width: 768px) {
  .slider {
    aspect-ratio: 4 / 3; /* <<<--- Tablet için farklı oran */
    min-height: 200px;
  }
  .slide-caption {
    font-size: 1.2em;
    bottom: 25px;
    left: 25px;
    padding: 8px 15px;
  }
  .slider-btn {
    font-size: 1.8em;
    width: 45px;
    height: 45px;
    padding: 8px;
  } /* Boyutları ayarlayın */
}

/* Mobil için daha da dikey bir oran */
@media (max-width: 600px) {
  .slider {
    aspect-ratio: 3 / 4; /* <<<--- Mobil için dikey oran */
    min-height: 300px; /* Mobil için min yükseklik gerekebilir */
  }
  /* YENİ: Mobil için .slide stilini override et */
  .slide {
    background-size: contain; /* <<<--- KIRPMADAN SIĞDIR */
    background-repeat: no-repeat; /* Tekrarlamayı engelle */
    /* background-position: center; zaten varsayılan ve üstte tanımlı olmalı */
  }

  .slide-caption {
    /* Mobil caption stilleri... */
    font-size: 1.1em;
    bottom: 20px;
    left: 20px;
    padding: 6px 12px;
    /* Contain kullanınca caption'ın görsel üzerine gelmesini sağlamak gerekebilir */
    /* Veya caption'ı görselin altına/üstüne konumlandırabilirsiniz */
    /* Örneğin: */
    /* bottom: auto; top: 10px; left: 10px; background-color: rgba(0,0,0,0.7); */
  }
  .slider-btn {
    /* Mobil buton stilleri... */
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    padding: 5px;
  }
  .slider-btn.prev {
    left: 10px;
  }
  .slider-btn.next {
    right: 10px;
  }
}
</style>
