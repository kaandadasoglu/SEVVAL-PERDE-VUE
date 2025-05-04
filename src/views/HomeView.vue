<script setup>
import HomePageSlider from "@/components/HomePageSlider.vue";
import InteractiveImageSection from "@/components/InteractiveImageSection.vue"; // <<<--- YENİ IMPORT
import { RouterLink } from "vue-router";
import { useHead } from "@vueuse/head";

// Kategori vurguları için statik resimleri import et
// Gerçek dosya yollarınızın bunlarla eşleştiğinden emin olun (src/assets/images/ altında)
import katPerdeImg from "@/assets/images/kat-perde.jpg";
import katJaluziImg from "@/assets/images/kat-jaluzi.jpg";
import katStorImg from "@/assets/images/kat-stor.jpg";
import katPliseImg from "@/assets/images/kat-plise.jpg";

// Sayfa başlığı ve açıklamasını tanımla
useHead({
  title: "Şevval Perde - Kadıköy Perde, Jaluzi, Stor Perde Modelleri",
  meta: [
    {
      name: "description",
      content:
        "İstanbul Kadıköy Şevval Perde: Evinize ve iş yerinize özel tül, fon, jaluzi, stor, zebra perde modelleri. Kaliteli ürünler, uzman danışmanlık ve montaj hizmeti.",
    },
  ],
});
</script>

<template>
  <div>
    <InteractiveImageSection />

    <HomePageSlider />

    <section class="info-section container welcome-section">
      <h1>Kadıköy'ün Perde Uzmanı: Şevval Perde</h1>
      <p>
        İstanbul Kadıköy'de bulunan Şevval Perde olarak, yılların tecrübesiyle
        yaşam alanlarınıza estetik ve fonksiyonellik katıyoruz. Eviniz veya iş
        yeriniz için en uygun perde, jaluzi ve stor perde çözümlerini geniş ürün
        yelpazemizde bulabilirsiniz. Kaliteli malzeme, özenli işçilik ve müşteri
        memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
      </p>
      <div class="cta-buttons">
        <RouterLink to="/katalog" class="cta-button"
          >Ürünleri Keşfet</RouterLink
        >
        <RouterLink to="/iletisim" class="cta-button secondary"
          >Bize Ulaşın</RouterLink
        >
      </div>
    </section>

    <section class="info-section category-highlights">
      <div class="container">
        <h2>Perde, Jaluzi ve Stor Çözümlerimiz</h2>
        <div class="highlight-grid">
          <div class="highlight-item">
            <img
              :src="katPerdeImg"
              alt="Kadıköy Tül ve Fon Perde Modelleri"
              class="highlight-img"
            />
            <h3>Klasikten Şaşmayanlara...</h3>
            <p>
              Salonlarınıza şıklık katacak
              <RouterLink
                :to="{ name: 'category', params: { slug: 'perdeler' } }"
                >fon perdeler</RouterLink
              >, ışığı yumuşatan
              <RouterLink
                :to="{ name: 'category', params: { slug: 'perdeler' } }"
                >tül perdeler</RouterLink
              >, modern keten veya lüks kadife seçenekleri... Farklı renk, desen
              ve kumaş alternatifleriyle mekanlarınıza özel çözümler sunuyoruz.
              İstanbul'da kaliteli perde arayanlar için doğru adres Şevval
              Perde.
            </p>
          </div>

          <div class="highlight-item">
            <img
              :src="katJaluziImg"
              alt="Kadıköy Ahşap ve Metal Jaluzi Perdeler"
              class="highlight-img"
            />
            <h3>Jaluzi: Hayatına Lüksü Katmayı Sevenlere</h3>
            <p>
              Işık kontrolünü parmaklarınızın ucuna getiren
              <RouterLink
                :to="{ name: 'category', params: { slug: 'jaluziler' } }"
                >jaluzi perdeler</RouterLink
              >, ofisler ve modern evler için idealdir. Sıcak bir dokunuş için
              ahşap jaluziler, dayanıklılık için alüminyum veya banyo/mutfak
              gibi nemli alanlar için PVC jaluzi seçeneklerimizi Kadıköy
              mağazamızda inceleyebilirsiniz.
            </p>
          </div>

          <div class="highlight-item">
            <img
              :src="katStorImg"
              alt="Kadıköy Stor Perde Çeşitleri"
              class="highlight-img"
            />
            <h3>
              Stor Perdeler: Modern ve Pratik Çözüm Arayışında Olanlara...
            </h3>
            <p>
              Tam karartma sağlayan blackout storlardan, güneşi filtreleyen
              screen storlara, hem tül hem güneşlik işlevi gören
              <RouterLink
                :to="{ name: 'category', params: { slug: 'storlar' } }"
                >stor perdelerden</RouterLink
              >, odanıza renk katacak desenli storlara kadar geniş bir yelpaze
              sunuyoruz. Kullanım kolaylığı ve modern görünümü bir arada.
            </p>
          </div>

          <div class="highlight-item">
            <img
              :src="katPliseImg"
              alt="Kadıköy Plise Perdeler"
              class="highlight-img"
            />
            <h3>Plise Perde: Sadelikten Yana Olanlara</h3>
            <p>
              Modern ve minimalist yaşam alanlarının vazgeçilmezi
              <RouterLink
                :to="{ name: 'category', params: { slug: 'pliseler' } }"
                >plise perdeler</RouterLink
              >, pratik kullanımı ve şık görünümü bir arada sunar. Hafif yapısı,
              kolay açılıp kapanma mekanizması ve farklı katlama seçenekleriyle
              ışığı dilediğiniz gibi kontrol etmenizi sağlar. İster güneşli bir
              günde ışığı nazikçe filtreleyin, ister tamamen karartın.
              İstanbul'da fonksiyonel ve estetik plise perde çözümleri için
              Şevval Perde'nin geniş ürün yelpazesini keşfedin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="info-section why-us-section">
      <div class="container">
        <h2>Neden Şevval Perde?</h2>
        <ul>
          <li>
            <strong>Geniş Ürün Yelpazesi:</strong> Her zevke ve ihtiyaca uygun
            yüzlerce perde, jaluzi ve stor modeli.
          </li>
          <li>
            <strong>Kaliteli Malzemeler:</strong> Uzun ömürlü ve dayanıklı,
            seçkin markaların ürünleri.
          </li>
          <li>
            <strong>Uzman Danışmanlık:</strong> Mekanınıza en uygun çözümü
            bulmanız için ücretsiz keşif ve danışmanlık.
          </li>
          <li>
            <strong>Profesyonel Montaj:</strong> Deneyimli ekibimizle hızlı ve
            kusursuz montaj hizmeti.
          </li>
          <li>
            <strong>Müşteri Memnuniyeti:</strong> Önceliğimiz her zaman sizin
            memnuniyetinizdir.
          </li>
          <li>
            <strong>Konum Avantajı:</strong> İstanbul Kadıköy'deki merkezi
            konumumuzla kolay ulaşım.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
  color: #8b4513;
  margin-bottom: 20px;
  text-align: center;
}
</style>
