<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const carouselContainerRef = ref(null);
const gridRef = ref(null);
const productGridWrapperRef = ref(null); // Added ref for the wrapper

let itemsPerPage = ref(3);
let currentPage = ref(0);

const totalItems = computed(() => props.products.length);
const totalPages = computed(() =>
  totalItems.value > 0 ? Math.ceil(totalItems.value / itemsPerPage.value) : 0
);

// --- Drag/Swipe State ---
const isDragging = ref(false);
const dragStartX = ref(0);
const dragInitialTransformX = ref(0);
const dragThreshold = 50; // Min pixels for a swipe to register

function calculateDimensions() {
  const screenWidth = window.innerWidth;
  let newItemsPerPage = 3;
  if (screenWidth <= 540) {
    newItemsPerPage = 1;
  } else if (screenWidth <= 900) {
    newItemsPerPage = 2;
  }
  // Ensure itemsPerPage doesn't exceed totalItems if totalItems is small
  itemsPerPage.value = Math.min(
    newItemsPerPage,
    totalItems.value > 0 ? totalItems.value : newItemsPerPage
  );

  if (currentPage.value >= totalPages.value && totalPages.value > 0) {
    currentPage.value = totalPages.value - 1;
  } else if (totalPages.value === 0) {
    currentPage.value = 0;
  }
  updateGridPosition();
  checkButtons();
}

function updateGridPosition(useTransition = true) {
  if (!gridRef.value || totalItems.value === 0) {
    if (gridRef.value) gridRef.value.style.transform = `translateX(0px)`;
    return;
  }

  gridRef.value.style.transition = useTransition
    ? "transform 0.5s ease-in-out"
    : "none";

  // Calculate the index of the first item on the current page
  const firstItemIndexOfCurrentPage = currentPage.value * itemsPerPage.value;

  if (firstItemIndexOfCurrentPage >= totalItems.value) {
    // This case should ideally be prevented by currentPage adjustments
    if (gridRef.value) gridRef.value.style.transform = `translateX(0px)`;
    return;
  }

  const targetElement = gridRef.value.children[firstItemIndexOfCurrentPage];
  let newTransformX = 0;
  if (targetElement) {
    // Calculate offset based on the grid wrapper, not the children directly if they have margins
    // For simplicity, assuming offsetLeft on the targetElement within gridRef is what we need
    newTransformX = -targetElement.offsetLeft;
  }

  gridRef.value.style.transform = `translateX(${newTransformX}px)`;
}

const isPrevDisabled = computed(() => currentPage.value === 0);
const isNextDisabled = computed(
  () => totalPages.value === 0 || currentPage.value >= totalPages.value - 1
);

function checkButtons() {
  const prevBtn =
    carouselContainerRef.value?.querySelector(".carousel-btn.prev");
  const nextBtn =
    carouselContainerRef.value?.querySelector(".carousel-btn.next");
  if (!prevBtn || !nextBtn) return;

  // Show buttons only if there's more than one page
  const show = totalPages.value > 1;
  prevBtn.style.display = show ? "flex" : "none";
  nextBtn.style.display = show ? "flex" : "none";
}

function moveToPage(pageIndex) {
  if (totalPages.value === 0) return;
  const newPageIndex = Math.max(0, Math.min(pageIndex, totalPages.value - 1));
  if (newPageIndex !== currentPage.value) {
    currentPage.value = newPageIndex;
  }
  // Always update position, even if pageIndex is the same, to ensure snap back
  updateGridPosition();
}

function nextPage() {
  if (currentPage.value < totalPages.value - 1) {
    moveToPage(currentPage.value + 1);
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    moveToPage(currentPage.value - 1);
  }
}

// --- Swipe Event Handlers ---
function getEventX(event) {
  return event.type.startsWith("touch")
    ? event.changedTouches[0].clientX
    : event.clientX;
}

function onDragStart(event) {
  if (
    totalPages.value <= 1 &&
    !(itemsPerPage.value === 1 && totalItems.value > 1)
  )
    return; // Allow drag if single item view with multiple items

  isDragging.value = true;
  dragStartX.value = getEventX(event);

  const currentTransform = window.getComputedStyle(gridRef.value).transform;
  if (currentTransform && currentTransform !== "none") {
    const matrix = new DOMMatrix(currentTransform);
    dragInitialTransformX.value = matrix.m41;
  } else {
    dragInitialTransformX.value = 0;
  }

  gridRef.value.style.transition = "none"; // Disable transition for smooth dragging

  // Prevent default for mousedown to avoid text selection/image dragging
  if (event.type === "mousedown") {
    event.preventDefault();
  }
}

function onDragMove(event) {
  if (!isDragging.value) return;

  // Prevent page scroll during horizontal swipe on touch devices
  if (event.type === "touchmove" && event.cancelable) {
    // A more sophisticated check could be to see if horizontal movement > vertical
    // For now, if dragging, we assume horizontal intent for the carousel
    // event.preventDefault(); // This might be too aggressive if vertical scroll is needed elsewhere. Test carefully.
  }

  const currentX = getEventX(event);
  const diffX = currentX - dragStartX.value;
  gridRef.value.style.transform = `translateX(${
    dragInitialTransformX.value + diffX
  }px)`;
}

function onDragEnd(event) {
  if (!isDragging.value) return;
  isDragging.value = false;

  // gridRef.value.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition (updateGridPosition will do this)

  const diffX = getEventX(event) - dragStartX.value;

  if (Math.abs(diffX) > dragThreshold) {
    if (diffX < 0) {
      // Swiped left
      nextPage();
    } else {
      // Swiped right
      prevPage();
    }
  } else {
    // Not enough swipe, snap back to current page's correct position
    updateGridPosition();
  }
}

let resizeTimer = null;
const handleResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(calculateDimensions, 250);
};

onMounted(() => {
  calculateDimensions(); // Initial calculation
  window.addEventListener("resize", handleResize);

  const el = productGridWrapperRef.value; // Attach to the wrapper
  if (el) {
    // Touch events
    el.addEventListener("touchstart", onDragStart, { passive: true }); // passive:true if not calling preventDefault in onDragStart for scroll
    el.addEventListener("touchmove", onDragMove, { passive: false }); // passive:false if calling preventDefault
    el.addEventListener("touchend", onDragEnd);
    el.addEventListener("touchcancel", onDragEnd);

    // Mouse events
    el.addEventListener("mousedown", onDragStart);
    // Attach mousemove and mouseup to window to allow dragging outside the element
    window.addEventListener("mousemove", onDragMove);
    window.addEventListener("mouseup", onDragEnd);
    // el.addEventListener('mouseleave', onDragEnd); // If mouse leaves container, end drag
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  const el = productGridWrapperRef.value;
  if (el) {
    el.removeEventListener("touchstart", onDragStart);
    el.removeEventListener("touchmove", onDragMove);
    el.removeEventListener("touchend", onDragEnd);
    el.removeEventListener("touchcancel", onDragEnd);

    el.removeEventListener("mousedown", onDragStart);
  }
  // Remove window listeners for mouse
  window.removeEventListener("mousemove", onDragMove);
  window.removeEventListener("mouseup", onDragEnd);
});

watch(
  () => props.products,
  () => {
    currentPage.value = 0;
    // Timeout to allow DOM to update if products are changing dynamically
    setTimeout(() => {
      calculateDimensions();
    }, 0);
  },
  { deep: true, immediate: true } // immediate: true for initial load if products are passed directly
);

// Watch for totalPages changes to re-evaluate currentPage and button visibility
watch(totalPages, (newTotalPages) => {
  if (currentPage.value >= newTotalPages && newTotalPages > 0) {
    currentPage.value = newTotalPages - 1;
  } else if (newTotalPages === 0) {
    currentPage.value = 0;
  }
  checkButtons();
  // updateGridPosition(); //moveToPage calls this, currentPage change will trigger necessary updates
});
</script>

<template>
  <div class="product-carousel-container" ref="carouselContainerRef">
    <button
      @click="prevPage"
      class="carousel-btn prev"
      :disabled="isPrevDisabled"
      aria-label="Önceki Ürünler"
      v-show="totalPages > 1"
    >
      &#10094;
    </button>

    <div class="product-grid-wrapper" ref="productGridWrapperRef">
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
      v-show="totalPages > 1"
    >
      &#10095;
    </button>
  </div>
</template>

<style scoped>
/* Statik CSS'den alınan Carousel stilleri */
.product-carousel-container {
  position: relative;
  width: 890px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 40px; /* Oklar için padding */
  box-sizing: border-box;
}

.product-grid-wrapper {
  overflow: hidden;
  /* Add touch-action to hint browser about scrolling intentions */
  touch-action: pan-y pinch-zoom; /* Allows vertical scroll/pinch zoom on page, while we handle horizontal pan */
  cursor: grab; /* Indicate draggable */
}
.product-grid-wrapper:active {
  /* cursor: grabbing; */ /* Often handled by JS for better control */
}

.product-grid {
  display: flex;
  flex-wrap: nowrap;
  /* transition: transform 0.5s ease-in-out; */ /* Transition is now managed by JS for drag/snap */
  transform: translateX(0);
  /* Important: Children (ProductCard) should not have margins that interfere with offsetLeft */
}

.carousel-item-override {
  flex: 0 0 auto;
  width: 260px;
  height: 430px; /* Or auto if content dictates */
  margin-right: 15px;
  box-sizing: border-box;
  user-select: none; /* Prevent text selection on items during drag */
}
.carousel-item-override img {
  /* Prevent image dragging natively */
  pointer-events: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease,
    box-shadow 0.3s ease;
  opacity: 0.7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.carousel-btn:hover:not(:disabled) {
  background-color: white;
  color: #000;
  opacity: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.carousel-btn.prev {
  left: 5px;
}
.carousel-btn.next {
  right: 5px;
}
.carousel-btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
  box-shadow: none;
  background-color: rgba(200, 200, 200, 0.7);
}

/* --- Duyarlılık --- */
@media (max-width: 900px) {
  .product-carousel-container {
    /* width: 535px; */ /* Let it be 100% and control item count */
    padding: 0 30px;
  }
  .carousel-item-override {
    width: 230px; /* This width dictates itemsPerPage logic */
  }
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5em;
  }
  /* Button positions might need adjustment if padding changes */
}
@media (max-width: 540px) {
  .product-carousel-container {
    /* width: 270px; */
    padding: 0 25px;
  }
  .carousel-item-override {
    width: 220px; /* This width dictates itemsPerPage logic */
    /* margin-right: 0; */ /* Only if itemsPerPage is 1 and it fills container */
  }
  /* Adjust margin for single item view to center it if desired */
  /* Example: if itemsPerPage.value === 1, .carousel-item-override { margin: 0 auto; } */

  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1.3em;
  }
}
</style>
