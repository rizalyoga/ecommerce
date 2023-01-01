<template>
  <div class="product-container loader">
    <div class="image-content">
      <div class="left-content"></div>
    </div>
    <div class="description-content">
      <div class="right-content"></div>
    </div>
  </div>
</template>

<style>
.loader {
  z-index: 10;
  position: fixed;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

.image-content {
  flex-basis: 40%;
  padding: 20px;
}
.description-content {
  flex-basis: 60%;
  padding: 20px;
}

.left-content,
.right-content {
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.2s shine linear infinite;
}
</style>
