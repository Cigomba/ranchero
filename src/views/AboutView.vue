<template>
    <div class="about-container">
      <div class="banner">
      </div>
      
      <div class="about">
        <!-- <img src="../assets/images/pexels-lukas-684385.jpg" id="img" alt=""> -->
    <h1>About RANCHERO PAINTING</h1>
    <div class="background">
      <h3>Background</h3>
      <p>Ranchero painting came to be when Axel, CEO and owner came up with the idea. He envisioned starting a painting company for himself, and took the initiative to create one. </p>
      <p>Axel is a hard-working young man who loves to work with his hands and understand not only the value of hard-work, but also the price of quality work. That's why he does his best with every house he paints. He seeks to leave a good impression and find both himself and the customer satisfied with the work.</p>
      <p>As a company, Ranchero is still in it's budding stages. It's just getting off it's feet and learning how to maneuver in the business world. We hope to grow into a sizable company that other businesses and especially people can depend for quality work to be done.</p>
    </div>
    <div class="Vision">
      <h3>Vision</h3>
      <p>Our vision is to change lives using brushes and paint-sprayers! We see our work as life-changing, because changing your environment by simply repainting a room or wall can drastically change the outcome of your perception of things around you, which can change your life! </p>
    </div>
    <div class="Mission">
      <h3>Mission</h3>
      <p>Our mission is to focus on one house or painting job at a time. We don't want to lose sight of our vision, but the daily grind is what helps the vision thrive.</p>
    </div>
    <div class="Values">
      <h3>Values</h3>
      <p>We value hardwork, empathy, and quality. Hardwork gets the job done, empathy helps us relate and attend to the needs of our customers, and quality brings customer satisfaction.</p>
    </div>
    
    <div class="">
      <h3>Follow us on social media for more!</h3>
      <SocialComponent />
    </div>
  </div>
</div>
</template>
<script>
import SocialComponent from '../components/SocialComponent.vue';

export default {
  data () {
    return {}
  },
  name: 'AboutView',
  components: {
    SocialComponent
  },
  mounted () {
    
  }
}
</script>
<style scoped>
#img {
  display: block;
  max-width: 100vw;
  /* width: 1000px; */
  height: auto;
  /* vertical-align: middle; */
}

.banner {
  background-image: url(../assets/images/pexels-roman-zorge-19358420.jpg);
  height: 30vh;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 1px solid;
}

.background {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

h1, h3, h6 {
  text-align: left;
  padding: 20px 0px;
}

p {
  text-align: left;
  /* padding: 0px 10%;   */
  /* margin: 0px; */  
}

.about-container {
  padding-bottom: 20%;
}
.about {
  padding: 0px 10%;
}
</style>