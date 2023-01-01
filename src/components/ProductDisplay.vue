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
        <p>{{ $store.state.dataProduct?.rating?.rate }}/5</p>
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

<style>
.product-image {
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
}

.product-image img {
  width: 320px;
  height: 383px;
}
.product-description {
  flex-basis: 60%;
  padding: 0 40px;
  padding-top: 30px;
}

.product-description h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
}

.gender-and-rate-wrapper {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: var(--category-text);
}

.content-description {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  min-height: 150px;
  max-height: 150px;
  padding-bottom: 20px;
  color: var(--description-text);
  overflow-y: scroll;
}

.horizontal-line {
  height: 1.5px;
  background: var(--line-color);
}

.buttons-container {
  display: flex;
  gap: 10px;
}

.buttons-container button {
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  height: 42px;
  border-radius: 4px;
  cursor: pointer;
}
.buy-button {
  color: white;
  border: none;
}
.next-button {
  background-color: white;
}

.women-text {
  color: var(--pink-button);
}

.man-text {
  color: var(--blue-button);
}

.man-border-next-button {
  border: solid 3px var(--blue-button);
}

.women-border-next-button {
  border: solid 3px var(--pink-button);
}

.man-buy-button {
  background-color: var(--blue-button);
}

.women-buy-button {
  background-color: var(--pink-button);
}
</style>
