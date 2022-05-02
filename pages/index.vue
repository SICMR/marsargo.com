<template>
  <div class="main-vibe container">
    <div class="the-image">
      <img src="/img.jpg" alt="">
    </div>
    <ul class="main-links">
      <li><a target="_blank" href="https://open.spotify.com/artist/3WFBuQFguwRNZcPyQrtBEU">Listen on Spotify</a></li>
      <li><a target="_blank" href="https://www.youtube.com/channel/UCS42Pk262iOKUXUW9XW_SOg">Youtube</a></li>
      <li>Contact <a href="mailto:idonthaveamanager@gmail.com">idonthaveamanager@gmail.com</a></li>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .main-vibe {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 10vw;

    @include breakpoint(small) {
      // padding: 0 20px;
      display: block;
      margin-bottom: 15vh;
    }    

    .the-image {
      width: 40%;
    
      @include breakpoint(small) {
        padding: 0;
        width: 100%;
        margin: 0 auto;
        margin-top: 40px;
      }         
      
      img {
        max-width: 100%;
        height: auto;
      }
    }

    .main-links {
      font-size: clamp(12px, 1.3vw, 15px);
      letter-spacing: 0.15em;
      margin-left: 4vw;

      @include breakpoint(small) {
        padding: 0;
        width: 100%;
        margin: 30px 0;
      }    

      li {
        margin-bottom: 14px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
</style>