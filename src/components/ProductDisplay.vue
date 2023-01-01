<template>
  <div class="product-container">
    <div class="product-image">
      <img :src="dataProduct.image" alt="product-image" />
    </div>
    <div class="product-description">
      <h2>
        {{ dataProduct.title }}
      </h2>
      <div class="gender-and-rate-wrapper">
        <p>{{ dataProduct.category }}</p>
        <p>{{ dataProduct.rate }}/5</p>
      </div>
      <div class="horizontal-line"></div>
      <p class="content-description">
        {{ dataProduct.description }}
      </p>
      <div class="horizontal-line"></div>
      <h3>${{ dataProduct.price }}</h3>
      <div class="buttons-container">
        <button class="buy-button">Buy now</button>
        <button class="next-button" @click="fetchData">Next product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      dataProduct: {
        id: 0,
        title: "",
        category: "",
        description: "",
        image: "",
        price: 0,
        rate: 0,
      },
    };
  },
  mounted() {
    fetch(`https://fakestoreapi.com/products/1`)
      .then((res) => res.json())
      .then((data) => {
        this.dataProduct.id = data.id;
        this.dataProduct.title = data.title;
        this.dataProduct.category = data.category;
        this.dataProduct.description = data.description;
        this.dataProduct.image = data.image;
        this.dataProduct.price = data.price;
        this.dataProduct.rate = data.rating.rate;
      })
      .catch((err) => console.error(err));
  },
  methods: {
    async fetchData() {
      if (this.index == 20) {
        this.index = 1;
      } else {
        this.index += 1;
      }

      const data = await fetch(
        `https://fakestoreapi.com/products/${this.index}`
      );

      const result = await data.json();

      console.log(result);
      this.dataProduct.id = result.id;
      this.dataProduct.title = result.title;
      this.dataProduct.category = result.category;
      this.dataProduct.description = result.description;
      this.dataProduct.image = result.image;
      this.dataProduct.price = result.price;
      this.dataProduct.rate = result.rating.rate;
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
  border: solid 3px blueviolet;
}
</style>
