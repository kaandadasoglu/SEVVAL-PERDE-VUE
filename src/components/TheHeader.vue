<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const isHeaderVisible = ref(true);
const lastScrollY = ref(0);
const headerHideThreshold = 70; // Header'ın gizlenmeye başlaması için scroll eşiği (header yüksekliğine yakın bir değer)
let ticking = false; // requestAnimationFrame için bayrak

function handleActualScroll() {
  const currentScrollY = window.scrollY;

  // En tepedeysek (veya çok az scroll edilmişse) her zaman göster
  if (currentScrollY <= 10) {
    if (!isHeaderVisible.value) isHeaderVisible.value = true;
  }
  // Belirli bir eşiği geçtikten sonra yön kontrolü yap
  else if (currentScrollY > headerHideThreshold) {
    if (currentScrollY < lastScrollY.value) {
      // Yukarı scroll: Header'ı göster
      if (!isHeaderVisible.value) isHeaderVisible.value = true;
    } else if (currentScrollY > lastScrollY.value) {
      // Aşağı scroll (ve son scroll pozisyonundan belirgin bir fark varsa): Header'ı gizle
      // Hızlı yukarı-aşağı jitter'ı engellemek için küçük bir fark eklenebilir (opsiyonel)
      // if (currentScrollY - lastScrollY.value > 5) {
      if (isHeaderVisible.value) isHeaderVisible.value = false;
      // }
    }
  }
  // Eşik değeri altında ama 10px'den fazla scroll edilmişse görünür tut
  else {
    if (!isHeaderVisible.value) isHeaderVisible.value = true;
  }

  lastScrollY.value = Math.max(0, currentScrollY);
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleActualScroll();
      ticking = false; // İşlem bitti, bir sonraki frame için hazır
    });
    ticking = true; // İşlem için frame istendi
  }
}

onMounted(() => {
  lastScrollY.value = window.scrollY;
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header :class="{ 'header--hidden': !isHeaderVisible }">
    <div class="container header-container">
      <RouterLink to="/" class="logo-link" aria-label="Anasayfa">
        <img
          src="@/assets/sevval_perde_logo.png"
          alt="Şevval Perde Kadıköy Logo"
          class="logo-img"
        />
      </RouterLink>
      <nav aria-label="Ana menü">
        <ul>
          <li><RouterLink to="/">Anasayfa</RouterLink></li>
          <li><RouterLink to="/katalog">Katalog</RouterLink></li>
          <li><RouterLink to="/hakkimizda">Hakkımızda</RouterLink></li>
          <li><RouterLink to="/iletisim">İletişim</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: rgba(255, 255, 255, 0.98);
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transform: translateY(0);
  /* cubic-bezier(0.25, 0.1, 0.25, 1) daha yaygın bir ease */
  transition: transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform; /* Tarayıcıya transform'un değişeceğini bildirir */
}

/* Header'ı gizlemek için kullanılacak sınıf */
header.header--hidden {
  transform: translateY(-100%); /* Header yüksekliği kadar yukarı kaydır */
  box-shadow: none;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-img {
  display: block;
  max-height: 60px; /* Sabit logo yüksekliği */
  transition: filter 0.3s ease; /* Hover için (opsiyonel) */
}
/* Logo üzerine gelince hafif bir efekt (opsiyonel)
.logo-link:hover .logo-img {
  filter: brightness(1.1);
}
*/

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  text-decoration: none;
  color: #444;
  font-weight: 600;
  padding: 8px 4px;
  transition: color 0.25s ease, border-bottom-color 0.25s ease;
  position: relative;
  border-bottom: 2px solid transparent;
  letter-spacing: 0.5px;
}

nav ul li a.router-link-exact-active,
nav ul li a:hover {
  color: #a0522d;
  border-bottom-color: #a0522d;
}

@media (max-width: 768px) {
  nav ul li {
    margin-left: 15px;
  }
  nav ul li a {
    font-size: 0.95em;
  }
  .logo-img {
    max-height: 50px;
  }
  header {
    padding: 10px 0;
  }
  /* headerHideThreshold mobil için farklı ayarlanabilir (JS içinde) */
}
</style>
