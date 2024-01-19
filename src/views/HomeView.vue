<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="main-hero">
      <div class="main-hero-content">
        <h1> Affordable <span>House</span>Painting in Phoenix Arizona</h1>
        <p>We provide quality painting services for residential, commercial, or business projects at a reasonable price.</p>
        <ButtonComponent msg="Book Appointment" fullBtn="false" class="btn"/>
      </div>
    </div>
    <div class="gallery-section">
      <div class="gallery-header">
        <h4 style="font-weight: 500;">Quality Paint, Affordable Price.</h4>
        <h6 style="font-weight: 200;">Our featured work</h6>
      </div>
        <GalleryComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from '@/components/ButtonComponent.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'

export default {
  name: 'HomeView', 
  components: {
    ButtonComponent, 
    GalleryComponent
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
  }

  .btn {
    margin-top: 20px !important;
  }

  .main-hero-content {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 40%;
    color: white;
    text-align: left;
    /* margin-top: 20px; */
    border: 1px solid grey;
  }

  h1 {
    margin-top: 15px;
  }
  .main-hero-content * {
    /* gap: 50px; */
    padding: 10px;
  }

  .gallery-section {
    margin-top: 5px;
    border: 1px solid green;
    height: fit-content;
    padding: 20px 10% 0;
    color: white;
    background-color: var(--brown);
    padding-top: 6%;
  }

  .gallery-header {
    text-align: left;
  }

</style>