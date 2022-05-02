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
export default {
  mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window) {
        document.documentElement.style.setProperty('--100vh', `${window.innerHeight}px` )        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: var(--100vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
