<script setup>
import ProductDisplay from "./components/ProductDisplay.vue";
</script>

<template>
  <section class="main-wrapper man-background">
    <ProductDisplay />
  </section>
</template>

<style scoped>
.man-background {
  background-image: url(./assets/image/bg-pattern.png),
    url(./assets/image/blue-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 548px;
}
.women-background {
  background-image: url(./assets/image/bg-pattern.png),
    url(./assets/image/pink-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 548px;
}
</style>
