<template>
    <div class="services-container">

        <div class="services-inner-container">
            <div class="services-inner">
                <div class="services-inner-front">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
                <div class="services-inner-back">
                    <h2>Bedrooms</h2>
                    <a>Starting at $175</a>
                </div>
            </div>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Family/living room</h2>
            <button>Starting at $250</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Kitchen</h2>
            <button>Starting at $175</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Bathrooms</h2>
            <button>Starting at $125</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Closets</h2>
            <button>Starting at $65</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Hallway</h2>
            <button>Starting at $85</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Dining room</h2>
            <button>Starting at $175</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Stairways</h2>
            <button>Starting at $150</button>
        </div>
        <div>
            <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
            <h2>Foyer</h2>
            <button>Starting at $125</button>
        </div>
</div>
<p>Visit our Facebook page for more information</p>
</template>
<script>

</script>

<style>

.services-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    flex-wrap: wrap;
    border: 1px solid black;
}
.gallery-img {
    /* width: 300px; */
    object-fit: cover;
    /* perspective:  */
    backface-visibility: hidden;
    background: linear-gradient();
}



.services-inner-container {
    position: relative;
    width: 300px;
    height: 65px;
    perspective: 1000px;
}

.services-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.services-inner-container:hover .services-inner {
    transform: rotateY(-180deg);
    border: 1px solid black;
}

.services-inner-front, .services-inner-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: linear-gradient(var(--light-blue), var(--darker-blue))
    /* background-image: url(../assets/images/pexels-roman-zorge-19358420.jpg); */
}

.services-inner-back {
    /* background: linear-gradient(var(--light-green), var(--darker-green));
    color: #fff; */
    /* transform: rotateY(180deg); */
}


</style>s