<template>
  {{ chunckImage }}
  <div class="img-container">
    <div class="box">
      <div class="img-items" v-for="img in images_url.photos" :key="img.id">
        <img loading="lazy" :src="img.src.large" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import trandingPicture from "../composable/tranding_picture";

const { trandingPictureRequest, images_url, errors } = trandingPicture();

onMounted(() => {
  trandingPictureRequest();
});
</script>

<style setup>
.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5rem 2rem 0 2rem;
}
.box {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
}

.img-container .box .img-items {
  display: flex;
  aspect-ratio: 6/6;
  flex-direction: column;
  width: 33%;
}
.img-container .box .img-items img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  margin-bottom: 1rem;
  object-fit: cover;
}
.box :hover {
  opacity: 0.91;
}
</style>