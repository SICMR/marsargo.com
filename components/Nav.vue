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
      padding: 50px 0;
      display: flex;
      justify-content: flex-end;      
      li {
        margin-left: 20px;
        a {
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      }
    }
  }
</style>