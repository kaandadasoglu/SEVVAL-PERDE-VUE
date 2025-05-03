<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="container header-container">
      <RouterLink to="/" class="logo-link">
        <img
          src="@/assets/logo.png"
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
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Global .container'ı burada tekrar tanımlamak yerine App.vue'da veya main.css'de tanımlamak daha iyi olabilir */
/* Şimdilik burada bırakıyorum */
.container {
  width: 90%;
  max-width: 1100px;
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
  max-height: 50px;
}

nav ul {
  list-style: none;
  display: flex;
  padding: 0; /* Tarayıcı varsayılanını sıfırla */
  margin: 0; /* Tarayıcı varsayılanını sıfırla */
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

/* Aktif link için stil (router/index.js'de tanımlanan class'ı kullanıyoruz) */
nav ul li a.active, /* linkActiveClass: 'active' */
nav ul li a:hover {
  color: #8b4513;
  border-bottom-color: #8b4513;
}
/* Tam eşleşen link için (isteğe bağlı, örn sadece anasayfa için) */
nav ul li a.exact-active {
  /* Farklı bir stil verebilirsiniz */
  /* color: red; */
}
</style>
