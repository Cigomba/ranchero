<template>
  <div class="topheader">
    
  </div>
  <header class=".header">
    <div class="menu-nav">
      <router-link to="/">
        <img src="./assets/images/RancheroPainting_Logo_Horizontal.png" id="img">
      </router-link>
      <nav id="menu">
          &nbsp;<router-link :to="{ name : 'about-ranchero' }" class="first">About Ranchero</router-link>
          &nbsp;<router-link :to="{ name : 'services' }">Services</router-link>
          &nbsp;<router-link :to="{ name : 'gallery' }">Gallery</router-link>
          &nbsp;<router-link :to="{ name : 'testimonials' }" >Testimonials</router-link>
          &nbsp;<router-link :to="{ name : 'contact-us' }" >Contact Us</router-link>
      </nav>
    </div>
    <nav id="right-nav">
        <!-- &nbsp;<router-link :to="{ name : 'get-a-quote' }" >
            <button class="book-apt-btn btn">Book an Appointment</button>
        </router-link> -->
        &nbsp;<router-link :to="{ name : 'get-a-quote' }" >
            <button class="get-quote-btn btn" >Get a Quote</button>
        </router-link>
    </nav>
  </header>
  <router-view/>
  <FooterComponent />
</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    components: { FooterComponent }
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

* {
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
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
  justify-content: space-between;
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

.btn {
  position: relative;
}

.btn.book-apt-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-color: var(--light-green);

  transition: transform 300ms ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}

.btn.book-apt-btn {
  z-index: 1;
}

.btn.book-apt-btn:hover::before,
.btn.book-apt-btn:focus::before {
  transform: scaleX(1);
}

.btn.book-apt-btn:hover::after,
.btn.book-apt-btn:focus::after {
  transform: scaleX(0);
  z-index: -1;
}


.book-apt-btn {
  padding: 10px 20px;
  font-size: 18px;
  color: var(--light-green);
  background-color: white;
  border: 1px solid var(--light-green);
  border-radius: 3px;
  text-transform: uppercase;
}

.book-apt-btn:hover {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  /* color: var(--purple); */
  color: white;
  
  /* background-color: var(--light-green); */
  /* border: 1px solid var(--hover-green); */
  border-radius: 3px;
}

.get-quote-btn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: var(--light-green);
  border-radius: 3px;
  color: white;
  border: none;
}

.get-quote-btn:hover {
  cursor: pointer;
  background-color: var(--darker-blue);
  color: var(--yellow);
  /* border: 1px solid var(--light-green); */
  transition: all 0.3s ease;
}

#right-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  padding: 0 20px;
  /* gap: 20px; */
}

/* .router-link-active {
  color: var(--darker-blue) !important;
} */

a.router-link-exact-active {
  color: var(--darker-blue) !important;
  /* border-bottom: 1.5px solid var(--darker-blue); */
}

a.router-link-exact-active:first-child {
  border-bottom: none;
}

.get-quote-btn.router-link-exact-active {
  background-color: var(--darker-blue);
  color: var(--yellow);
}

@media screen and (width < 720px) {

  .header {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
 
  .menu-nav {
    display: flex;
    flex-direction: column;
  }

  .bottom-footer {
    display: flex;
    gap: 10px;
  }
}

@media screen and (width < 1100) {

  /* // decrease size of header */
  .header {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }

  #menu {
    display: flex;
    flex-wrap: wrap;
  }

  div img {
    width: 100%;
  }
}

@media screen and (width < 400) {
  .header {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .get-quote-btn {
    padding: 0;
    background-color: blue;
  }
}

</style>