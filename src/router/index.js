// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/katalog', name: 'catalog', component: () => import('../views/CatalogView.vue') },
    { path: '/iletisim', name: 'contact', component: () => import('../views/ContactView.vue') },
    { path: '/kategori/:slug', name: 'category', component: () => import('../views/CategoryView.vue'), props: true },
    { path: '/urun/:id', name: 'product-detail', component: () => import('../views/ProductDetailView.vue'), props: true },
    { path: '/perde-cesitleri/ahsap-jaluzi', name: 'info-ahsap-jaluzi', component: () => import('../views/info/InfoAhsapJaluzi.vue') },
    { path: '/perde-cesitleri/fon-perde', name: 'info-fon-perde', component: () => import('../views/info/InfoFonPerde.vue') },
    { path: '/perde-cesitleri/tul-perde', name: 'info-tul-perde', component: () => import('../views/info/InfoTulPerde.vue') },
    { path: '/perde-cesitleri/zebra-stor', name: 'info-zebra-stor', component: () => import('../views/info/InfoZebraStor.vue') },
    { path: '/perde-cesitleri/katlamali-perde', name: 'info-katlamali-perde', component: () => import('../views/info/InfoKatlamaliPerde.vue') },
    { path: '/perde-cesitleri/stor-perde', name: 'info-stor-perde', component: () => import('../views/info/InfoStorPerde.vue') },
    { path: '/perde-cesitleri/plise-perde', name: 'info-plise-perde', component: () => import('../views/info/InfoPlisePerde.vue') }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 });
      });
    });
  }
});

export default router;
