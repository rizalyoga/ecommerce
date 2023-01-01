<script setup>
import ProductDisplay from "./components/ProductDisplay.vue";
import UnvailableProduct from "./components/UnvailableProduct.vue";
</script>

<template>
  <section class="main-wrapper unvailable-background">
    <ProductDisplay />
    <!-- <UnvailableProduct /> -->
  </section>
</template>

<style scoped>
.man-background {
  background-image: url(./assets/image/bg-pattern.png),
    url(./assets/image/blue-bg.png);
  background-repeat: repeat-x;
  background-size: 1283px 548px;
}
.women-background {
  background-image: url(./assets/image/bg-pattern.png),
    url(./assets/image/pink-bg.png);
  background-repeat: repeat-x;
  background-size: 1283px 548px;
}
.unvailable-background {
  background-image: url(./assets/image/grey-bg.png);
  background-repeat: repeat-x;
  background-size: 1283px 548px;
}
</style>
