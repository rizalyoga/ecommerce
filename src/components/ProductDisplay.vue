<template>
  <div class="product-container">
    <div class="product-image">
      <img :src="$store.state.dataProduct.image" alt="product-image" />
    </div>
    <div class="product-description">
      <h2
        :class="{
          'women-text': $store.state.dataProduct?.category?.includes('women'),
          'man-text': !$store.state.dataProduct?.category?.includes('women'),
        }"
      >
        {{ $store.state.dataProduct.title }}
      </h2>
      <div class="gender-and-rate-wrapper">
        <p>{{ $store.state.dataProduct.category }}</p>
        <div class="rate-content">
          <p>{{ $store.state.dataProduct?.rating?.rate }}/5</p>
          <span
            v-for="value in maxRate"
            :key="value"
            class="circle"
            :class="{
              'man-circle':
                value < $store.state.dataProduct?.rating?.rate &&
                !$store.state.dataProduct?.category?.includes('women'),
              'women-circle':
                value < $store.state.dataProduct?.rating?.rate &&
                $store.state.dataProduct?.category?.includes('women'),
            }"
          ></span>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <p class="content-description">
        {{ $store.state.dataProduct.description }}
      </p>
      <div class="horizontal-line"></div>
      <h3
        :class="{
          'women-text': $store.state.dataProduct?.category?.includes('women'),
          'man-text': !$store.state.dataProduct?.category?.includes('women'),
        }"
      >
        ${{ $store.state.dataProduct.price }}
      </h3>
      <div class="buttons-container">
        <button
          class="buy-button"
          :class="{
            'women-buy-button':
              $store.state.dataProduct?.category.includes('women'),
            'man-buy-button':
              !$store.state.dataProduct?.category.includes('women'),
          }"
        >
          Buy now
        </button>
        <button
          class="next-button"
          :class="{
            'women-text': $store.state.dataProduct?.category.includes('women'),
            'women-border-next-button':
              $store.state.dataProduct?.category.includes('women'),
            'man-text': !$store.state.dataProduct?.category.includes('women'),
            'man-border-next-button':
              !$store.state.dataProduct?.category.includes('women'),
          }"
          @click="fetchData"
        >
          Next product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxRate: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    async fetchData() {
      this.$store.dispatch("SET_LOADING");
      this.$store.dispatch("SET_NEW_INDEX");

      const data = await fetch(
        `https://fakestoreapi.com/products/${this.$store.state.index}`
      );

      const result = await data.json();

      this.$store.dispatch("NEW_DATA_PRODUCT", result);
      this.$store.dispatch("SET_LOADING");
    },
  },
};
</script>

<style scoped>
@import "../style/productDisplay.css";
</style>
