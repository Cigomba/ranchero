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
            <a :href="require('/Users/Miler/Documents/Coding Projects/ranchero/src/assets/images/Screenshot 2022-07-18 161013_transparent.png')" class="img-container">
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
            <!-- See more galleries  -->
            <router-link :to="{ name : 'gallery' }" class="h-fit self-center">
            <div class="w-full flex gap-2.5 place-items-center rounded-md px-8 py-4 bg-[var(--purple)] whitespace-nowrap flex-wrap h-fit hover:cursor-pointer self-center text-xl">
                View gallery <i class="fa-solid fa-arrow-right"></i>
              </div>
            </router-link>
              <!-- <button id="more-btn">More Gallery <i class="fa-solid fa-arrow-right"></i></button> -->
          </div>
</template>

<script lang="js">
import SimpleLightbox from "simplelightbox";

export default {
  name: "GalleryMin",
  data () {
    return { 
      // img: require("../assets/images/Screenshot 2022-07-18 161013_transparent.png"),
      // img
    }
    //   imgArr: [
    //     {

    //     }
    //   ]
    // }
  },
  mounted () {
    let gallery = new SimpleLightbox(".gallery-min a");
    console.log(gallery);

    

        // gallery.on("show.simplelightbox", () => {
        //   alert('clicked');
        //   gallery.open();
        // })
       
        // gallery.on("error.simplelightbox", (error) => {
        //   console.log(error);
        //   gallery.close();
        //   // gallery.refresh();
        // })
      
        // gallery.on("next.simplelightbox", () => {
        //   gallery.next();
        // })
        // gallery.on("prev.simplelightbox", () => {
        //   gallery.prev();
        // })
        
    }
  }

</script>

<style scoped>

  img {
    /* height: 450px;
    width: 1000px; */
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .gallery-min {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    /* place-items: center; */
    /* justify-items: left; */
    justify-items: center;
    align-content: space-between;
    gap: 20px;
  }

  a > *:hover {
    box-shadow: 0px 0px 4px var(--this-green);
    cursor: pointer;
  }

  .btn_div {
    display: inline-flex;
    place-self: center;
    /* position: absolute; */

    /* margin-right: 10%; */
    /* width: fit-content; */
  }

  @media only screen and (max-width: 1120) { 
    
    .last-img {
      position: relative;
      
    }



    #more-btn a {
      position: absolute;
      border: 10px solid orange;


      /* align-self: flex-end; */
      /* background-color: var(--brown); */
      /* align-self: center; */
      /* justify-self: flex-end; */
    }

  }

</style>