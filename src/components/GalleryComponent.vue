<template>
    <div class="gallery-main grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 300}'>
            <div class="grid-item">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.26.12 PM.jpeg" id="img1" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.18 PM.jpeg" alt="" id="img2">
            </div>
            <div class="grid-item">
                <img src="../assets/images/WhatsApp Image 2022-05-04 at 6.25.59 PM.jpeg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/images/WhatsApp Image 2022-05-10 at 2.54.48 PM.jpeg" alt="" id="img3">
            </div>
            <div class="grid-item">
                <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(1).jpeg" alt="">
            </div>
        <div class="grid-item">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(2).jpeg" alt="">
        </div>
        <div class="grid-item">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(3).jpeg" alt="">
        </div>
        <div class="grid-item">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(4).jpeg" alt="">
        </div>
        <div class="grid-item">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM(4).jpeg" alt="">
        </div>
        <div class="grid-item">
            <img src="../assets/images/WhatsApp Image 2022-07-18 at 4.51.46 PM.jpeg" alt="">
        </div> 
    </div>
</template>
<script>


</script>

<style>

.gallery-main {
    padding: 50px 10%;
    border: 1px solid green;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--brown);
    margin-top: 50px;

}

.gallery-img-container {


}

.gallery-img-container img {
    object-fit: cover;
}

.gallery-img-container *:hover {
    opacity: 0.8;
    filter: blur(8px);
}

.gallery:hover {
    cursor: pointer;
}

.gallery-main * {
    width: 300px;
}

</style>