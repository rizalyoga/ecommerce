<template>
  <div class="product-container">
    <div class="product-image">
      <img src="../assets/image/image-baju.png" alt="product-image" />
    </div>
    <div class="product-description">
      <h2>
        Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
      </h2>
      <div class="gender-and-rate-wrapper">
        <p>women's clothing</p>
        <p>29.5</p>
      </div>
      <div class="horizontal-line"></div>
      <p class="content-description">
        100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON
        (SWEATER), Faux leather material for style and comfort / 2 pockets of
        front, 2-For-One Hooded denim style faux leather jacket, Button detail
        on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH /
        LINE DRY / DO NOT IRON
      </p>
      <div class="horizontal-line"></div>
      <h3>$29.95</h3>
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
      index: 19,
    };
  },
  mounted: async () => {
    const data = await fetch(`https://fakestoreapi.com/products/1`);
    const result = await data.json();

    console.log(result);
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
    },
  },
};
</script>

<style scoped>
.product-image {
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  width: 301px;
  height: 383px;
}
.product-description {
  flex-basis: 60%;
  padding: 0 40px;
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
}

.content-description {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 20px;
}

.horizontal-line {
  height: 1.5px;
  background: rgba(0, 0, 0, 0.2);
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
}
.next-button {
  background-color: white;
  border: solid 3px blueviolet;
}
</style>
