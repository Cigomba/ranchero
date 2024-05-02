<template>
    <div class="footer-container">
        <router-link :to="{ name : 'home'}" >
            <div>
                <img src="../assets/images/RancheroPainting_Logo_Horizontal.png" alt="">
            </div>
            </router-link>
        <div class="inner-container">

            <div class="company">
                <h6 class="text-lg">Company</h6>
                <div class="links">
                    <router-link :to="{ name : 'about-ranchero' }" class="first">About Ranchero</router-link>
                    <router-link :to="{ name : 'services' }">Services</router-link>
                    <router-link :to="{ name : 'gallery' }">Gallery</router-link>
                    <router-link :to="{ name : 'contact-us' }" >Contact Us</router-link>
                </div>
            </div>
        <div class="location">
            <h6 class="text-lg">Location</h6>
            <div class="location-info">
                <p>(602) 123-4567</p>
                <p>123 Sesame Street Phoenix, AZ 92105</p>
                <p>rancheropainting@gmail.com</p>
            </div>
        </div>
        <div class="connect">
            <p class="connect-p text-lg">Connect with Ranchero:</p>
            <div class="icons">
                <a href="">
                    <i class="fa fa-facebook fa-3x"></i>
                </a>
                <a href="">
                    <i class="fa fa-instagram fa-3x"></i>
                </a>
                <a href="">
                    <i class="fa fa-whatsapp fa-3x"></i>
                </a>
            </div>
        </div>
    </div>
    </div>
    <div class="bottom-footer">
      <p>2024 - rancheropainting.com</p>
      <div class="footer-rs">
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a>
      </div>
  </div>
</template>
<script>

    export default {
        components: {  }
    }

</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

img {
    width: 250px;
}

a {
    text-decoration: none;
}


.footer-container {    
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    background-color: #C3BF6D;
    /* padding-bottom: 20px; */
    padding: 30px;
}

.inner-container {
    display: flex;
    place-items: center;
    justify-content: space-around;
    gap: 50px;      
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 5px;
    white-space: nowrap;
    overflow: hidden;
}

.links a {
    /* color: var(--main-blue); */
    color: var(--brown);
}

.links a:hover {
    text-decoration: underline;
}

.company, .location, .connect {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.location-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.icons {
    display: flex;
    gap: 50px;
    /* color: white; */
}

.icons a {
    text-decoration: none;
    color: black;
    /* color: transparent; */
}

.icons a:first-child {
    color: rgb(0, 106, 148);
}

.icons a:nth-child(2) {
    color: rgb(237, 82, 82);
}

.icons a:nth-child(3) {
    color: green;
}
.icons a:first-child:hover {
    /* color: rgb(0, 106, 148); */
    color: rgba(0, 106, 148, 0.50);
    transition: color 0.2s ease;
}

.icons a:nth-child(2):hover {
    color: rgba(237, 82, 82, 0.50);
    transition: color 0.2s ease;
}

.icons a:nth-child(3):hover {
    color: rgba(0, 128, 0, 0.50);
    transition: color 0.2s ease;
}

.bottom-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10%;
  padding: 20px;
}

.footer-rs {
  display: flex;
  gap: 20px;
}

.connect-p {
    width: 100%;
}

@media screen and (max-width: 720px) {
    .footer-container {
        /* display: flex;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap; */

    }

    
    .inner-container {
        display: grid;
        grid-template-columns: 1fr;
        width: 500px;
        /* display: flex;
        
        text-align: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap:  */
    }

    .company, .location, .connect {
        /* gap: 0px; */
    }
}

</style>