<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  visible: Boolean,
  data: Object,
});

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<template>
  <div v-if="visible" class="popup-overlay" @click.self="closeModal">
    <div class="popup-content">
      <button @click="closeModal" class="close-button" aria-label="Kapat">
        &times;
      </button>

      <template v-if="data">
        <h2>{{ data.title || "Bilgi" }}</h2>

        <img
          v-if="data.image"
          :src="data.image"
          :alt="data.title || 'Detay Görseli'"
          class="popup-image"
        />

        <p>{{ data.description || "Açıklama bulunamadı." }}</p>

        <RouterLink
          v-if="data.detailsLink"
          :to="data.detailsLink"
          class="cta-button"
          @click="closeModal"
        >
          Devamını Oku
        </RouterLink>
      </template>
      <template v-else>
        <p>İçerik yüklenemedi.</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 20px;
}

.popup-content {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  position: relative;
  text-align: center;
  max-height: 90vh; /* Maksimum yükseklik */
  overflow-y: auto; /* İçerik sığmazsa kaydırma çubuğu */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2em;
  color: #aaa;
  cursor: pointer;
  line-height: 1;
  padding: 0;
}
.close-button:hover {
  color: #333;
}

.popup-content h2 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #8b4513;
  font-size: 1.6em;
}

/* YENİ: Popup içindeki görsel için stil */
.popup-image {
  max-width: 100%; /* Konteyner genişliğini aşmasın */
  height: auto; /* Oranı korusun */
  max-height: 250px; /* Maksimum yükseklik (isteğe bağlı) */
  object-fit: contain; /* Kırpmadan sığdır */
  display: block; /* Ortalamak ve alt boşluk için */
  margin: 0 auto 20px auto; /* Üst/Alt boşluk ve ortalama */
  border-radius: 5px; /* Hafif köşe */
  border: 1px solid #eee; /* İnce çerçeve */
}

.popup-content p {
  margin-bottom: 25px;
  color: #555;
  font-size: 1em;
  line-height: 1.6;
  text-align: left; /* Açıklama sola hizalı olabilir */
}

.popup-content .cta-button {
  display: inline-block;
  /* margin-top: 10px; */ /* P elementi zaten alt boşluk bırakıyor */
}

/* Mobil için popup içeriği */
@media (max-width: 600px) {
  .popup-content {
    padding: 25px 20px;
  }
  .popup-content h2 {
    font-size: 1.4em;
  }
  .popup-image {
    max-height: 200px;
  }
  .popup-content p {
    font-size: 0.95em;
  }
}
</style>
