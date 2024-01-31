<template>
  <div class="topheader">
    
  </div>
  <header class=".header">
    <router-link to="/">
      <img src="./assets/images/RancheroPainting_Logo_Horizontal.png" id="img">
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
              <a href="#" class="book-apt-btn btn" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/cigombamiler-29w/30min'});return false;">Book an Appointment</a>
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
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Inter', sans-serif;
  /* font-family: 'Racing Sans One', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  padding: 50px 50px;

} 

#img {
  /* border: 1px solid black; */
  /* object-fit: cover; */
  /* height: 100px !important; */
  max-width: 250px;
}

.menu-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

#menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

#menu a {
  text-decoration: none;
  font-size: 17px;
  text-transform: uppercase;
  color: var(--light-green);
}

#menu a:hover {
  color: var(--darker-blue);
  transition: all 300ms ease-in;
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

.get-quote-btn {
  padding: 10px 20px;
  width: fit-content;
  text-wrap: nowrap;
  font-size: 18px;
  background-color: var(--light-green);
  border-radius: 3px;
  color: white;
  border: none;
}

.get-quote-btn:hover {
  cursor: pointer;
  /* background-color: var(--darker-blue);
  color: var(--yellow); */
  /* border: 1px solid var(--light-green); */
  /* transition: all 0.3s ease; */
  transform: scale(1.1);
}

.activatedBtn {
  background-color: var(--darker-blue);
  color: var(--yellow);
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

</style>