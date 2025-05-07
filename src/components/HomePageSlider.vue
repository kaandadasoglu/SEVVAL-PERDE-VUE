<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue"; // computed eklendi

// Slider verisi
const slidesData = ref([
  {
    img: new URL("@/assets/images/slider2.png", import.meta.url).href,
    caption: "Modern Jaluzi Çözümleri",
  },
  {
    img: new URL("@/assets/images/slider4.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider5.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider6.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider7.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider8.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider9.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider10.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider11.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider12.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider13.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
  {
    img: new URL("@/assets/images/slider14.png", import.meta.url).href,
    caption: "Fonksiyonel Stor Perdeler",
  },
]);

const currentSlide = ref(0);
let slideInterval = null;
const sliderContainerRef = ref(null); // Slider konteynerı referansı

// --- Swipe/Drag Değişkenleri ---
const isDragging = ref(false); // Sürükleme aktif mi?
const startX = ref(0); // Başlangıç X koordinatı
const currentX = ref(0); // Anlık X koordinatı (opsiyonel, görsel sürükleme için gerekebilir)
const dragThreshold = 50; // Kaydırma olarak algılanması için gereken minimum piksel

// --- Slayt Fonksiyonları ---
function showSlide(index) {
  const totalSlides = slidesData.value.length;
  if (totalSlides === 0) return;
  currentSlide.value = (index + totalSlides) % totalSlides;
}

function nextSlide() {
  showSlide(currentSlide.value + 1);
}

function prevSlide() {
  showSlide(currentSlide.value - 1);
}

// --- Otomatik Kaydırma ---
function startSlideShow() {
  stopSlideShow();
  if (slidesData.value.length > 1) {
    slideInterval = setInterval(nextSlide, 5000);
  }
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// --- Swipe/Drag Olay Yöneticileri ---

// Olaydan X koordinatını alır (mouse veya touch)
function getEventX(event) {
  return event.type.startsWith("touch")
    ? event.changedTouches[0].clientX
    : event.clientX;
}

function handleDragStart(event) {
  // Sadece tek slayt varsa veya zaten sürükleniyorsa bir şey yapma
  if (slidesData.value.length <= 1 || isDragging.value) return;

  isDragging.value = true;
  startX.value = getEventX(event);
  currentX.value = startX.value; // Başlangıçta eşit
  stopSlideShow(); // Sürüklerken otomatik kaymayı durdur

  // Opsiyonel: sürüklerken imleci değiştir
  if (sliderContainerRef.value) {
    sliderContainerRef.value.style.cursor = "grabbing";
  }
  // Dokunmatik için sayfa kaymasını engelle (yatay swipe önceliği)
  if (event.type === "touchstart") {
    // event.preventDefault(); // DİKKAT: Bu, dikey kaydırmayı da engelleyebilir. Gerekirse daha detaylı kontrol lazım.
  }
}

function handleDragMove(event) {
  if (!isDragging.value) return;
  currentX.value = getEventX(event);
  // İPUCU: Eğer görsel sürükleme isterseniz, burada .slider'a transform uygulayabilirsiniz:
  // const diff = currentX.value - startX.value;
  // sliderContainerRef.value.querySelector('.slider').style.transform = `translateX(${diff}px)`;
  // sliderContainerRef.value.querySelector('.slider').style.transition = 'none'; // Sürüklerken geçiş olmasın
}

function handleDragEnd(event) {
  if (!isDragging.value) return;

  const endX = getEventX(event);
  const diffX = endX - startX.value;

  // Belirli bir eşiği geçtiyse yönü belirle
  if (Math.abs(diffX) > dragThreshold) {
    if (diffX < 0) {
      // Sola kaydırma (Next)
      nextSlide();
    } else {
      // Sağa kaydırma (Prev)
      prevSlide();
    }
  }

  // Sürüklemeyi bitir ve durumu sıfırla
  isDragging.value = false;
  startX.value = 0;
  currentX.value = 0;
  startSlideShow(); // Otomatik kaymayı tekrar başlat

  // Opsiyonel: İmleci ve transform'u sıfırla
  if (sliderContainerRef.value) {
    sliderContainerRef.value.style.cursor = "grab";
    // Görsel sürükleme yaptıysanız:
    // sliderContainerRef.value.querySelector('.slider').style.transform = 'translateX(0)';
    // sliderContainerRef.value.querySelector('.slider').style.transition = 'opacity 0.8s ease-in-out'; // Veya transform transition
  }
}

// Eğer fare slider dışına çıkarsa sürüklemeyi bitir
function handleMouseLeave() {
  if (isDragging.value) {
    // Drag End gibi davran ama son konumu kullanma, sadece sıfırla
    isDragging.value = false;
    startX.value = 0;
    currentX.value = 0;
    startSlideShow();
    if (sliderContainerRef.value) {
      sliderContainerRef.value.style.cursor = "grab";
      // Görsel sürükleme yaptıysanız:
      // sliderContainerRef.value.querySelector('.slider').style.transform = 'translateX(0)';
      // sliderContainerRef.value.querySelector('.slider').style.transition = 'opacity 0.8s ease-in-out';
    }
  }
}

// --- Lifecycle Hooks ---
onMounted(() => {
  startSlideShow();
  // Hover ile durdurma/başlatma hala aktif kalabilir
  if (sliderContainerRef.value) {
    sliderContainerRef.value.addEventListener("mouseenter", stopSlideShow);
    sliderContainerRef.value.addEventListener("mouseleave", startSlideShow); // Buradaki startSlideShow handleMouseLeave ile çakışabilir, dikkat!
    // NOT: Belki de hover yerine sadece drag sırasında durdurmak daha iyi? handleDragStart/End içinde zaten yapılıyor.
    // Bu listener'ları kaldırabiliriz:
    // sliderContainerRef.value.removeEventListener("mouseenter", stopSlideShow);
    // sliderContainerRef.value.removeEventListener("mouseleave", startSlideShow);
  }
});

onUnmounted(() => {
  stopSlideShow();
  // Event listener'ları da kaldırmak iyi pratiktir (özellikle hover olanları kaldırdıysak)
});
</script>

<template>
  <section
    class="slider-container"
    ref="sliderContainerRef"
    @mousedown.prevent="handleDragStart"
    @touchstart.prevent="handleDragStart"
    @mousemove="handleDragMove"
    @touchmove="handleDragMove"
    @mouseup="handleDragEnd"
    @touchend="handleDragEnd"
    @mouseleave="handleMouseLeave"
    :class="{ dragging: isDragging }"
    style="cursor: grab"
  >
    <div class="slider">
      <div
        v-for="(slide, index) in slidesData"
        :key="index"
        class="slide"
        :class="{ 'active-slide': index === currentSlide }"
        :style="{ backgroundImage: `url(${slide.img})` }"
        draggable="false"
      >
        <div class="slide-caption">{{ slide.caption }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f0f0f0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.slider-container.dragging {
  cursor: grabbing !important;
}

.slider {
  display: flex;
  position: relative;
  aspect-ratio: 4/3;
  width: 100%;
  min-height: 250px;
  max-height: 700px;
}

.slide {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  background-color: rgba(0, 0, 0, 0.65); /* Biraz daha belirgin arka plan */
  color: #fff;
  padding: 12px 22px; /* Biraz daha fazla boşluk */
  font-size: clamp(1.2em, 3vw, 1.6em); /* Responsive font boyutu */
  border-radius: 6px;
  z-index: 3; /* Slaytların üzerinde */
  pointer-events: none; /* Başlığın sürüklemeyi engellememesi için */
}

@media (max-width: 992px) {
  .slider {
    aspect-ratio: 3 / 2;
  }
}

@media (max-width: 768px) {
  .slider {
    aspect-ratio: 4 / 3;
    min-height: 200px;
  }
  .slide-caption {
    bottom: 25px;
    left: 25px;
    padding: 10px 18px;
  }
}

@media (max-width: 600px) {
  .slider {
    aspect-ratio: 1 / 1;

    min-height: 300px;
  }

  .slide {
    background-size: cover;
  }
  .slide-caption {
    //font-size: 1.1em;
    bottom: 20px;
    left: 20px;
    padding: 8px 15px;
  }
}
</style>
