<template>
    <div class="contact-us_container">
        <h3>RANCHERO PAINTING</h3>
        <h1>Contact Us</h1>
        <p>If you have any questions, comments, or concerns, or if you'd like to request a quote, please get in touch with us by using the contact form below. Thank you.</p>
        <div>
            <div></div>
            <div id="contact-us">
                <form action="" class="form">
                    <div>
                        <label for="name">Name</label>
                        <br />
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label for="name">Email</label>
                        <br />
                        <input type="email" id="email" />
                    </div>
                    <br />
                    <div>
                        <label for="msg">Message</label>
                        <br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ContactUsComponent"
    }
</script>

<style scoped>
    .form {
        /* display: block; */
        text-align: start;
        margin-left: 10%;
        padding: 0 33%;
        border: 1px solid;
    }

   .form input, textarea {
    padding: 10px 0.2em;
    width: 100%;
   }

   p {
    width: 50%;
    padding: 0 23%;
   }


    
</style>