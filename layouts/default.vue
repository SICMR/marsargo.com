<template>
  <div class="page-wrapper">
    <Nav />
    <div class="page-content">
      <div class="inner">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
