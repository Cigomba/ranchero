<template>
    <div class="all_container">

        <div class="services-container">
            
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front">
                    <div class="services-service-front-text">
                        <h2>Bedrooms</h2>
                        <a>Starting at $175</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front make-yellow">
                    <div class="services-service-front-text">
                        <h2>Family/living room</h2>
                        <a>Starting at $250</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front">
                    <div class="services-service-front-text">
                        <h2>Kitchen</h2>
                        <a>Starting at $175</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front make-yellow">
                    <div class="services-service-front-text">
                        <h2>Bathrooms</h2>
                        <a>Starting at $125</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front">
                    <div class="services-service-front-text">
                        <h2>Closets</h2>
                        <a>Starting at $65</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front make-yellow">
                    <div class="services-service-front-text">
                        <h2>Hallway</h2>
                        <a>Starting at $85</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front">
                    <div class="services-service-front-text">
                        <h2>Dining Room</h2>
                        <a>Starting at $175</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front make-yellow">
                    <div class="services-service-front-text">
                        <h2>Stairways</h2>
                        <a>Starting at $150</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
        <div class="services-service-main">
            <div class="services-service-card">
                <div class="services-service-front">
                    <div class="services-service-front-text">
                        <h2>Foyer</h2>
                        <a>Starting at $125</a>
                    </div>
                </div>
                <div class="services-service-back">
                    <img src="../assets/images/pexels-roman-zorge-19358420.jpg" class="gallery-img" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="more-info">
        <p>Visit our Facebook page for more information</p>
    </div>
</div>
</template>
<script>

</script>

<style scoped>

.all_container {
    margin: 0 10%;
}

.services-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;
    flex-wrap: wrap;
    border: 1px solid yellow;
    padding: 50px 0px;
}

.services-service-main {
    position: relative;
    width: 300px;
    height: 320px;
    /* background: green; */
}



.services-service-card {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    /* background: yellow; */
}

.services-service-card:hover {
    transform: rotateY(-180deg);

}

.services-service-front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: var(--light-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.services-service-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #ffc728;
    color: #333;
    transform: rotateY(180deg);
    overflow: hidden;
}

.services-service-front-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
}

.make-yellow {
    background: var(--yellow);
}

.services-service-back img {
    width: 100%;
} 

.more-info {
    border: 1px solid saddlebrown;
    text-align: left;
}

@media screen and (width <= 400) {
    .services-service-main {
    position: relative;
    width: 80px;
    height: 100px;
}
}
</style>s