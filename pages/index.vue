<template>
<div class="container">
  <img src="/image.png" alt="">
</div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  img  {
    max-width: 500px;
    height: auto;
    display: block;
    margin: 100px;
    @include breakpoint(small) {
      margin: 20px;
      max-width: 80%;
    }    
  }
</style>