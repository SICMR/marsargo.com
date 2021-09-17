<template>
  <footer class="container">
    <div class="links">
      <ul class="main-links">
        <li><a target="_blank" href="https://open.spotify.com/artist/1eArHQcMQC93pQSBaGWpog">Listen on Spotify</a></li>
        <li><a target="_blank" href="https://www.youtube.com/channel/UCS42Pk262iOKUXUW9XW_SOg">Youtube</a></li>
        <li>Contact <a href="mailto:idonthaveamanager@gmail.com">idonthaveamanager@gmail.com</a></li>
      </ul>
      <ul class="socials">
        <li>
          <a target="_blank" href="https://www.instagram.com/marsargo"><img src="instagram.svg" alt="" /></a>
        </li>
        <li>
          <a target="_blank" href="https://marsargo.tumblr.com/"><img src="tumblr-logo.svg" alt="" /></a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/marsargo"><img src="twitter.svg" alt="" /></a>
        </li>
      </ul>
    </div>
    <div class="legal">SIMCR, LLC &copy; {{ new Date().getFullYear() }} ALL RIGHTS RESERVED</div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding-top: 50px;
  margin-top: auto;
  letter-spacing: 0.05em;
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @include breakpoint(small) {
    display: block;
  }      
}
.main-links {
  li {
    margin-bottom: 14px;
  }
}
.socials {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 14px;
  @include breakpoint(small) {
    justify-content: flex-start;
    margin-top: 35px;
  }        
  li {
    width: 30px;
    margin-left: 20px;
    &:first-of-type {
      margin-left: 0;
    }
    a {
      &:hover{
        filter: invert(11%) sepia(100%) saturate(4517%) hue-rotate(241deg) brightness(106%) contrast(141%);        
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
.legal {
  padding: 50px 0;
  text-align: center;
  font-size: 0.8rem;
  @include breakpoint(small) {
    padding: 20px 0;
    text-align: left;
  }       
}
</style>
