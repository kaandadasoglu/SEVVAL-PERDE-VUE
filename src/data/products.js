// src/data/products.js

// Resim URL'lerini Vite'ın doğru işlemesi için yardımcı fonksiyon
const getImageUrl = (name) => {
    // Resimlerin assets/images/ altında olduğunu varsayıyoruz
    return new URL(`../assets/images/${name}`, import.meta.url).href;
    // Dikkat: new URL'in ikinci parametresi import.meta.url olmalı
    // Bu, path'in bu dosyaya göre çözümlenmesini sağlar.
  };
  
  export const perdeProducts = [
    { id: 'p1', name: 'Modern Fon Perde - Keten Dokulu', description: 'Salon ve yatak odaları için ideal.', image: getImageUrl('perde1.jpg') },
    { id: 'p2', name: 'Zarif Tül Perde - Ekru', description: 'Işığı süzen, ferah bir atmosfer.', image: getImageUrl('perde2.jpg') },
    { id: 'p3', name: 'Kadife Fon Perde - Bordo', description: 'Lüks ve sıcak bir dokunuş.', image: getImageUrl('perde3.jpg') },
    { id: 'p4', name: 'Desenli Fon Perde - Geometrik', description: 'Odanıza modern bir hava katın.', image: getImageUrl('perde4.jpg') },
    { id: 'p5', name: 'Rustik Keten Perde', description: 'Doğal ve samimi bir stil.', image: getImageUrl('perde5.jpg') }
  ];
  
  export const jaluziProducts = [
    { id: 'j1', name: 'Ahşap Jaluzi - Ceviz', description: 'Doğal ve sıcak bir görünüm.', image: getImageUrl('jaluzi1.jpg') },
    { id: 'j2', name: 'Alüminyum Jaluzi - Metalik Gri', description: 'Modern ofisler için pratik.', image: getImageUrl('jaluzi2.jpg') },
    { id: 'j3', name: 'PVC Jaluzi - Beyaz', description: 'Neme dayanıklı, banyo/mutfak.', image: getImageUrl('jaluzi3.jpg') },
    { id: 'j4', name: 'Renkli Alüminyum Jaluzi', description: 'Canlı renklerle enerji katın.', image: getImageUrl('jaluzi4.jpg') }
  ];
  
  export const storProducts = [
    { id: 's1', name: 'Karartma (Blackout) Stor', description: 'Tamamen ışık geçirmez.', image: getImageUrl('stor1.jpg') },
    { id: 's2', name: 'Screen Stor Perde', description: 'Güneşi filtreler, dışarısı görünür.', image: getImageUrl('stor2.jpg') },
    { id: 's3', name: 'Desenli Stor - Çocuk Odası', description: 'Eğlenceli desenler.', image: getImageUrl('stor3.jpg') },
    { id: 's4', name: 'Zebra Stor Perde', description: 'Hem tül hem güneşlik.', image: getImageUrl('stor4.jpg') },
    { id: 's5', name: 'Kişiye Özel Baskılı Stor', description: 'Kendi tasarımınızı yaratın.', image: getImageUrl('stor5.jpg') }
  ];
  
 // YENİ: Tüm ürünleri tek bir dizide birleştirelim (arama için)
const allProductArrays = [perdeProducts, jaluziProducts, storProducts];
const allProductsFlat = allProductArrays.flat(); // Dizileri tek bir diziye düzleştirir

// YENİ: ID'ye göre ürünü bulan fonksiyon
export function getProductById(id) {
  if (!id) return null; // ID yoksa null döndür
  // Düzleştirilmiş dizide ürünü bul
  return allProductsFlat.find(product => product.id === id);
}