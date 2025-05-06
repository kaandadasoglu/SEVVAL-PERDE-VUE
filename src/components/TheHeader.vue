<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

// Header'ın scroll ile gizlenmesi/görünmesi için değişkenler
const isHeaderVisible = ref(true);
const lastScrollY = ref(0);
const headerHideThreshold = 70;
let ticking = false;

// YENİ: Mobil menü için durum değişkeni
const isMobileMenuOpen = ref(false);

// YENİ: Mobil menüyü açıp kapatan fonksiyon
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

// Scroll fonksiyonları (öncekiyle aynı)
function handleActualScroll() {
  const currentScrollY = window.scrollY;
  if (currentScrollY <= 10) {
    if (!isHeaderVisible.value) isHeaderVisible.value = true;
  } else if (currentScrollY > headerHideThreshold) {
    if (currentScrollY < lastScrollY.value) {
      if (!isHeaderVisible.value) isHeaderVisible.value = true;
    } else if (currentScrollY > lastScrollY.value) {
      if (isHeaderVisible.value) isHeaderVisible.value = false;
    }
  } else {
    if (!isHeaderVisible.value) isHeaderVisible.value = true;
  }
  lastScrollY.value = Math.max(0, currentScrollY);
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleActualScroll();
      ticking = false;
    });
    ticking = true;
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
  <header
    :class="{
      'header--hidden': !isHeaderVisible,
      'mobile-menu--open': isMobileMenuOpen,
    }"
  >
    <div class="container header-container">
      <RouterLink to="/" class="logo-link" aria-label="Anasayfa">
        <img
          src="@/assets/sevval_perde_logo.png"
          alt="Şevval Perde Kadıköy Logo"
          class="logo-img"
        />
      </RouterLink>

      <button
        class="hamburger-menu"
        @click="toggleMobileMenu"
        aria-label="Menüyü aç/kapat"
        aria-expanded="isMobileMenuOpen"
      >
        <span class="hamburger-menu__line"></span>
        <span class="hamburger-menu__line"></span>
        <span class="hamburger-menu__line"></span>
      </button>

      <nav aria-label="Ana menü" :class="{ 'nav--open': isMobileMenuOpen }">
        <ul>
          <li>
            <RouterLink to="/" @click="isMobileMenuOpen = false"
              >Anasayfa</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/katalog" @click="isMobileMenuOpen = false"
              >Katalog</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/hakkimizda" @click="isMobileMenuOpen = false"
              >Hakkımızda</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/iletisim" @click="isMobileMenuOpen = false"
              >İletişim</RouterLink
            >
          </li>
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
  transition: transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform;
}

header.header--hidden {
  transform: translateY(-100%);
  box-shadow: none;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin-left: 5px;
  padding: 0 5px;
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
  z-index: 10; /* Hamburger menüden üstte kalsın */
}

.logo-img {
  display: block;
  max-height: 80px;
  transition: filter 0.3s ease;
}

nav {
}
nav ul {
  list-style: none;
  display: flex; /* Masaüstünde yan yana */
  align-items: center;
  padding: 0;
  margin: 0;
}
nav ul li {
  margin-left: 30px;
}
nav ul li:first-child {
  margin-left: 0;
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

.hamburger-menu {
  display: none; /* Varsayılan olarak gizli (sadece mobilde görünecek) */
  flex-direction: column;
  justify-content: space-around;
  width: 30px; /* Boyutları ayarlayın */
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10; /* Navigasyon menüsünden üstte olmalı */
  margin-left: auto; /* Logodan sonra sağa yasla */
}
.hamburger-menu__line {
  display: block;
  width: 100%;
  height: 3px; /* Çizgi kalınlığı */
  background-color: #333; /* Çizgi rengi */
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}
/* Hamburger animasyonu (açıkken X olması için - opsiyonel) */
header.mobile-menu--open .hamburger-menu__line:nth-child(1) {
  transform: translateY(8px) rotate(45deg); /* 8px = (height - line_height)/2 + line_height/2 */
}
header.mobile-menu--open .hamburger-menu__line:nth-child(2) {
  opacity: 0;
}
header.mobile-menu--open .hamburger-menu__line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobil Görünüm (@media query) */
@media (max-width: 768px) {
  .logo-img {
    max-height: 50px;
  }
  header {
    padding: 10px 0;
  }

  nav ul {
    display: none; /* Varsayılan olarak gizli */
    /* Mobil menü açıldığında gösterilecek */
    position: absolute; /* Header'a göre pozisyonlanacak */
    top: 100%; /* Header'ın hemen altında */
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.98); /* Header ile aynı arka plan */
    flex-direction: column; /* Linkleri alt alta sırala */
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #eee; /* Header alt çizgisiyle uyumlu */
  }

  /* Navigasyon açıkken listeyi göster */
  nav.nav--open ul {
    display: flex;
  }

  nav ul li {
    margin-left: 0;
    width: 100%;
    text-align: center; /* Linkleri ortala */
  }
  nav ul li a {
    display: block; /* Tam genişlik kaplasın */
    padding: 15px 20px; /* Daha fazla tıklama alanı */
    font-size: 1em; /* Mobil için font boyutu */
    border-bottom: 1px solid #f0f0f0; /* Linkler arası ayırıcı */
  }
  nav ul li:last-child a {
    border-bottom: none; /* Son linkin alt çizgisini kaldır */
  }
  nav ul li a.router-link-exact-active,
  nav ul li a:hover {
    border-bottom-color: transparent; /* Masaüstü alt çizgisini kaldır */
    background-color: rgba(160, 82, 45, 0.1); /* Hafif vurgu rengi */
  }

  .hamburger-menu {
    display: flex;
    margin-right: 5px;
  }
}
</style>
