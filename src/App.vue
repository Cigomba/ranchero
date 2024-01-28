<template>
  <div class="topheader">
    
  </div>
  <header>
    <div class="menu-nav">
      <router-link to="/">
        <img src="./assets/images/RancheroPainting_Logo_Horizontal.png" id="img">
      </router-link>
      <nav id="menu">
          &nbsp;<router-link :to="{ name : 'about-ranchero' }">About Ranchero</router-link>
          &nbsp;<router-link :to="{ name : 'services' }">Services</router-link>
          &nbsp;<router-link :to="{ name : 'gallery' }">Gallery</router-link>
          &nbsp;<router-link :to="{ name : 'contact-us' }" >Contact Us</router-link>
      </nav>
    </div>
      <nav id="right-nav">
        &nbsp;<router-link :to="{ name : 'get-a-quote' }" >
            <button class="get-quote-btn btn">Get a Quote</button>
        </router-link>
        &nbsp;<router-link :to="{ name : 'contact-us' }" >
            <button class="contact-us-btn btn" >Contact Us</button>
        </router-link>
    </nav>
  </header>
  <router-view/>
  <div class="footer">
    <p>Copyrighted 2024</p>
  </div>
</template>

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
  justify-content: space-between;
  align-items: center;
}

#img {
  /* border: 1px solid black; */
  /* object-fit: cover; */
  /* height: 100px !important; */
  width: 250px;
}

.menu-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

#menu {
  display: flex;
  gap: 20px;
}

#menu a {
  text-decoration: none;
  font-size: 17px;
  text-transform: uppercase;
  color: var(--light-green)
}

#menu a:hover {
  color: var(--hover-green);
  transition: color 300ms ease-in-out;
}

.btn {
  position: relative;
}

.btn.get-quote-btn::before {
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

.btn.get-quote-btn {
  z-index: 1;
}

.btn.get-quote-btn:hover::before,
.btn.get-quote-btn:focus::before {
  transform: scaleX(1);
}

.btn.get-quote-btn:hover::after,
.btn.get-quote-btn:focus::after {
  transform: scaleX(0);
  z-index: -1;
}


.get-quote-btn {
  padding: 10px 20px;
  font-size: 18px;
  color: var(--light-green);
  background-color: white;
  border: 1px solid var(--light-green);
  border-radius: 3px;
  text-transform: uppercase;
}

.get-quote-btn:hover {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  /* color: var(--hover-green); */
  color: var(--brown);

  /* background-color: var(--light-green); */
  /* border: 1px solid var(--hover-green); */
  border-radius: 3px;
}

.contact-us-btn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: var(--light-green);
  border-radius: 3px;
  color: white;
  border-bottom: none !important;
}

.contact-us-btn:hover {
 cursor: pointer; 
}

#right-nav {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.router-link-active {
  border-bottom: 1.5px solid var(--light-green);
  padding-bottom: 3px;
}

</style>
<script setup>

</script>