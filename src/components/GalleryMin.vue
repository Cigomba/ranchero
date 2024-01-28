<template>
  <!-- <div>
        <ul>
          <li v-for="(image, index) in images" :key="image.id" :ref="(el) => (imgElements[index] = el)"> -->
            <!-- <img src="#" alt=""> -->
          <!-- {{ image }} -->
          <!-- {{ index }}
          </li>
        </ul>
    </div> -->

    <div class="gallery-min">
            <div class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.18 PM.jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.59 PM.jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.26.12 PM.jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-10 at 2.54.48 PM.jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(1).jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
              <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(4).jpeg" id="img1" alt="">
            </div>
            <div class="img-container">
              <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" id="img1" alt="">
            </div>
            <div class="img-container last-img" id="last-img">
              <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" id="img1" alt="">
              <button id="more-btn">More Gallery <i class="fa-solid fa-arrow-right"></i></button>
            </div>
      </div>
</template>

<script>

</script>

<style scoped>

  img {
    /* max-width: 300px; */
    width: 280px;
    height: 350px;
    object-fit: cover;
    object-position: center;
  }
  .gallery-min {
    /* max-width: 50%; */
    max-width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    gap: 20px;
  }

  .last-img {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }  

  .last-img img:hover {
    /* filter: brightness(30%); */
    cursor: pointer;
  }
.last-img:hover {

}

  #more-btn {
    position: absolute;
    border: none;
    border-radius: 10px;
    /* top: 50%;
    left: 28%; */
    padding: 10px 20px;
    font-size: 18px;
    color: white;
    background-color: var(--brown);
    /* align-self: center; */
  }
  
  #more-btn:hover {
    cursor: pointer;
    /* transform: scale(1.2); */
  }

</style>