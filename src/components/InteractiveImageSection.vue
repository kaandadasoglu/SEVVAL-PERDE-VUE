<script setup>
import { ref } from "vue";
import InfoPopup from "./InfoPopup.vue"; // Popup bileşenini import ediyoruz

// Popup görünürlüğünü ve seçili hotspot verisini tutan reaktif değişkenler
const isModalVisible = ref(false);
const selectedHotspot = ref(null);

// Ana görselin yolu (assets klasöründen)
import mainImageUrl from "@/assets/images/ana_gorsel.jpg";

// Yardımcı fonksiyon: Hotspot'lara ait yakın plan görsellerin yollarını dinamik olarak oluşturur
// ÖNEMLİ: Resimlerinizin bulunduğu klasöre göre ('../assets/images/') yolunu kontrol edin.
const getImageUrl = (name) => {
  try {
    // Dinamik import URL'si kullanarak resim yolunu çözer
    return new URL(`../assets/images/${name}`, import.meta.url).href;
  } catch (e) {
    console.error(`Resim yüklenemedi: ${name}`, e);
    // Hata durumunda veya resim bulunamazsa varsayılan bir görsel veya boş string dönebilir
    return ""; // Veya '/path/to/placeholder.jpg';
  }
};

// İnteraktif noktaların (hotspot) verilerini içeren dizi
const hotspots = ref([
  {
    id: "hs-ahsap-jaluzi", // Benzersiz ID
    style: { top: "30%", left: "7%" }, // CSS pozisyonu (yüzde olarak)
    data: {
      // Popup ve tooltip için kullanılacak veriler
      title: "Ahşap Jaluzi", // Tooltip ve popup başlığı
      description:
        "Doğal ahşabın sıcaklığını ve zarafetini yaşam alanlarınıza taşıyın. Kadıköy ahşap jaluzi seçeneklerimizle mekanlarınıza özel bir dokunuş katın. Ayarlanabilir bantları sayesinde ışık kontrolü tamamen sizin elinizde!", // Popup açıklaması
      detailsLink: "/perde-cesitleri/ahsap-jaluzi", // Detay sayfasına link (varsa)
      image: getImageUrl("closeup_ahsap_jaluzi.jpg"), // Popup içindeki yakın plan görsel
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
      title: "Katlamalı Perde", // Başlık sadeleştirildi
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
      title: "Stor Perde", // Başlık sadeleştirildi
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

// Hotspot elementleri için dinamik stil oluşturan fonksiyon
function getHotspotStyle(style) {
  return {
    ...style, // Gelen top ve left değerlerini koru
    width: "8%", // Hotspot genişliği (isteğe bağlı olarak ayarlanabilir)
    aspectRatio: "1 / 1", // Genişlik ve yüksekliği eşit tutar (kare veya daire için)
    position: "absolute", // Mutlak pozisyonlama
    transform: "translate(-50%, -50%)", // Merkeze hizalama
    borderRadius: "50%", // Dairesel görünüm
    overflow: "visible", // Tooltip'in buton dışına taşabilmesi için gerekli
  };
}

// Hotspot'a tıklandığında popup'ı gösteren fonksiyon
function showPopup(data) {
  selectedHotspot.value = data; // Tıklanan hotspot'un verisini sakla
  isModalVisible.value = true; // Popup'ı görünür yap
}

// Popup kapatıldığında çağrılan fonksiyon
function hidePopup() {
  isModalVisible.value = false; // Popup'ı gizle
  selectedHotspot.value = null; // Seçili veriyi temizle
}
</script>

<template>
  <section class="info-section interactive-image-section">
    <div class="container">
      <h2>Modellerimizi Keşfedin</h2>
      <p>
        Görsel üzerindeki farklı perde tiplerine dokunarak bilgi alabilirsiniz.
      </p>

      <div class="image-container">
        <img
          :src="mainImageUrl"
          alt="Şevval Perde Modelleri İnteraktif Görsel"
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

          <span class="ripple-effect" aria-hidden="true"></span>
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
/* Ana bölüm stilleri */
.interactive-image-section {
  background-color: #f8f8f8; /* Hafif gri arka plan */
  padding: 50px 0;
  text-align: center;
  overflow: hidden; /* Yanlara taşan efektleri engellemek için */
}

/* Konteyner stilleri */
.container {
  max-width: 1100px; /* Biraz daha geniş konteyner */
  margin: 0 auto;
  padding: 0 20px; /* Yan boşluklar */
}

/* Görsel konteyneri */
.image-container {
  position: relative; /* İçindeki absolut pozisyonlu elemanlar için */
  width: 100%;
  max-width: 1000px; /* Ana görselin maksimum genişliği */
  margin: 30px auto 0; /* Üst boşluk */
  user-select: none; /* Kullanıcının görseli seçmesini engelle */
  -webkit-user-drag: none; /* Sürüklemeyi engelle */
}

/* Ana görsel */
.main-interactive-image {
  width: 100%;
  height: auto; /* Oranı koru */
  display: block; /* Alt boşluğu kaldır */
  border-radius: 10px; /* Daha yuvarlak köşeler */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12); /* Daha belirgin gölge */
}

/* Hotspot Buton Stilleri */
.hotspot {
  /* Görünüm */
  background-color: rgba(255, 255, 255, 0.25); /* Daha şeffaf başlangıç */
  border: 2px solid rgba(255, 255, 255, 0.8); /* Beyaz kenarlık */
  backdrop-filter: blur(
    3px
  ); /* Arka plana hafif blur (destekleyen tarayıcılarda) */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  /* Pozisyonlama ve Davranış */
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.35s ease, transform 0.25s ease,
    box-shadow 0.3s ease;
  position: absolute; /* getHotspotStyle ile ayarlanıyor */
  border-radius: 50%; /* getHotspotStyle ile ayarlanıyor */
  overflow: visible; /* Tooltip'in dışarı taşabilmesi için */

  /* İçerik Hizalama (ripple için) */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0; /* Butonun iç boşluğunu sıfırla */
}

/* Hotspot Hover Durumu */
.hotspot:hover {
  background-color: rgba(255, 255, 255, 0.5); /* Hover'da daha belirgin */
  transform: translate(-50%, -50%) scale(1.15); /* Daha belirgin büyüme */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 11; /* Diğerlerinin üzerine çıkar */
}

/* --- Özel Tooltip Stilleri --- */
.custom-tooltip {
  /* Pozisyon */
  position: absolute;
  bottom: calc(100% + 12px); /* Butonun 12px yukarısında */
  left: 50%;
  transform: translateX(-50%);

  /* Görünüm */
  background-color: rgba(35, 35, 35, 0.9); /* Hafif şeffaf koyu arka plan */
  color: #fff;
  padding: 8px 15px; /* İç boşluk */
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  /* Başlangıç durumu ve Geçiş */
  opacity: 0;
  visibility: hidden;
  pointer-events: none; /* Tıklanamaz */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 20; /* Ripple'ın ve diğer elemanların üzerinde */
}

/* Tooltip Oku (::after pseudo-elementi ile) */
.custom-tooltip::after {
  content: "";
  position: absolute;
  top: 100%; /* Tooltip kutusunun hemen altında */
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  /* Yukarıyı gösteren üçgen ok (arka plan rengiyle aynı) */
  border-color: rgba(35, 35, 35, 0.9) transparent transparent transparent;
}

/* Hotspot üzerine gelince Tooltip'i göster */
.hotspot:hover .custom-tooltip {
  opacity: 1;
  visibility: visible;
}

/* --- Su Damlası (Ripple) Efekti Stilleri --- */
.ripple-effect {
  /* Pozisyon ve Boyut */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Görünüm ve Başlangıç */
  border-radius: 50%; /* Dairesel */
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.6) 10%,
    transparent 70%
  ); /* Beyazımsı efekt */
  opacity: 0;
  transform: scale(0);
  pointer-events: none; /* Tıklamayı engellememeli */
  z-index: 1; /* Buton içeriğinin arkasında ama buton arka planının önünde */
}

/* Hotspot üzerine gelince Ripple efektini çalıştır */
.hotspot:hover .ripple-effect {
  opacity: 1;
  transform: scale(3.5); /* Biraz daha büyük dalga */
  /* Geçiş ile animasyon */
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.8s ease-out;
}

/* Genel Başlık ve Paragraf Stilleri */
h2 {
  font-size: clamp(1.8rem, 4vw, 2.4rem); /* Duyarlı font boyutu */
  color: #2c3e50; /* Koyu mavi-gri */
  margin-bottom: 15px;
  font-weight: 600;
}

p {
  font-size: clamp(1rem, 2.5vw, 1.15rem); /* Duyarlı font boyutu */
  color: #555; /* Koyu gri */
  margin-bottom: 25px;
  line-height: 1.65;
  max-width: 700px; /* Paragrafın çok genişlemesini önle */
  margin-left: auto;
  margin-right: auto;
}
</style>
