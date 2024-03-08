<template>
  <div class="services-banner">
    <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" id="services-banner-img" alt="">
    <h1 id="services-title">Services</h1>
  </div>
  <div class="services">
    <div class="services-header-text">
      <h3>We wanted to share our prices with you. It makes getting a quote simple and easy!</h3>
    </div>
    <ServicesComponent />
  </div>
</template>
<script>
  import ServicesComponent from '../components/ServicesComponent.vue'

  export default {
    name: "ServicesView",
    components: { ServicesComponent }
  }
</script>
<style scoped>

  .services {
    
  }

  .services-banner {
    position: relative;
    height: 25vh;
    overflow: hidden;
    /* background-image: url(../assets/images/WhatsApp\ Image\ 2022-07-18\ at\ 4.51.46\ PM\(2\).jpeg); */
  }

  #services-title {
    position: absolute;
    top: 65%;
    left: calc(10% + 82px);
    color: white;
  }

  .services-header-text {
    text-align: left;
    /* margin: 0 10%; */
    margin-top: 80px;
    padding-left: 82px;
    margin-bottom: 40px;
    border: 1px solid orange;
  }

  #services-banner-img {
    width: 100%;
  }
</style>