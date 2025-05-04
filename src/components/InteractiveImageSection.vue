<script setup>
import { ref } from "vue";
import InfoPopup from "./InfoPopup.vue";

// Popup kontrolü
const isModalVisible = ref(false);
const selectedHotspot = ref(null);

// Ana görsel
import mainImageUrl from "@/assets/images/ana_gorsel.jpg";

// Yardımcı fonksiyon: yakın plan görsel yolu
const getImageUrl = (name) => {
  // Hata kontrolü ekleyelim
  try {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
  } catch (e) {
    console.error(`Resim yüklenemedi: ${name}`, e);
    return ""; // Hata durumunda boş string dön
  }
};

// Hotspot verileri
const hotspots = ref([
  {
    id: "hs-ahsap-jaluzi",
    style: { top: "30%", left: "7%" },
    data: {
      title: "Ahşap Jaluzi",
      description:
        "Doğal ahşabın sıcaklığını ve zarafetini yaşam alanlarınıza taşıyın...", // Kısaltıldı
      detailsLink: "/perde-cesitleri/ahsap-jaluzi",
      image: getImageUrl("closeup_ahsap_jaluzi.jpg"),
    },
  },
  {
    id: "hs-fon-perde",
    style: { top: "45%", left: "25%" },
    data: {
      title: "Fon Perde",
      description:
        "İstanbul Kadıköy'deki perde mağazamızda birbirinden şık fon perde modelleri...", // Kısaltıldı
      detailsLink: "/perde-cesitleri/fon-perde",
      image: getImageUrl("closeup_fon_perde.jpg"),
    },
  },
  {
    id: "hs-tul-perde",
    style: { top: "50%", left: "35%" },
    data: {
      title: "Tül Perde",
      description:
        "İstanbul Kadıköy'de aradığınız en güzel tül perde modelleri burada!...", // Kısaltıldı
      detailsLink: "/perde-cesitleri/tul-perde",
      image: getImageUrl("closeup_tul_perde.jpg"),
    },
  },
  {
    id: "hs-katlamali-perde",
    style: { top: "30%", left: "63%" },
    data: {
      title: "Katlamalı Perde", // (Roman Shade) kaldırıldı
      description:
        "Kumaşın yukarı doğru zarif katmanlarla toplandığı dekoratif ve şık perde...", // Kısaltıldı
      detailsLink: "/perde-cesitleri/katlamali-perde",
      image: getImageUrl("closeup_katlamali.jpg"),
    },
  },
  {
    id: "hs-normal-stor",
    style: { top: "50%", left: "76%" },
    data: {
      title: "Stor Perde", // (Roller) kaldırıldı
      description:
        "Pratik kullanımı ve modern görünümüyle stor perdeler, ev ve iş yerlerinize şıklık katıyor...", // Kısaltıldı
      detailsLink: "/perde-cesitleri/stor-perde",
      image: getImageUrl("closeup_normal_stor.jpg"),
    },
  },
  {
    id: "hs-plise-perde",
    style: { top: "56%", left: "91%" },
    data: {
      title: "Plise Perde",
      description:
        "Özgün tasarımı ve kullanım kolaylığıyla plise perdeler, pencerelerinize farklı bir boyut...", // Kısaltıldı
      detailsLink: "/perde-cesitleri/plise-perde",
      image: getImageUrl("closeup_plise_perde.jpg"),
    },
  },
]);

// Stil hesaplama - Tooltip'in görünmesi için overflow: 'visible' yapıldı
function getHotspotStyle(style) {
  return {
    ...style,
    width: "8%", // İstediğiniz gibi %8 kaldı
    aspectRatio: "1",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    overflow: "visible", // <<<--- DEĞİŞİKLİK: Tooltip'in görünmesi için 'hidden' -> 'visible'
  };
}

// Popup gösterme fonksiyonu
function showPopup(data) {
  selectedHotspot.value = data;
  isModalVisible.value = true;
}

// Popup gizleme fonksiyonu
function hidePopup() {
  isModalVisible.value = false;
  selectedHotspot.value = null;
}
</script>

<template>
  <section class="info-section interactive-image-section">
    <div class="container">
      <h2>Modellerimizi Keşfedin</h2>
      <p>
        Görsel üzerindeki farklı perde tiplerine dokunarak veya tıklayarak bilgi
        alabilirsiniz.
      </p>

      <div class="image-container">
        <img
          :src="mainImageUrl"
          alt="Perde Modelleri Görsel"
          class="main-interactive-image"
        />

        <button
          v-for="spot in hotspots"
          :key="spot.id"
          class="hotspot"
          :style="getHotspotStyle(spot.style)"
          @click="showPopup(spot.data)"
          aria-label="Detayları gör"
        >
          <span class="custom-tooltip" role="tooltip">{{
            spot.data.title
          }}</span>
        </button>
      </div>
    </div>

    <InfoPopup
      :visible="isModalVisible"
      :data="selectedHotspot"
      @close="hidePopup"
    />
  </section>
</template>

<style scoped>
/* --- Değişmeyen Stiller --- */
.interactive-image-section {
  background-color: #fff;
  padding: 40px 0;
  text-align: center;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
}
.image-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto 0;
}
.main-interactive-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hotspot {
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px dashed #555;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  position: absolute; /* getHotspotStyle ile ayarlanıyor */
  border-radius: 50%; /* getHotspotStyle ile ayarlanıyor */
  /* overflow: hidden; */ /* getHotspotStyle içinde visible yapıldı */
  overflow: visible; /* getHotspotStyle'dan gelen değeri tekrar yazmak gereksiz ama kalsın */
  /* İçeriği hizalamak için (gerekirse) */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hotspot:hover {
  background-color: rgba(255, 255, 255, 0.6);
  /* transform: translate(-50%, -50%) scale(1.1); */ /* Tooltip pozisyonunu etkilememesi için yorumda */
  z-index: 11; /* Hover olan üste çıksın */
}

/* --- Ripple Efekti Stilleri (DEĞİŞMEDİ) --- */
.hotspot::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 100, 200, 0.4) 10%,
    transparent 70%
  );
  opacity: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  z-index: 1; /* Tooltip'in arkasında kalması için */
}

.hotspot:hover::after {
  opacity: 1;
  transform: translate(-50%, -50%) scale(3);
  transition: transform 1s ease-out, opacity 1s ease-out; /* Süreler 1sn olarak kaldı */
}

/* --- YENİ: Özel Tooltip Stilleri --- */
.custom-tooltip {
  /* Pozisyon */
  position: absolute;
  bottom: calc(100% + 10px); /* Butonun biraz üstünde (10px boşluk) */
  left: 50%;
  transform: translateX(-50%);

  /* Görünüm */
  background-color: rgba(40, 40, 40, 0.85); /* Koyu yarı şeffaf */
  color: #fff;
  padding: 7px 12px; /* İç boşluk */
  border-radius: 5px; /* Köşe yuvarlaklığı */
  font-size: 13px; /* Yazı boyutu */
  font-weight: 500;
  white-space: nowrap; /* Tek satır */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  /* Başlangıç durumu ve Geçiş */
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.25s ease, visibility 0.25s ease; /* Hızlı geçiş */
  z-index: 20; /* En üstte görünmesi için yüksek z-index */
}

/* YENİ: Tooltip Oku */
.custom-tooltip::after {
  content: "";
  position: absolute;
  top: 100%; /* Tooltip kutusunun altı */
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px; /* Ok boyutu */
  border-style: solid;
  border-color: rgba(40, 40, 40, 0.85) transparent transparent transparent; /* Yukarıyı gösteren ok */
}

/* YENİ: Hotspot üzerine gelince Tooltip'i göster */
.hotspot:hover .custom-tooltip {
  opacity: 1;
  visibility: visible;
}

/* --- Genel Başlık ve Paragraf Stilleri (DEĞİŞMEDİ) --- */
h2 {
  font-size: 2.2em;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}
</style>
