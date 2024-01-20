<template>
  <div id="services-banner">
    <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" id="services-banner-img" alt="">
    <h1 id="services-title">Services</h1>
  </div>
  <div>
    <h3 class="sub-paragraph">We wanted to share our prices with you. It makes getting a quote simple and easy!</h3>
  </div>
  <ServicesComponent />
  <div class="services-img-container">
    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="services-img" alt="">
  </div>
</template>
<script>
  import ServicesComponent from '../components/ServicesComponent.vue'

  export default {
    name: "ServicesView",
    components: { ServicesComponent }
  }
</script>
<style>
  #services-banner {
    position: relative;
    height: 20vh;
    overflow: hidden;
    border: 1px solid orange;
    /* background-image: url(../assets/images/WhatsApp\ Image\ 2022-07-18\ at\ 4.51.46\ PM\(2\).jpeg); */
  }

  #services-title {
    position: absolute;
    top: 65%;
    left: 10%;
    color: white;
  }

  .sub-paragraph {
    margin-top: 20px;
  }

  .services-img-container {
    width: 250px;
    height: 250px;
    border: 1px solid green;
  }

  .services-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

  }

  #services-banner-img {
    max-width: 100%;
    border: 1px solid blue;
  }
</style>