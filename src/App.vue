<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue"; // Header'ı import et
import TheFooter from "./components/TheFooter.vue"; // Footer'ı import et
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<style>
.container {
  width: 90%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

main {
  min-height: calc(100vh - 150px);
  padding-top: 20px;
  padding-bottom: 40px;
}
</style>
