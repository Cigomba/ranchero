<template>
  <header>
    <nav class="menu-nav">
    <router-link to="/"><img src="./assets/images/RancheroPainting_Logo_Horizontal.png" id="logo"></router-link>
      <nav id="menu">
        &nbsp;<router-link :to="{ name : 'about-ranchero' }">About Ranchero</router-link>
        &nbsp;<router-link :to="{ name : 'services' }">Services</router-link>
        &nbsp;<router-link :to="{ name : 'gallery' }">Gallery</router-link>
        &nbsp;<router-link :to="{ name : 'contact-us' }" >Contact Us</router-link>
      </nav>
    </nav>
      <nav id="right-nav">
        &nbsp;<router-link :to="{ name : 'get-a-quote' }" ><button class="get-quote-btn">Get a Quote</button></router-link>
        &nbsp;<router-link :to="{ name : 'contact-us' }" ><button class="contact-us-btn">Contact Us</button></router-link>
    </nav>
  </header>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Racing+Sans+One&family=Raleway&display=swap');

:root {
  --light-green: #9BAF62;
  --hover-green: #40530d;
  --orange: #e49a7d;
  --brown: #472F2F;
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
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid orange;
  /* justify-content: space-between !important; */
}



img {
  /* width: clamp(150px, 25%, 200px); */
  width: 150px;
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  color: #42b983;
  background-color: #2c3e50;
  text-transform: uppercase;
  font-size: 0.9em;
}

button:hover {
  cursor: pointer;
}

nav a {
  text-decoration: none;
  font-weight: semibold;
  text-transform: uppercase;
  color: var(--light-green);
  white-space: nowrap;
  font-size: 0.7em;
}

.menu-nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

#menu {
  margin-top: 10px;
}

#right-nav {
  margin-top: 10px;
}

.get-quote-btn {
  border: 1px solid var(--light-green);
  background-color: white;
  color: var(--light-green);
  padding: 10px;
}

.contact-us-btn {
  background-color: var(--light-green);
  color: white;
}

#menu *:hover {
  color: var(--orange)
}

.router-link-exact-active {
  color: var(--orange)
}
</style>
<script setup>
  // const { MongoClient } = require('mongodb')

  // let dbConnection;
  // let uri = "connectionString"

  // module.exports = {
  //   connectToDB: (cb) => {
  //     MongoClient.connect(uri)
  //     .then((client) => {
  //       dbConnection = client.db();
  //       return cb;
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       return cb(err)
  //     })
  //   },
  //   getDb: () => dbConnection
  // }

</script>