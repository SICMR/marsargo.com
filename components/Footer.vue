<template>
  <footer>
        <ul class="main-link">
            <li><a href="#">Listen on Spotify</a></li>
            <li><a href="#">Youtube</a></li>
            <li>Contact <a href="mailto:idonthaveamanager@gmail.com">idonthaveamanager@gmail.com</a></li>
        </ul>
      <ul class="socials">
        <li><a href="#"><img src="instagram.svg" alt=""></a></li>
        <li><a href="#"><img src="tumblr-logo.svg" alt=""></a></li>
        <li><a href="#"><img src="twitter.svg" alt=""></a></li>
      </ul>
      <div class="legal">SIMCR, LLC &copy; {{ new Date().getFullYear() }} ALL RIGHTS RESERVED </div>
  </footer>
</template>

<style lang="scss" scoped>
  .socials {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 50px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>