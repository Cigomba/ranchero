<template>
    <div class="py-28 px-[10%]">
        <div class="text-left text-l">
            <h4 class="font-medium">Here's What Some of Our Customers Are Saying</h4>
            <h6 class="font-extralight">Customer Reviews</h6>
        </div>
        <div class="mt-5 flex flex-col gap-52">
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

.titles {
    text-align: left;
    /* width: 200px; */
    font-size: larger;
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