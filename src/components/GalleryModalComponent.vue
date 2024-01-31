<template>
    <div class="container">
        <div>
            <h3>Hello! Wanna see more pictures? Check out our facebook page, you will not be disappointed.</h3>
        </div>
        <div>
            <p>Our facebook page contains photos. <i class="fa fa-heart heart"></i> </p>
        </div>
        <div class="lower-buttons">
                <button class="fb"> <i class="fa fa-facebook"></i> Facebook</button>
            <button>I'm okay</button>
            <a href="">no thanks</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    background-color: green;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 700px;
    padding: 50px;
    margin-top: 20px;
}

.lower-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
}

.lower-buttons button {
    padding: 10px 20px;
    border-radius: none;
    border: none;
}

a {
    text-decoration: underline;
    color: white;
}

.fb {
    background-color: rgb(0, 106, 255);
    color: white;
}
.heart {
    color: white;
}

</style>