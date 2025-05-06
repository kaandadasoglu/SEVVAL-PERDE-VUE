<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

// Bu kod header'ın scroll ile küçülmesini sağlar
// isScrolled değişkeni window.scrollY > 1 olduğunda true olur
const isScrolled = ref(false);

function handleScroll() {
  // Eşiği 1 piksel olarak ayarladık (çok hassas)
  // İsterseniz tekrar 10 veya 50 gibi bir değere çekebilirsiniz.
  isScrolled.value = window.scrollY > 1;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // İlk yüklemede de kontrol et
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
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
  background-color: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  left: 0; /* sticky ve tam genişlik için */
  width: 100%; /* sticky ve tam genişlik için */
  z-index: 1000;
  transition: padding 0.3s ease, background-color 0.3s ease,
    box-shadow 0.3s ease; /* padding geçişi eklendi */
  box-shadow: none;
}

header.scrolled {
  padding: 5px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08); /* Scroll sonrası hafif gölge */
}

.container {
  width: 100%;
  max-width: 1300px; /* Maksimum genişlik */
  margin: 0 auto; /* Ortala */
  padding: 0 20px; /* Yan boşluklar */
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* Geçişin düzgün olması için */
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-img {
  display: block;
  max-height: 90px; /* Başlangıç yüksekliği */
  transition: max-height 0.3s ease-out; /* Yükseklik geçişi */
}

header.scrolled .logo-img {
  max-height: 55px; /* Küçülmüş yükseklik */
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center; /* Linkleri dikeyde ortala */
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-left: 30px; /* Menü elemanları arası boşluk */
}

nav ul li a {
  text-decoration: none;
  color: #444; /* Yazı rengi */
  font-weight: 600; /* Yazı kalınlığı */
  padding: 8px 4px; /* Tıklama alanı */
  transition: color 0.25s ease, border-bottom-color 0.25s ease;
  position: relative; /* Alt çizgi için */
  border-bottom: 2px solid transparent; /* Başlangıçta görünmez çizgi */
  letter-spacing: 0.5px;
}

nav ul li a.router-link-exact-active,
nav ul li a:hover {
  color: #a0522d; /* Vurgu rengi */
  border-bottom-color: #a0522d; /* Alt çizgi rengi */
}

@media (max-width: 768px) {
  nav ul li {
    margin-left: 15px;
  }
  nav ul li a {
    font-size: 0.95em;
  }
  .logo-img {
    max-height: 70px;
  }
  header.scrolled .logo-img {
    max-height: 45px;
  }
  header,
  header.scrolled {
    padding: 10px 0;
  }
}

@media (max-width: 600px) {
  nav ul li {
    margin-left: 10px;
  }
  nav ul li a {
    font-size: 0.9em;
    padding: 6px 2px;
  }
}
</style>
