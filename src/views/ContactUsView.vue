<template>
      <div class="contact-us-container">
           <div class="contact-us-text">
               <h1>Contact Us</h1>
               <p>If you have any questions, comments, or concerns, or if you'd like to request a quote, please get in touch with us by using the contact form. Thank you.</p>
           </div>
            <div class="contact-us-form-container">
                <ContactForm id="contact-us"/>
            </div>
            
        </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    name: "ContactUsView",
    components: { ContactForm }
}
</script>
<style scoped>
  .contact {
    /* border: 1px solid blue; */
  }
  
  .contact-us-container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-bottom: 100px;
  }
  
  .contact-us-text {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-us-form-container {
  }
  
  
  @media only screen and (max-width: 900px) {
    .contact-us-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    
    .contact-us-text {
      display: grid;
      grid-template-columns: 1fr 2fr;
      justify-content: center;
      padding: 25px;
      padding-right: 20px;
      width: 75%;
      margin: 0 auto;
      max-width: fit-content;
      /* width: 100% !important; */
    }

    .contact-us {
      /* border-radius: none; */
    }

    .inner-container {
      gap: 20px;
    }
    
  }

</style>