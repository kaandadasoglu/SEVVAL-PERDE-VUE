// src/data/products.js

// Resim URL'lerini Vite'ın doğru işlemesi için yardımcı fonksiyon
const getImageUrl = (name) => {
    // Resimlerin assets/images/ altında olduğunu varsayıyoruz
    return new URL(`../assets/images/${name}`, import.meta.url).href;
    // Dikkat: new URL'in ikinci parametresi import.meta.url olmalı
    // Bu, path'in bu dosyaya göre çözümlenmesini sağlar.
  };
  
  export const perdeProducts = [
    { id: 'p1', name: 'Modern Fon Perde - Keten Dokulu', description: 'Salon ve yatak odaları için ideal.', image: getImageUrl('Modern Fon Perde-Keten Dokulu.png') },
    { id: 'p2', name: 'Zarif Tül Perde - Ekru', description: 'Işığı süzen, ferah bir atmosfer.', image: getImageUrl('Zarif Tül Perde-Ekru.png') },
    { id: 'p3', name: 'Kadife Fon Perde - Bordo', description: 'Lüks ve sıcak bir dokunuş.', image: getImageUrl('Kadife Fon Perde.png') },
    { id: 'p4', name: 'Desenli Fon Perde - Geometrik', description: 'Odanıza modern bir hava katın.', image: getImageUrl('Desenli Fon Perde-Geometrik.png') },
    { id: 'p5', name: 'Rustik Keten Perde', description: 'Doğal ve samimi bir stil.', image: getImageUrl('Rustik Keten Perde.png') }
  ];
  
  export const jaluziProducts = [
    { id: 'j1', name: 'Ahşap Jaluzi - Ceviz', description: 'Doğal ve sıcak bir görünüm.', image: getImageUrl('Ahşap Jaluzi-Ceviz.png') },
    { id: 'j2', name: 'Alüminyum Jaluzi - Metalik Gri', description: 'Modern ofisler için pratik.', image: getImageUrl('Alüminyum Jaluzi-Metalik.png') },
    { id: 'j3', name: 'PVC Jaluzi - Beyaz', description: 'Neme dayanıklı, banyo/mutfak.', image: getImageUrl('PVC Jaluzi-Beyaz.png') }
  ];
  
  export const storProducts = [
    { id: 's1', name: 'Karartma (Blackout) Stor', description: 'Tamamen ışık geçirmez.', image: getImageUrl('Black-Out Stor.png') },
    { id: 's2', name: 'Screen Stor Perde', description: 'Güneşi filtreler, dışarısı görünür.', image: getImageUrl('Screen Stor.png') },
    { id: 's4', name: 'Düz Stor Perde', description: 'Hem tül hem güneşlik.', image: getImageUrl('Düz Stor.png') }
  ];

  export const pliseProducts = [
    {
        id: 'pl1',
        name: 'Karartma Plise Perde',
        description: 'Işığı tamamen keser, tam mahremiyet sağlar.', // Kısaltıldı
        image: getImageUrl('Karartma Plise Perde.png')
    },
    {
        id: 'pl2',
        name: 'Tül Plise Perde',
        description: 'Doğal ışığı süzer, gizliliği korur.', // Kısaltıldı
        image: getImageUrl('Tül Plise Perde.png')
    },
    {
        id: 'pl3',
        name: 'Desenli Plise-Çocuk Odası',
        description: 'Çocuk odalarına neşe katan canlı desenler.', // Kısaltıldı
        image: getImageUrl('Desenli Plise-Çocuk Odası.png')
    },
    {
        id: 'pl4',
        name: 'Düz Plise Perde',
        description: 'Sade, modern ve her dekora uyumlu.', // Kısaltıldı
        image: getImageUrl('Düz Plise Perde.png')
    }
  ];

  export const katlamaliProducts = [
    { id: 'k1', name: 'Keten Katlamalı Perde - Naturel', description: 'Doğal keten dokusuyla şık ve modern.', image: getImageUrl('Keten Katlamali Perde-Naturel.png') },
    { id: 'k5', name: 'Tül Katlamalı Perde - Beyaz', description: 'Hafif ve uçuş uçuş, modern bir alternatif.', image: getImageUrl('Tul Katlamali Perde-Beyaz.png') },
    { id: 'k4', name: 'Karartma Katlamalı Perde - Gri', description: 'Işığı tamamen keser, mahremiyet sağlar.', image: getImageUrl('Karartma Katlamali Perde-Gri.png') },
    { id: 'k2', name: 'Pamuklu Katlamalı Perde - Pastel Mavi', description: 'Yumuşak pamuklu kumaş, huzurlu bir ortam.', image: getImageUrl('Pamuklu Katlamali Perde-Pastel Mavi.png') },
    { id: 'k3', name: 'Desenli Katlamalı Perde - Çiçekli', description: 'Canlı renkler ve zarif çiçek desenleri.', image: getImageUrl('Desenli Katlamali Perde-Cicekli.png') }
  ];
  
 // YENİ: Tüm ürünleri tek bir dizide birleştirelim (arama için)
const allProductArrays = [perdeProducts, jaluziProducts, storProducts, pliseProducts, katlamaliProducts];
const allProductsFlat = allProductArrays.flat(); // Dizileri tek bir diziye düzleştirir

// YENİ: ID'ye göre ürünü bulan fonksiyon
export function getProductById(id) {
  if (!id) return null; // ID yoksa null döndür
  // Düzleştirilmiş dizide ürünü bul
  return allProductsFlat.find(product => product.id === id);
}