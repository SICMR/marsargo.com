<template>
<div class="container">
  <div class="main-vibe">
    <div class="the-image">
      <img src="/image.png" alt="">
    </div>
    <ul class="main-links">
      <li><a target="_blank" href="https://open.spotify.com/artist/1eArHQcMQC93pQSBaGWpog">Listen on Spotify</a></li>
      <li><a target="_blank" href="https://www.youtube.com/channel/UCS42Pk262iOKUXUW9XW_SOg">Youtube</a></li>
      <li>Contact <a href="mailto:idonthaveamanager@gmail.com">idonthaveamanager@gmail.com</a></li>
    </ul>
  </div>
</div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .main-vibe {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    @include breakpoint(small) {
      display: block;
    }    
    .the-image {
      padding: 0 0 0 7.6%;
      width: 45%;
      @include breakpoint(small) {
        padding: 0;
        width: 80%;
        margin: 0 auto;
        margin-top: 40px;
      }         
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .main-links {
      margin-left: 7.2%;
      margin-bottom: 5.5%;
      font-size: 18px;
      letter-spacing: 0.15em;
      @include breakpoint(small) {
        padding: 0;
        width: 100%;
        font-size: 12px;
        margin: 30px 20px;
      }         
      li {
        margin-bottom: 14px;
      }
    }
  }
  // img  {
  //   max-width: 200px;
  //   height: auto;
  //   display: block;
  //  // margin: 100px;
  //   @include breakpoint(small) {
  //     margin: 20px;
  //     max-width: 80%;
  //   }    
  // }
</style>