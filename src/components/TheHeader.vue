<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 1;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container header-container">
      <RouterLink to="/" class="logo-link">
        <img
          src="@/assets/sevval_perde_logo.png"
          alt="Şevval Perde Kadıköy Logo"
          class="logo-img"
        />
      </RouterLink>
      <nav>
        <ul>
          <li><RouterLink to="/">Anasayfa</RouterLink></li>
          <li><RouterLink to="/katalog">Katalog</RouterLink></li>
          <li><RouterLink to="/iletisim">İletişim</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

header.scrolled {
  padding: 5px 0;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
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
  max-height: 100px;
  transition: max-height 0.3s ease;
}

header.scrolled .logo-img {
  max-height: 60px;
}

nav ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-left: 25px;
}

nav ul li a {
  text-decoration: none;
  color: #555;
  font-weight: bold;
  padding: 5px 0;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;
  border-bottom: 2px solid transparent;
}

nav ul li a.active,
nav ul li a:hover {
  color: #8b4513;
  border-bottom-color: #8b4513;
}
</style>
