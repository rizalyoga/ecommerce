<template>
  <div class="product-container unvailable-container">
    <div class="content">
      <p>This product is unvailable to show</p>
      <button @click="fetchData">Next product</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async fetchData() {
      this.$store.dispatch("SET_NEW_INDEX");

      const data = await fetch(
        `https://fakestoreapi.com/products/${this.$store.state.index}`
      );

      const result = await data.json();

      this.$store.dispatch("NEW_DATA_PRODUCT", result);
      console.log(this.$store.state.index);
    },
  },
};
</script>

<style>
.unvailable-container {
  background-image: url(../assets/image/sad-face.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 !important;
}

.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.content p {
  font-size: 20px;
}

.content button {
  font-size: 20px;
  width: 465px;
  height: 42px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 4px;
  cursor: pointer;
}
</style>
