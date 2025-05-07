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
    { id: 's1', name: 'Karartma Plise Perde', description: 'Tamamen ışık geçirmez.', image: getImageUrl('Karartma Plise Perde.png') },
    { id: 's2', name: 'Tül Plise Perde', description: 'Güneşi filtreler, dışarısı görünür.', image: getImageUrl('Tül Plise Perde.png') },
    { id: 's3', name: 'Desenli Plise-Çocuk Odası', description: 'Eğlenceli desenler.', image: getImageUrl('Desenli Plise-Çocuk Odası.png') },
    { id: 's4', name: 'Düz Plise Perde', description: 'Hem tül hem güneşlik.', image: getImageUrl('Düz Plise Perde.png') }
  ];

  export const katlamaliProducts = [
    { id: 's1', name: 'Karartma (Blackout) Stor', description: 'Tamamen ışık geçirmez.', image: getImageUrl('Black-Out Stor.png') },
    { id: 's2', name: 'Screen Stor Perde', description: 'Güneşi filtreler, dışarısı görünür.', image: getImageUrl('stor2.jpg') },
    { id: 's3', name: 'Desenli Stor - Çocuk Odası', description: 'Eğlenceli desenler.', image: getImageUrl('stor3.jpg') },
    { id: 's4', name: 'Stor Perde', description: 'Hem tül hem güneşlik.', image: getImageUrl('stor4.jpg') },
    { id: 's5', name: 'Kişiye Özel Baskılı Stor', description: 'Kendi tasarımınızı yaratın.', image: getImageUrl('stor5.jpg') }
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