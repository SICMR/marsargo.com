<template>
  <footer class="container">
    <div class="links">
      <div class="empty"></div>
      <div class="legal">SIMCR, LLC &copy; {{ new Date().getFullYear() }} ALL RIGHTS RESERVED</div>
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
  </footer>
</template>

<style lang="scss" scoped>
footer {
  //padding-top: 50px;
  margin-top: auto;
  letter-spacing: 0.05em;
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @include breakpoint(small) {
   flex-direction: column-reverse;
  }      
}
.empty {
  @include breakpoint(small) {
    display: none;
  }      
}
.socials {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  margin-right: 20px;
  @include breakpoint(small) {
    margin: 0 0 15px 0;
    width: 100%;
    justify-content: center;

  }        
  li {
    width: 30px;
    margin-left: 20px;
    &:first-of-type {
      margin-left: 0;
    }    
    @include breakpoint(small) {
      margin: 0 10px;
      &:first-of-type {
        margin-left: 10px;
      }
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
  padding: 0;
  text-align: center;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  margin-bottom: 10px;
  margin-left: 11%;
  @include breakpoint(small) {
    text-align: center;
    margin-left: 0;
    margin-bottom: 15px;
    width: 100%;
  }       
}
</style>
