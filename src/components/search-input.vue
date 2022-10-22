<template>
  <div class="search-input-container">
    <input
      v-bind="$attrs"
      type="text"
      placeholder="Search for free photos"
      class="search-input"
    />
    <button
    class="search-button"
    >
      <svg
        class="search-svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        viewBox="0 0 64 64"
      >
        <path
          d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
</script>

<style scoped>
.search-input {
  padding: 10px;
  border-radius: 10px;
  font-size: calc(1vw + 0.5rem);
  position: relative;
  border-color: transparent;
  width: calc(100% - 50px);
  outline: none;
  color: #7f7f7f;
}
.search-input-container {
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  padding: 1px 1px;
  width: min(70vw, 100%);
}
.search-svg {
  text-align: center;
  margin-top: 0.5rem;
  min-height: 1.5rem;
  min-width: 1rem;
  color: white;
  transition: fill 0.15s ease;
  fill: #010000;
}
.search-button{
  position: absolute;
        border-color: transparent;
        color: white;
        background-color: white;
        font-size: 14px;
        min-width: 2.4vw;
        cursor: pointer;
}
</style>