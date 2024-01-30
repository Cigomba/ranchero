<template>
    <div class="footer-container">
        <div>
            <img src="../assets/images/RancheroPainting_Logo_Horizontal.png" alt="">
        </div>
        <div class="inner-container">

            <div class="company">
                <h6>Company</h6>
                <div class="links">
                <a href="/about-ranchero">Our Story</a>
                <a href="/services">Services</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact-us">Contact Us</a>
            </div>
        </div>
        <div class="location">
            <h6>Location</h6>
            <div class="location-info">
                <p>(602) 123-4567</p>
                <p>123 Sesame Street Phoenix, AZ 92105</p>
                <p>rancheropainting@gmail.com</p>
            </div>
        </div>
        <div class="connect">
            <p>Connect with Ranchero:</p>
            <div class="icons">
                <a href="">
                    <i class="fa fa-facebook fa-2x"></i>
                </a>
                <a href="">
                    <i class="fa fa-instagram fa-2x"></i>
                </a>
                <a href="">
                    <i class="fa fa-whatsapp fa-2x"></i>
                </a>
            </div>
        </div>
    </div>
    </div>
    <div class="bottom-footer">
      <p>&copy; Copyright 2024 - Rancheropainting.com</p>
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
.footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 10%;
    background-color: var(--main-blue);
    color: white;
    text-align: left;
    gap: 30px;
    margin-top: 30px;
}

.inner-container {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    align-items: top;
    gap: 100px;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-wrap: nowrap;
    overflow: hidden;
}

.links a {
    color: white;
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
    color: white;
}

.icons a {
    text-decoration: none;
    color: inherit;
    /* color: var(--orange); */
    color: none;
}


.bottom-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10%;
  padding: 10px;
}

.footer-rs {
  display: flex;
  gap: 20px;
}


@media screen and (width < 720px) {
    .footer-container {
        display: flex;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .inner-container {
        display: flex;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;    
    }
}

</style>