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
            <a href="../assets/images/WhatsApp Image 2022-05-04 at 6.25.18 PM.jpeg" class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.18 PM.jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-05-04 at 6.25.59 PM.jpeg" class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.59 PM.jpeg" id="img1" alt="">
              </a>
            <a href="../assets/images/WhatsApp Image 2022-05-04 at 6.26.12 PM.jpeg" class="img-container">
              <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.26.12 PM.jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-05-10 at 2.54.48 PM.jpeg" class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-05-10 at 2.54.48 PM.jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(1).jpeg" class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(1).jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" class="img-container">
                <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(4).jpeg" class="img-container">
              <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(4).jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" class="img-container">
              <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" id="img1" alt="">
            </a>
            <a href="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" class="img-container last-img">
                <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" id="img1" alt="">
              </a>
              <div class="btn_div">
                <!-- See more galleries  -->
                <router-link id="more-btn" :to="{ name : 'gallery' }" >View more from galleries <i class="fa-solid fa-arrow-right"></i> </router-link>
                <!-- <button id="more-btn">More Gallery <i class="fa-solid fa-arrow-right"></i></button> -->
              </div>
            </div>
</template>

<script lang="js">
import SimpleLightbox from "simplelightbox";


  let lightbox = new SimpleLightbox("a");
  console.log(lightbox.elements);
  // lightbox.open();
  

  
  export default {
    name: "GalleryMin",
    mounted () {
        lightbox.on("show.simplelightbox", () => {
          alert('clicked');
          lightbox.open();
        })
       
        lightbox.on("error.simplelightbox", (error) => {
          console.log(error);
          lightbox.close();
          // lightbox.refresh();
        })
      
        lightbox.on("next.simplelightbox", () => {
          lightbox.next();
        })
        lightbox.on("prev.simplelightbox", () => {
          lightbox.prev();
        })

    }
  }

</script>

<style scoped>

  img {
    width: 280px;
    height: 350px;
    object-fit: cover;
    object-position: center;
  }

  .gallery-min {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    flex-wrap: wrap;
    place-items: center;
    gap: 20px;
  }

  .gallery-min > *:hover {
    box-shadow: 0px 0px 4px var(--this-green);
  /* 0px 0px 4px var(--this-green); */
  cursor: pointer;
  border-radius: inherit;
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
  .img-container {
    /* border: 10px solid salmon; */
  }

  .btn_div {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    /* position: absolute; */

    /* margin-right: 10%; */
    /* width: fit-content; */
  }

  #more-btn {
    border: none;
    border-radius: 10px;
    /* top: 50%;
    left: 28%; */
    padding: 15px 30px;
    font-size: 15px !important;
    color: white;
    background-color: var(--purple);
    white-space: nowrap;
    /* align-self: flex-end; */
    /* background-color: var(--brown); */
    /* align-self: center; */
    justify-self: flex-end;
    text-decoration: none;
  }
  
  #more-btn:hover {
    cursor: pointer;
    /* transform: scale(1.2); */
  }

  @media only screen and (max-width: 1120) { 
    
    .last-img {
      position: relative;
      
    }



    #more-btn {
      position: absolute;
      border: 1px solid grey;

      /* align-self: flex-end; */
      /* background-color: var(--brown); */
      /* align-self: center; */
      /* justify-self: flex-end; */
    }

  }

</style>