<template>
    <div class="gallery">
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.26.12 PM.jpeg" id="img1" alt="">
        </a>
        <a href="#" data-lightbox="mygaller">
            <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.18 PM.jpeg" alt="" id="img2">
        </a>
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.59 PM.jpeg" alt="" id="img3">
        </a>
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-05-10 at 2.54.48 PM.jpeg" alt="" id="img4">
        </a>
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(1).jpeg" id="img5" alt="">
        </a>
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" id="img6" alt="">
        </a>
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" id="img7" alt="">
        </a>
        <a href="#" data-lightbox="mygallery">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(4).jpeg" data-lightbox="img8" id="img8" alt="">
        </a>
        <a href="#">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM.jpeg" id="img9" alt="">
        </a>
        <!-- <div v-if="imageClicked"> -->
            <!-- </div> -->
        </div>
        <GalleryModalComponent />
</template>
<script>

import GalleryModalComponent from '../components/GalleryModalComponent.vue'

export default {
    data() {
        return {};
    },
    components: {
        GalleryModalComponent
    }
}

</script>

<style scoped>
.gallery {
    padding: 50px 10%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* background-color: var(--brown); */
    
}
.gallery img {
    width: 350px;
    max-width: fit-content;
    object-fit: cover;
    cursor: pointer;
    filter: grayscale(50%);
    transition: 0.8s;
}
.gallery img:hover {
    /* opacity: 0.8; */
    filter: brightness(100%);
    transform: scale(1.1);
    /* filter: ; */
}

</style>