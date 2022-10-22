<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="navbar-right">
        <img
          src="../assets/logo/logo.png"
          class="nav-logo"
          alt="logo"
          height="40"
          width="50"
        />
        <p class="page-title">WallPexels</p>
      </div>
      <div class="navbar-left">
        <div>Exloper</div>
        <div>About</div>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.navbar-container {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
}
.navbar {
  position: relative;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: center;
  color: white;
}
.navbar-right {
  align-items: center;
  display: flex;
  font-size: 1.3rem;
  gap: 1rem;
  cursor: pointer;
}
.navbar-left {
  font-size: 1.3rem;
  gap: 1rem;
  align-items: center;
  display: flex;
}
.nav-logo {
  background: rgb(243, 245, 246);
  border-radius: 5px;
  padding: 0.5rem;
}
.nav-logo:hover{
background-color: rgb(216, 208, 208);
}
.page-title {
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
}
.page-title:hover {
  color: rgb(216, 208, 208);
}
</style>