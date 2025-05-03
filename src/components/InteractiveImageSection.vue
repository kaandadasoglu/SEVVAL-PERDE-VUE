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
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

// Tüm perde türleri için hotspot verileri (% oranıyla tanımlı, responsive'ten bağımsız)
const hotspots = ref([
  {
    id: "hs-ahsap-jaluzi",
    style: { top: "30%", left: "7%" },
    data: {
      title: "Ahşap Jaluzi",
      description:
        "Doğal ahşabın sıcaklığını ve zarafetini yaşam alanlarınıza taşıyın. Kadıköy ahşap jaluzi seçeneklerimizle mekanlarınıza özel bir dokunuş katın. Ayarlanabilir bantları sayesinde ışık kontrolü tamamen sizin elinizde!",
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
        "İstanbul Kadıköy'deki perde mağazamızda birbirinden şık fon perde modelleri sizi bekliyor. Kaliteli kumaşları ve özenli dikimiyle uzun yıllar kullanabileceğiniz fon perdelerimizle evinizin atmosferini değiştirin.",
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
        "İstanbul Kadıköy'de aradığınız en güzel tül perde modelleri burada! Modern, klasik veya country tarzı dekorasyonunuza uyum sağlayacak birbirinden şık tüllerimizle evinizi aydınlatın.",
      detailsLink: "/perde-cesitleri/tul-perde",
      image: getImageUrl("closeup_tul_perde.jpg"),
    },
  },
  {
    id: "hs-katlamali-perde",
    style: { top: "30%", left: "63%" },
    data: {
      title: "Katlamalı Perde (Roman Shade)",
      description:
        "Kumaşın yukarı doğru zarif katmanlarla toplandığı dekoratif ve şık perde modeli.",
      detailsLink: "/perde-cesitleri/katlamali-perde",
      image: getImageUrl("closeup_katlamali.jpg"),
    },
  },
  {
    id: "hs-normal-stor",
    style: { top: "50%", left: "76%" },
    data: {
      title: "Stor Perde (Roller)",
      description:
        "Pratik kullanımı ve modern görünümüyle stor perdeler, ev ve iş yerlerinize şıklık katıyor. Farklı renk, desen ve mekanizmalara sahip stor perdelerimizle güneş kontrolünü kolayca sağlayın.",
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
        "Özgün tasarımı ve kullanım kolaylığıyla plise perdeler, pencerelerinize farklı bir boyut kazandırıyor. Özellikle eğimli ve farklı şekilli pencereler için ideal olan plise perdelerimizle mekanlarınıza modern bir dokunuş katın",
      detailsLink: "/perde-cesitleri/plise-perde",
      image: getImageUrl("closeup_plise_perde.jpg"),
    },
  },
]);

// Stil hesaplama
function getHotspotStyle(style) {
  return {
    ...style,
    width: "5%",
    aspectRatio: "1",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
  };
}

function showPopup(data) {
  selectedHotspot.value = data;
  isModalVisible.value = true;
}
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
        Görsel üzerindeki farklı perde tiplerine tıklayarak bilgi alabilirsiniz.
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
        ></button>
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
.interactive-image-section {
  background-color: #fff;
  padding: 40px 0;
  text-align: center;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
}
.image-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
.main-interactive-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
}
.hotspot {
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px dashed #444;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.hotspot:hover {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
