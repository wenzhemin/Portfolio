<template>
  <section id="app">
    <header>
      <h2>Thomas Alexander Woolff</h2>
    </header>
    <nav>
      <router-link to="/">Resumé</router-link>
      <router-link to="/portfolio">Portefølje</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
    <router-view/>
    <footer>
      <p>
        <a href="">Facebook</a> - <a href="">LinkedIn</a></p>
    </footer>
  </section>
</template>

<style lang="scss">
  $color_black: #000;
  $color_white: #fff;
  $color_bg: #fafafa;
  $color_link: blue;
  $color_link-visited: blue;
  $color_link-hover: #00fa00;
  $color_link-active: #000;

  $font_header: 'Noto Sans SC', sans-serif;
  $font_body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  $query_medium: 600px;
  $query_large: 1200px;

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    font-size: 46%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0; 

    @media screen and (min-width: $query_medium) {
      font-size: 62.5%;
    }
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: $font_body;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.7rem;
    color: $color_black;
    word-wrap: normal;
  }

  img {
    display: block;
    width: 100%;
  }

  figure {
    margin: 0;
  }

  h1 {
    font-family: $font_header;
    font-size: 2.5rem;
    letter-spacing: 1px; 
    margin: 0;
  }
  
  p {
    margin-top: 0;
    font-weight: 100;
    line-height: 145%;
  }

  a {
    color: $color_link;
    text-decoration: none;

    &:visited {
      color: $color_link-visited;
    }
    &:hover,
    &:focus,
    &:active {
      color: $color_white;
      background: $color_link;
    }
    &:hover,
    &:active {
      outline: 0;
    }
  }

  nav {
    text-align: right;
    padding: 2rem;
    height: 5rem;

    @media screen and (min-width: $query_medium) {
      padding: 3rem;
    }

    a {
      margin: 0 0 0 2rem;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      color: $color_link;

      &.router-link-exact-active {
        color: $color_link-active;
      }

      &:hover,
      &:focus {
        color: $color_link-hover;
        background: none;
      }
    }
  }

  section {
    padding: 0 1rem;

    @media screen and (min-width: $query_medium){
      padding: 0 2rem;
    }
  }

  article {
    max-width: 55rem;
  }

  #app {
    min-height: 100vh;
    background: $color_bg;
  }
</style>
