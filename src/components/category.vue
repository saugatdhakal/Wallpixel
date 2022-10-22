<template>
  <p
    style="
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
    "
  >
    Top Category
  </p>
  <div class="category">
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/Nature.jpg"
        alt="Nature"
      />
      <div class="category-img-text">Nature</div>
    </div>
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/landscape.jpg"
        alt="Nature"
      />
      <div class="category-img-text">Landscape</div>
    </div>
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/creative.jpg"
        alt="Nature"
      />
      <div class="category-img-text">Creative</div>
    </div>
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/coffee.jpg"
        alt="Nature"
      />
      <div class="category-img-text">Coffee</div>
    </div>
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/dark.jpeg"
        alt="Nature"
      />
      <div class="category-img-text">Dark</div>
    </div>
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/code.jpg"
        alt="Nature"
      />
      <div class="category-img-text">Code</div>
    </div>
    <div class="category-item">
      <img
        class="category-img"
        loading="lazy"
        src="../assets/category/art.jpg"
        alt="Nature"
      />
      <div class="category-img-text">Art</div>
    </div>


  </div>
</template>

<script setup>

</script>

<style scoped>
.category {
  display: flex;
  margin: 1rem 2rem;
  text-align: center;
  gap: 10px;
}
.category-item {
  flex: 1 1 33%;
  max-height: 10rem;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  /* max-height: 1rem; */
}
.category-img:hover{
  opacity: 0.91;

}

.category-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

}
.category-img-text {
  position: absolute;
  top: 50%;
  color:white;
  font-size:1.5vw;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>