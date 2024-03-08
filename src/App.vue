<template>
  <div class="topheader">
    
  </div>
  <header id="header">
    <router-link to="/">
      <div class="img_container">
        <img src="./assets/logo_main.png" id="img">
      </div>
    </router-link>
    <div class="menu-nav">
      <nav id="menu">
          &nbsp;<router-link :to="{ name : 'about-ranchero' }" class="first">About Ranchero</router-link>
          &nbsp;<router-link :to="{ name : 'services' }">Services</router-link>
          &nbsp;<router-link :to="{ name : 'gallery' }">Gallery</router-link>
          &nbsp;<router-link :to="{ name : 'testimonials' }" >Testimonials</router-link>
          &nbsp;<router-link :to="{ name : 'contact-us' }" >Contact Us</router-link>
        </nav>
        <nav id="right-nav">
          &nbsp;<router-link :to="{ name : 'get-a-quote' }">
            <button class="get-quote-btn btn" @mouseleave="setActivated" >Get a Quote</button>
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
  font-size: 12px !important;
  box-sizing: border-box;
}

#header {
  display: grid;
  grid-template-columns: 1fr 6fr;
  
  overflow: hidden;
  padding: 10px 0px;
}

header .img_container {
  width: fit-content;
  padding: 5px 10px;
  margin: 0 10%;
  /* padding-left: 50px; */
}

#header #img {
  /* border: 1px solid black; */
  /* object-fit: cover; */
  /* height: 100px !important; */
  max-width: 150px;
}

.menu-nav {
  display: flex;
  justify-content: space-between;
}

#menu {
  display: flex;
  text-align: left;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* border: 1px solid green; */
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
  /* border-top: 1px solid var(--darker-blue); */
  /* border-bottom: 1px solid var(--darker-blue); */
}

.router-link-active {
  /* border-top: 1px solid var(--darker-blue);
  border-bottom: 1px solid var(--darker-blue); */
}

.book-apt-btn {
  background-color: var(--darker-blue);
  color: var(--yellow);
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 18px;
}

.book-apt-btn:hover {
  /* color: white; */
  transform: scale(1.1);
}

a.book-apt-btn {
  text-decoration: none;
}

.get-quote-btn {
  padding: 10px 20px;
  width: fit-content;
  font-size: 18px;
  background-color: var(--light-green);
  border-radius: 3px;
  color: white;
  border: none;
  white-space: nowrap;
}

.get-quote-btn:hover {
  cursor: pointer;
  /* background-color: var(--darker-blue);
  color: var(--yellow); */
  /* border: 1px solid var(--light-green); */
  /* transition: all 0.3s ease; */
  transform: scale(1.1);
}

#right-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  padding: 0 20px;
  gap: 7px;
}

a.router-link-exact-active {
  color: var(--darker-blue) !important;
  /* border-bottom: 1.5px solid var(--darker-blue); */
}

a.router-link-exact-active:first-child {
  border-bottom: none;
}

a.router-link-exact-active[href~=".get-quote-btn"] {
  background-color: var(--darker-blue);
  color: var(--yellow);

}

@media only screen and (max-width: 900px) {
  #header {
    display: grid;
    grid-template-columns: 1fr;
  }


  .router-link-active
  #header > a {
    /* grid-column: 1 -1; */
    /* border: 3px solid red; */
  }

}

</style>