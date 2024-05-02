<template>
  <div class="topheader">
    
  </div>
  <header class="grid overflow-hidden px-0 py-2.5 lg:grid-cols-header-columns shadow-2xl">
    <router-link to="/">
      <div class="w-fit py-0.5 px-3">
        <img src="./assets/logo_main.png" class="w-48 min-w-36" />
      </div>
    </router-link>
    <div class="flex justify-between">
      <nav id="menu" class="flex text-left flex-nowrap items-center justify-center gap-2.5 xs:flex xs:flex-wrap xs:">
          &nbsp;<router-link :to="{ name : 'about-ranchero' }">About Ranchero</router-link>
          &nbsp;<router-link :to="{ name : 'services' }">Services</router-link>
          &nbsp;<router-link :to="{ name : 'gallery' }">Gallery</router-link>
          &nbsp;<router-link :to="{ name : 'testimonials' }" >Testimonials</router-link>
          &nbsp;<router-link :to="{ name : 'contact-us' }" >Contact Us</router-link>
        </nav>
        <nav class="flex justify-between items-center w-fit py-0 px-5 gap-2">
          &nbsp;<router-link :to="{ name : 'get-a-quote' }">
            <button class="px-5 py-2.5 w-fit bg-[var(--light-green)] rounded text-white border-none whitespace-nowrap hover:cursor-pointer hover:scale-110">Get a Quote</button>
          </router-link>
        </nav>
    </div>
  </header>
  <router-view/>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

  export default {
    data() {
      return {
        
      }
    },
    components: { FooterComponent },
    methods: {
      },
    mounted() {
      
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Racing+Sans+One&family=Raleway&display=swap');

:root {
  --light-green: #9BAF62;
  --hover-green: #40530d;
  --orange: #e49a7d;
  --brown: #472F2F;
  --accent-color: #0d5153;
  --purple: #453b6b;
  --light-blue: #79BBCB;
  --darker-blue: #39636F;
  --yellow: #ffc728;
  --main-blue: #2c3e50;
  --this-green: #C3BF6D;
}

html {
  font-size: 16px !important;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: 'Inter', sans-serif; */
  font-family: 'Racing Sans One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
  /* font-size: 12px !important; */
  box-sizing: border-box;
}

#menu a {
  text-decoration: none;
  /* font-size: 16px; */
  text-transform: uppercase;
  color: var(--light-green);
  white-space: nowrap;
}


#menu a:hover {
  color: var(--darker-blue);
  transition: all 300ms ease-in;
}


a.router-link-exact-active {
  color: var(--darker-blue) !important;
}

a.router-link-exact-active:first-child {
  border-bottom: none;
}

a.router-link-exact-active[href~=".get-quote-btn"] {
  background-color: var(--darker-blue);
  color: var(--yellow);

}

</style>