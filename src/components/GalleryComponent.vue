<template>
    <div class="gallery-images">

        <!-- <img v-for="pic in pictures" src="" alt="" /> -->
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <img id="img" class="img_card" src="../assets/images/pexels-tima-miroshnichenko-6474300.jpg" />
        <div class="img_card" id="last-img_card">
            <button>More Gallery</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "GalleryComponent"
}
</script>

<style>

    .gallery-images {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        gap: 20px;
        margin: 20px 10%;
    }
    
    .img_card {
        width: 300px;
        height: 400px;
        /* background-color: green; */
        /* width: fit-content; */
        background-image: url(../assets/images/pexels-tima-miroshnichenko-6474300.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid green;
    }

    
    #img {
        object-fit: cover;
        height: 400px !important;
        width: 300px !important;
    }
    
    #last-img_card {

    }

</style>