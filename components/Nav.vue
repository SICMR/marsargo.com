<template>
  <nav id="main-nav" class="container">
    <ul>
      <li>
        <a href="#">Shop</a>
      </li>    
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  #main-nav {

    ul {
      padding: 40px 0;
      display: flex;
      justify-content: flex-end;
      @include breakpoint(small) {
       padding: 20px 0;
      }   
      li {
        margin-left: 20px;
        margin-right: 10px;
        a {
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }
      }
    }
  }
</style>