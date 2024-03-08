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
            <router-link class="see-more" :to="{ name : 'testimonials'}">
                See More Customer Reviews
            </router-link>
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

.review-container {
    padding: 90px 10%;
}

.reviews-block {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 200px;
    /* border: 1px solid gray; */
}

.titles {
    text-align: left;
    /* width: 200px; */
}

.review-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;

}

.review-block:nth-of-type(odd) {
    align-self: flex-start;
}
.review-block:nth-of-type(even) {
    align-self: flex-end;
}


.review-titles {
    min-width: 200px;
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
    padding: 15px 30px;
    border: none;
    background-color: var(--this-green);
    border-radius: 3px;
    color: white;
    text-decoration: none;
}

.see-more a {

}

.see-more:hover {
    cursor: pointer;
    /* box-shadow: 0px 0px 4px var(--this-green); */
}

@media only screen and (max-width: 900px) {
    .titles {
        width: 150px;
        
    }

}

</style>