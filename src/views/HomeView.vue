<template>
  <div id="services-banner">
    <img src="../assets/images/Screenshot 2022-07-18 161013_transparent.png
    " id="services-banner-img" alt="">
  </div>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="main-hero">
      <div class="main-hero-content">
        <h1> Affordable House Painting in Phoenix Arizona</h1>
        <p>We provide quality painting services for residential, commercial, or business projects at a reasonable price.</p>
          <ButtonComponent msg="Book Appointment" fullBtn="false" class="btn"/>
      </div>
    </div>
    <div class="gallery-section">
      <div class="gallery-header">
        <h4 style="font-weight: 500;">Quality Paint, Affordable Price.</h4>
        <h6 style="font-weight: 200;">Our featured work</h6>
      </div>
        <GalleryMin />
    </div>
  </div>

  
</template>

<script>
// @ is an alias to /src
import ButtonComponent from '@/components/ButtonComponent.vue'
import GalleryMin from '@/components/GalleryMin.vue'

export default {
  name: 'HomeView', 
  components: {
    ButtonComponent, 
    GalleryMin
  }
}

// exports = function() {
//   // const mongodb = context.services.get("mongodb-atlas");
//   // const itemsCollection = mongo.db("assets").collection("paint-jobs");
  
// }

</script>

<style>
  .main-hero {
    background-image: url(../assets/images/pexels-tima-miroshnichenko-6474300.jpg);
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    margin-top: 20px !important;
  }

  .main-hero-content {
    /* position: absolute;
    top: 50%;
    left: 50%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    color: white;
    text-align: left;
    /* margin-top: 20px; */
  }

  h1 {
    margin-top: 15px;
  }
  .main-hero-content * {
    /* gap: 50px; */
    padding: 10px;
  }

  .gallery-section {
    background: linear-gradient(var(--light-blue), var(--darker-blue));
  }

  .services-banner {
    /* height: 100%; */
    /* overflow: auto; */
  }

  #services-banner-img {
    /* height: 100vh; */
  }

</style>