<template>
  <div class="main">
    <div class="left-side">
      <div class="head-text">
        <h3>RANCHERO PAINTING</h3>
        
        <h1>Get a Quote</h1>
        <p>If you want to get started, please reach out to us to get a quote. The fastest way to do so is with a quick phone call to our phone number. We can also book you an appointment so you can see about how much everything is gonna cost.</p>
      </div>
      
      <div class="contact-info-container">
        
        <div class="contact-info" id="first-contact">
          <div class="contact-info-titles">
            <i class="fa fa-clock"></i>
            <h4>Hours</h4>
          </div>
          <p>Always open</p>
        </div>
        <div class="contact-info">
          <div class="contact-info-titles">
            <i class="fa fa-bell"></i>
            <h4>Online Booking</h4>
          </div>
          <p>Coming soon</p>
        </div>
        <div class="contact-info">
          <div class="contact-info-titles">
            <i class="fa fa-envelope"></i>
            <h4>Email</h4>
          </div>
          <p>Rancheropainting@gmail.com</p>
        </div>
            <div class="contact-info">
              <div class="contact-info-titles">
                <i class="fa fa-location" ></i>
                <h4>Location</h4>
              </div>
              <p>
              <a href="https://maps.app.goo.gl/RGzabGLw4riW6V9r7">16609 E desmet Ct Spokane Valley, WA 99216</a>
            </p>
        </div>
      </div>
    </div>
    <div class="right-side">
      
      <ContactForm class="contact-form"/>
      <!-- <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.26.12 PM.jpeg" id="img"/> -->
    </div>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8539229008375!2d-117.1843988048028!3d47.66783410948274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361dfa2d5559f7d%3A0xecc89c9a960eed6c!2s16609%20E%20Desmet%20Ct%2C%20Spokane%20Valley%2C%20WA%2099216!5e0!3m2!1sen!2sus!4v1705770719843!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
  </template>
<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: "GetQuoteView",
  components: { ContactForm }
}
</script>
<style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    width: 700px;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    padding: 20px 0;
    /* border: 1px solid black; */
  }

  .contact-info-titles {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  #first-contact {
    margin-top: 20px;
  }
  
  .map {
    width: 100%;
  }

  .head-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    /* max-width: 500px; */
  }

  .head-text p {
    width: 560px;
  }
</style>