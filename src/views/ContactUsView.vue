<template>
      <div class="contact-us-container">
           <div class="contact-us-left-side">
               <h1>Contact Us</h1>
               <p>If you have any questions, comments, or concerns, or if you'd like to request a quote, please get in touch with us by using the contact form. Thank you.</p>
           </div>
            <div class="contact-us-right-side">
                <ContactForm />
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
<style>
  .contact {
    /* border: 1px solid blue; */
  }

  .contact-us-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-us-left-side {
    width: 700px;
  }



</style>