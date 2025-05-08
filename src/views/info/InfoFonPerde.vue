<script setup>
import { useHead } from "@vueuse/head";
import closeupImage from "@/assets/images/closeup_fon_perde.png";
import { RouterLink, useRoute } from "vue-router"; // useRoute eklendi

const route = useRoute();
const pageTitleForBreadcrumb = "Fon Perdeler";

useHead(() => {
  const baseUrl = "https://www.sevvalperde.com";
  const currentPath = route.path;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: baseUrl + "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageTitleForBreadcrumb,
      item: baseUrl + currentPath,
    },
  ];

  return {
    title: "Fon Perdeler: Modelleri ve Dekorasyondaki Yeri | Şevval Perde",
    meta: [
      {
        name: "description",
        content:
          "Kadıköy Şevval Perde'de salon, yatak odası için şık fon perde modelleri. Keten, kadife, pamuklu kumaş seçenekleri ve dekorasyon ipuçları.",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: baseUrl + currentPath, // Bu sayfanın tam URL'si
      },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems,
        }),
      },
    ],
  };
});
</script>

<template>
  <div class="container page-container info-page">
    <h1>Fon Perdeler: Dekorasyonunuzun Şık ve Vazgeçilmez Tamamlayıcısı</h1>

    <div class="info-content">
      <div class="info-image">
        <img :src="closeupImage" alt="Fon Perde Detay Görseli" />
      </div>
      <div class="info-text">
        <p>
          Ev dekorasyonunda pencere giydirme sanatının önemli bir parçası olan
          fon perde, pencerelerin her iki yanına zarifçe asılarak mekanın genel
          estetiğini tamamlayan ve görsel bir zenginlik katan dekoratif
          unsurlardır. Fon perde modelleri, sadece mekanın ambiyansını
          güçlendirmekle kalmaz, aynı zamanda ihtiyaç duyulduğunda kapatılarak
          ışığı engelleme ve mahremiyet sağlama gibi fonksiyonel görevleri de
          üstlenir. Özellikle tül fon perde kombinasyonları, pencerelerde
          katmanlı ve sofistike bir görünüm oluşturarak yaşam alanlarına
          derinlik ve zarafet katar. Eğer siz de evinizin veya ofisinizin
          dekorasyonuna son bir dokunuş yapmak ve mekanlarınıza şıklık katmak
          istiyorsanız, fon perde seçeneklerini detaylı bir şekilde incelemeniz
          önemlidir. İstanbul ve özellikle Kadıköy bölgesinde aradığınız en şık
          ve kaliteli fon perde seçenekleri için Şevval Perde mağazamızı ziyaret
          edebilirsiniz.
        </p>
        <h2>Fon Perde Nedir? Dekoratif Zarafet ve Fonksiyonellik Bir Arada</h2>
        <p>
          Temel olarak pencerenin yanlarında dekoratif amaçlı kullanılan fon
          perde, genellikle tül perdelerle birlikte kombinlenerek kullanılır.
          Ancak tek başına da kullanılarak mekanın atmosferini önemli ölçüde
          değiştirebilir. Dekoratif perde olarak öne çıkan fon perdeler, farklı
          kumaş türleri, renkleri, desenleri ve montaj şekilleriyle her tarza ve
          zevke hitap eden geniş bir yelpazeye sahiptir. Kaliteli bir fon perde
          seçimi, mekanın görsel bütünlüğünü sağlarken, doğru kumaş ve kalınlık
          seçimiyle ışık kontrolü ve mahremiyet ihtiyaçlarınıza da cevap
          verebilir. Bu nedenle, fon perde seçimi yaparken hem estetik kaygıları
          hem de fonksiyonel gereksinimleri göz önünde bulundurmak önemlidir.
        </p>
        <h2>
          Fon Perde Seçiminin Püf Noktaları: Mekanınıza En Uygun Fon Perdeyi
          Bulun
        </h2>
        <ul>
          <li>
            <h3>Kumaş Seçimi: Tarzınızı ve Duruşunuzu Yansıtın</h3>
            <p>
              Fon perde kumaşları, mekanın tarzını ve perdenin dökümünü önemli
              ölçüde etkiler. Kadife fon perde, ağır ve lüks bir görünüm
              sunarken, keten fon perde daha doğal, rahat ve salaş bir hava
              yaratır. Pamuklu fon perde seçenekleri genellikle daha hafif ve
              kolay bakımlıdır. İpek fon perde, zarif ve parlak bir dokuya
              sahipken, polyester fon perde daha dayanıklı ve kolay
              temizlenebilir bir alternatiftir. Kumaş seçimi yaparken
              mekanınızın genel tarzını ve istediğiniz etkiyi göz önünde
              bulundurun.
            </p>
          </li>
          <li>
            <h3>Renk ve Desen Uyumu: Mekanınızla Bütünleşen Seçenekler</h3>
            <p>
              Fon perde renkleri ve desenleri, duvar rengi, mobilyalar ve diğer
              tekstil ürünleriyle uyumlu seçilmelidir. Odaya hareket katmak için
              desenli fon perde modelleri tercih edilebilirken, daha sakin ve
              dingin bir görünüm için düz renkler idealdir. Küçük mekanlarda
              açık renkler daha ferah bir etki yaratırken, büyük mekanlarda daha
              cesur ve koyu renkler kullanılabilir.
            </p>
          </li>
          <li>
            <h3>Işık Geçirgenliği: İhtiyacınıza Uygun Aydınlatma Kontrolü</h3>
            <p>
              Fon perde kumaşının kalınlığı ve dokuması, ışık geçirgenliğini
              belirler. Daha kalın ve tok kumaşlar (blackout özellikli fon perde
              seçenekleri) ışığı daha iyi engellerken, ince ve hafif kumaşlar
              daha dekoratif bir görünüm sunar ve gün ışığını tamamen kesmez.
              Yatak odaları gibi ışığın tamamen engellenmesi istenen mekanlarda
              blackout fon perde modelleri tercih edilebilir.
            </p>
          </li>
          <li>
            <h3>Montaj Şekli ve Pile Sıklığı: Görünümü Tamamlayan Detaylar</h3>
            <p>
              Fon perdeler, kornişe veya rustik boruya farklı şekillerde monte
              edilebilir. Seçilen montaj şekli, perdenin dökümünü ve genel
              görünümünü etkiler. Pile sıklığı (seyrek pile, sık pile) da
              perdenin dolgunluğunu ve duruşunu belirleyen önemli bir faktördür.
              Mekanınızın tarzına ve pencerenizin yapısına uygun bir montaj
              şekli ve pile sıklığı seçerek istediğiniz görünümü elde
              edebilirsiniz.
            </p>
          </li>
        </ul>
        <h2>
          Fon Perdeler Nerelerde Kullanılır? Evin ve Ofisin Her Köşesinde Şıklık
        </h2>
        <p>
          Fon perdeler, evin ve ofisin birçok farklı alanında estetik ve
          fonksiyonel bir tamamlayıcı olarak kullanılır:
        </p>
        <ul>
          <li>
            <h3>Salon ve Oturma Odalarında Estetik ve Katmanlı Görünüm</h3>
            <p>
              Fon perdeler, en sık salon ve oturma odalarında tercih edilir. Tül
              fon perde kombinasyonları, bu mekanlara zengin, katmanlı ve
              sofistike bir görünüm kazandırır. Misafirlerinizi ağırladığınız ve
              ailenizle vakit geçirdiğiniz bu alanlarda, fon perde seçimi
              mekanın genel atmosferini önemli ölçüde etkiler.
            </p>
          </li>
          <li>
            <h3>Yatak Odalarında Dekoratif Zenginlik ve Işık Kontrolü</h3>
            <p>
              Yatak odalarında fon perdeler, hem dekoratif bir unsur olarak
              kullanılır hem de ışığı engelleme özelliği sayesinde daha karanlık
              ve dinlendirici bir ortam yaratmaya yardımcı olur. Özellikle
              blackout kumaşlardan yapılan fon perde modelleri, sabah güneşinin
              rahatsız edici etkisini azaltarak daha konforlu bir uyku deneyimi
              sunar.
            </p>
          </li>
          <li>
            <h3>Ofis ve Ticari Mekanlarda Profesyonel ve Şık Dokunuşlar</h3>
            <p>
              Doğru kumaş ve model seçimiyle fon perdeler, ofisler ve diğer
              ticari mekanlara da şıklık ve profesyonel bir hava katabilir.
              Özellikle düz renkli ve sade tasarımlı fon perde seçenekleri, iş
              ortamlarında düzenli ve şık bir görünüm sağlar.
            </p>
          </li>
        </ul>
        <h2>
          Fon Perde Bakımı Nasıl Yapılır? Uzun Ömürlü Kullanım İçin İpuçları
        </h2>
        <p>
          Fon perde bakımı, seçilen kumaş türüne göre değişiklik gösterebilir.
          Ancak genel olarak dikkat etmeniz gereken bazı önemli noktalar
          şunlardır:
        </p>
        <ul>
          <li>
            <p>
              <strong>Kumaşa Uygun Yıkama:</strong> Fon perdelerinizi yıkamanız
              gerektiğinde, kumaşın türüne uygun yıkama talimatlarına dikkat
              edin. Hassas kumaşlar için kuru temizleme önerilebilir. Genelde 30
              derecelik programda, yumuşatıcı, ağartıcı kullanmadan yıkama
              önerilir ancak bu yıkama önerisi her kumaş ve renk için geçerli
              değildir. Seçilen ürüne göre, Şevval Perde tarafından
              bilgilendiriliyor olacaksınız.
            </p>
          </li>
          <li>
            <p>
              <strong>Ütüleme:</strong> Yıkama sonrası perdelerinizi ütülerken,
              kumaşın cinsine uygun ısı ayarını kullanın ve gerekirse üzerine
              nemli bir bez sererek ütüleyin.
            </p>
          </li>
          <li>
            <p>
              <strong>Leke Çıkarma:</strong> Leke oluştuğunda, hızlı bir şekilde
              ve kumaşa uygun bir leke çıkarıcı ile müdahale edin.
            </p>
          </li>
        </ul>
        <h2>
          Fon Perde Seçerken Dikkat Edilmesi Gerekenler: Doğru Karar İçin Kilit
          Noktalar
        </h2>
        <p>
          Fon perde seçimi yaparken sadece estetik görünümü değil, aynı zamanda
          mekanınızın ihtiyaçlarını ve kullanım amacını da göz önünde
          bulundurmalısınız:
        </p>
        <ul>
          <li>
            <h3>Mekanın Tarzı ve Büyüklüğü</h3>
            <p>
              Seçtiğiniz fon perde modeli, mekanınızın genel tarzıyla uyumlu
              olmalıdır. Küçük mekanlarda daha hafif ve sade modeller tercih
              edilirken, büyük mekanlarda daha gösterişli ve hacimli perdeler
              kullanılabilir. Örneğin daha minimal bir görüntü için düz renkli
              ve 80 cm eninde fon tercih edilirken çok daha büyük mekanlar için
              2 metreye kadar fon tercihi yapılabilir.
            </p>
          </li>
          <li>
            <h3>Tül Perde ile Uyumu ve Katmanlı Görünüm</h3>
            <p>
              Eğer tül perdelerle birlikte kullanacaksanız, fon perde renginin,
              deseninin ve kumaşının tül perdenizle uyumlu olmasına özen
              gösterin. Uyumlu bir kombinasyon, pencerenizde şık ve katmanlı bir
              görünüm yaratır. Bu konuda Şevval Perde’nin 40 yıllık tecrübesine
              ve yönlendirmelerine gönül rahatlığıyla güvenebilirsiniz.
            </p>
          </li>
          <li>
            <h3>Kumaşın Dökümü ve Kalitesi</h3>
            <p>
              Seçtiğiniz kumaşın dökümü, perdenizin nasıl duracağını ve mekanın
              atmosferini nasıl etkileyeceğini belirler. Kaliteli kumaşlar daha
              hoş bir döküme sahip olur ve uzun ömürlü kullanım sunar.
            </p>
          </li>
          <li>
            <h3>Bütçe ve Beklentileriniz</h3>
            <p>
              Fon perde fiyatları, seçilen kumaşın türüne, kalitesine,
              ölçülerine ve işçiliğine göre değişiklik gösterebilir. Bütçenizi
              ve beklentilerinizi göz önünde bulundurarak, en uygun fon perde
              seçeneğini bulmaya çalışın.
            </p>
          </li>
        </ul>
        <h2>Sonuç: Fon Perdeler ile Mekanlarınıza Estetik Bir Dokunuş Katın</h2>
        <p>
          Fon perdeler, ev ve ofis dekorasyonunun vazgeçilmez bir parçası olarak
          mekanlarınıza estetik bir dokunuş katar. Doğru kumaş, renk ve model
          seçimiyle yaşam alanlarınızın atmosferini zenginleştirebilir, ışık
          kontrolü ve mahremiyet ihtiyaçlarınızı karşılayabilirsiniz. İstanbul
          Kadıköy'deki Şevval Perde mağazamızda, her tarza uygun geniş fon perde
          koleksiyonumuz ve uzman ekibimizle size en iyi hizmeti sunmaktan
          memnuniyet duyarız. Mekanlarınıza değer katmak için fon perde
          seçeneklerimizi keşfedin!
        </p>
        <h2>
          Şevval Perde'de Benzersiz Fon Perde Seçenekleri (İstanbul Kadıköy)
        </h2>
        <p>
          İstanbul Kadıköy'de bulunan Şevval Perde mağazamız, her zevke ve
          ihtiyaca uygun zengin bir fon perde koleksiyonuna ev sahipliği
          yapmaktadır. Modern fon perde modellerinden klasik çizgilere sahip
          seçeneklere kadar, aradığınız her türlü kumaş, renk ve desende fon
          perdeyi bulabilirsiniz. Kadife fon perde, keten fon perde, ipek fon
          perde ve daha birçok farklı kumaş seçeneğimizle mekanlarınıza değer
          katıyoruz. Uzman ekibimiz, doğru fon perde seçimi konusunda size
          ücretsiz keşif ve danışmanlık hizmeti sunarak, mekanınıza en uygun
          çözümleri bulmanıza yardımcı olur. Kaliteli işçilik ve profesyonel
          montaj hizmetimizle, hayallerinizdeki fon perde görünümüne kavuşmanızı
          sağlıyoruz.
        </p>
        <div class="actions">
          <RouterLink
            :to="{ name: 'category', params: { slug: 'perdeler' } }"
            class="cta-button"
            >Tüm Perde Modelleri</RouterLink
          >
          <RouterLink to="/iletisim" class="cta-button secondary"
            >İletişime Geç</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-page h1 {
  text-align: center;
  color: #8b4513;
  margin-bottom: 40px;
  font-size: 2.5em;
}
.page-container {
  padding-top: 40px;
  padding-bottom: 60px;
}
.info-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  align-items: flex-start;
}
.info-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid #eee;
  position: sticky;
  top: 100px;
  max-height: 80vh;
  object-fit: contain;
}
.info-text h2 {
  font-size: 1.6em;
  color: #333;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}
.info-text h2:first-of-type {
  margin-top: 0;
}
.info-text p,
.info-text ul {
  font-size: 1.05em;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
}
.info-text ul {
  list-style: disc;
  padding-left: 25px;
}
.info-text li {
  margin-bottom: 8px;
}
.actions {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .info-content {
    grid-template-columns: 1fr;
  }
  .info-image img {
    position: static;
    max-width: 450px;
    margin: 0 auto 30px auto;
  }
  .info-page h1 {
    font-size: 2em;
  }
  .info-text h2 {
    font-size: 1.4em;
  }
  .info-text p,
  .info-text ul {
    font-size: 1em;
  }
  .actions {
    justify-content: center;
  }
}
</style>
