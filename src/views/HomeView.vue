<template>
  <div class="main-home">

    <div id="home-banner">
      <img src="../assets/images/Screenshot 2022-07-18 161013_transparent.png
      " id="home-banner-img" alt="">
  </div>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <div class="main-hero">
      <div class="main-hero-content">
        <h1> Affordable House Painting in Phoenix Arizona</h1>
        <p>We provide quality painting services for residential, commercial, or business projects at a reasonable price.</p>
        <ButtonComponent msg="Book Appointment" fullBtn="false" class="btn"/>
      </div>
    </div> -->
    <div class="gallery-section">
      <div class="gallery-header">
        <h4 style="font-weight: 500;">Quality Paint, Affordable Price.</h4>
        <h6 style="font-weight: 200;">Our featured work</h6>
      </div>
      <GalleryMin />
    </div>
    <CustomerReview />
    <TalkProjectComponent />
    <FAQComponent />
    <div class="footer">
      <FooterComponent />
      
    </div>
  </div>
</div>

  
</template>

<script>
// @ is an alias to /src
// import ButtonComponent from '@/components/ButtonComponent.vue'
import GalleryMin from '@/components/GalleryMin.vue'
import CustomerReview from '@/components/CustomerReview.vue'
import TalkProjectComponent from '@/components/TalkProjectComponent.vue'
import FAQComponent from '@/components/FAQComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView', 
  components: {
    // ButtonComponent, 
    GalleryMin,
    CustomerReview,
    TalkProjectComponent,
    FAQComponent,
    FooterComponent
  }
}

// exports = function() {
//   // const mongodb = context.services.get("mongodb-atlas");
//   // const itemsCollection = mongo.db("assets").collection("paint-jobs");
  
// }

</script>

<style scoped>
.main-home {
}

#home-banner {
    /* width: 100%; */
    /* height: auto; */
    /* height: 100vh; */
    /* overflow: auto; */
  }

  #home-banner-img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .main-hero {
    background-image: url(../assets/images/pexels-tima-miroshnichenko-6474300.jpg);
    height: 650px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    color: white;
    text-align: left;
  }
  
  .main-hero-content .btn {
    margin-top: 20px !important;
  }

  .main-hero-content * {
    /* gap: 50px; */
    padding: 10px;
  }

  .gallery-section {
    /* background: linear-gradient(var(--light-blue), var(--darker-blue)); */
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: fit-content;
    padding: 90px 10%;
    /* padding: 90px 10% 0; */
    color: white;
    background-color: var(--brown);

  }

  .gallery-header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;
    /* padding: 50px; */
  }
</style>