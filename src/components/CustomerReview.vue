<template>
    <div class="review-container">
        <div class="titles">
            <h4 style="font-weight: 500;">Here's What Some of Our Customers Are Saying</h4>
            <h6 style="font-weight: 200;">Customer Reviews</h6>
        </div>
        <div class="reviews-block">
            <div class="review-block">
                <img src="../assets/images/pexels-daniel-xavier-1239291.jpg" alt="">
                <div class="review-titles">
                    <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                    <h3>Customer A</h3>
                </div>
            </div>

            <div class="review-block">
                <div class="review-titles">
                    <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                    <h3>Customer A</h3>
                </div>
                <img src="../assets/images/pexels-andrea-piacquadio-3907440.jpg" alt="">
            </div>

            <div class="review-block">
                <img src="../assets/images/pexels-italo-melo-2379005.jpg" alt="">
                <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
                </div>
            </div>
        </div>

        <div class="tracking"></div>
            <a class="see-more">See More Customer Reviews</a>
    </div>
</template>
<script>

</script>

<style scoped>
img {
    width: 350px;
    height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
}

.review-block img:hover {

}
.review-container {
    padding: 90px 10%;
}

.reviews-block {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 200px;
}
.titles {
    padding: 10px;
    text-align: left;
}

.review-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
}

.review-titles {
    width: 400px;
    /* color: white; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
}

.tracking {
    margin-top: 80px;

}

.see-more {
    padding: 10px 20px;
    border: none;
    background-color: var(--light-blue);
    border-radius: 3px;
    /* color: white; */
}

.see-more:hover {
    cursor: pointer;
}

</style>