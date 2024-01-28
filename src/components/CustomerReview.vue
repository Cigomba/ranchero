<template>
    <div class="review-container">
        <div class="titles">
            <h4 style="font-weight: 500;">Here's What Some of Our Customers Are Saying</h4>
            <h6 style="font-weight: 200;">Customer Reviews</h6>
        </div>
        <section aria-label="Customer Reviews" class="slider-container">
            <div class="carousel" ref="carousel">
                <button class="carousel-button-prev"><i class="fa fa-arrow-left"></i></button>
                <button class="carousel-button-next"><i class="fa fa-arrow-right"></i></button>
                <ul>
                    <li class="slide" data-active>
                        <img src="../assets/images/pexels-daniel-xavier-1239291.jpg" alt="">
                        <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
            </div>
                    </li>
                    <li class="slide">
                        <img src="../assets/images/pexels-andrea-piacquadio-3907440.jpg" alt="">
                        <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
            </div>
                    </li>
                    <li class="slide">
                        <img src="../assets/images/pexels-italo-melo-2379005.jpg" alt="">
                        <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
            </div>
                    </li>
                    <li class="slide">
                        <img src="../assets/images/pexels-mentatdgt-937481.jpg" alt="">
                        <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
            </div>
                    </li>
                </ul>
            </div>

        </section>
        <!-- <div class="review-slider">
            <img src="../assets/images/pexels-daniel-xavier-1239291.jpg" alt="">
            <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
            </div>
        </div> -->
        <div class="tracking"></div>
        <button class="see-more">See More Customer Reviews</button>
    </div>
</template>
<script>

</script>

<style scoped>
*, *::before, *::after {
    box-sizing: border-box;
}

.slide img {
    width: 350px;
    height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
}
.review-container {
    padding: 90px 10%;
}
.titles {
    padding: 10px;
    text-align: left;
}
/* 
.review-slider img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 8px;
} */

.review-slider {
    border: 1px solid salmon;
    border-radius: 8px;
    background-color: var(--purple);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    padding: 30px;
}

.review-titles {
    width: 400px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
}

.carousel {
    width: 80vw;
    height: 30vh;
    position: relative;
    /* border: 1px solid orange; */
    /* border-radius: 1px; */
}

.carousel > ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.slide {
    position: absolute;
    /* width: fit-content; */
    height: fit-content;
    background-color: var(--purple);
    inset: 0;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    border-radius: 5px;
}

.slide[data-active] {
    opacity: 1;
}

.carousel-button-prev, .carousel-button-next {
    position: absolute;
    background: none;
    border: none;
    font-size: larger;
    color: rgba(255,255,255,.5);
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: rgba(0,0,0,.1);
    border-radius: 100%;
    /* margin: 0 5px; */
}
.carousel-button-prev {
    left: 1rem;
}
.carousel-button-next {
    right: 1rem;
}

.carousel-button-prev:hover, .carousel-button-next:hover, .carousel-button-prev:active, .carousel-button-next:active {
    color: white;
    cursor: pointer;
    background-color: rgba(0,0,0,.2);
}

.carousel-button-next:focus, .carousel-button-prev:focus
    {
        outline: 1px solid #888;
    }


.see-more {
    background: none;
    border: none;
    font-weight: bold;
    padding: 15px 30px;
    /* border: 1px dashed grey; */
    color: var(--purple);
}
</style>