<template>
  <header class="header-flex header-cotainer">
    <div class="header-flex">
      <div>
        <p class="header-title">
          The best free stock photos, royalty free images by creators
        </p>
        <SearchInput style="margin-top: 0.3rem"></SearchInput>
      </div>
    </div>
    <img :src="image" class="header-img" height="600" />
  </header>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import headerImages from "../composable/header_image";
import SearchInput from "./search-input.vue";
const { headerImagesRequest, image, errors, header_image } = headerImages();

onMounted(() => {
  headerImagesRequest();
});
</script>

<style scoped>
.header-title {
  font-size: calc(1vw + 0.5rem);
  color: white;
}
.header-img {
  width: 100%;
  object-fit: cover;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.header-flex {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  position: absolute;
}
.header-cotainer {
  position: relative;
  z-index: 9;
  width: 100%;
  min-height: 500px;
}
</style>