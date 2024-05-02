<template>
    <div class="py-40 px-[10%] place-items-center flex flex-col">
        <div class="text-left text-l w-fit self-start">
            <h4 class="font-medium text-2xl max-w-prose">Here's What Some of Our Customers Are Saying</h4>
            <h6 class="font-extralight text-xl">Customer Reviews</h6>
        </div>
        <div class="mt-5 flex flex-col gap-52 place-items-center pt-7">
            <div class="review-block">
                <img src="../assets/images/pexels-daniel-xavier-1239291.jpg" alt="" class="shadow-2xl">
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
                <img src="../assets/images/pexels-andrea-piacquadio-3907440.jpg" alt="" class="shadow-2xl">
            </div>

            <div class="review-block">
                <img src="../assets/images/pexels-italo-melo-2379005.jpg" alt="" class="shadow-2xl">
                <div class="review-titles">
                <p>This that and the other about the current project. We'll get back to you with a real customer review!</p>
                <h3>Customer A</h3>
                </div>
            </div>
            <div class="flex place-items-center">
                <router-link class="see-more w-fit" :to="{ name : 'testimonials'}">
                    More Customer Reviews
                </router-link>
            </div>
        </div>
    </div>

</template>
<script>

</script>

<style scoped>
img {
    width: 350px;
    height: 250px;
    /* width: 50%;
    height: auto; */
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
    /* border: 3px solid orange; */

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
    border-radius: 3px;
    /* background-color: var(--light-green);
    color: white;
    text-decoration: none; */
    color: var(--light-green);
    background-color: white;
    border: 1px solid var(--light-green);
}

.see-more a {
    
}

.see-more:hover {
    color: var(--light-green);
    background-color: white;
    border: 1px solid var(--light-green);
    box-shadow: 0px 0px 10px var(--this-green);
    /* box-shadow: 10px 10px 4px var(--this-green); */
    cursor: pointer;
}

@media only screen and (max-width: 900px) {
    .titles {
        width: 150px;

    }

}

</style>