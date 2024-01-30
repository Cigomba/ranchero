<template>
    <div class="container">
        <a class="box btn" href="https://www.facebook.com/RancheroPainting" target="_blank">
                <i class="fa fa-facebook fa-2x"></i>
                <p class="words">Check us out on facebook</p>
        </a>
        <a class="box btn" href="https://www.instagram.com/ranchero_painting/" target="_blank">
                <i class="fa fa-instagram fa-2x"></i>
                <p class="words">Check out our instagram!</p>
        </a>
        <a class="box btn non-hover">
                <i class="fa fa-phone fa-2x"></i>
                <p class="words">(480) 819-5698</p>
        </a>
    </div>
</template>
<script>

</script>

<style>

.container {
    display: flex;
    gap: 10px;
    /* padding: 0 10%; */
    justify-content: space-evenly;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* min-width: 400px; */
    padding: 0 5px;
    height: 50px;
    border: 1px solid;
    text-align: center;
    width: auto;
    border-radius: 10px;
    padding: 0 20px;
    /* background-color: grey; */
    color: var(--purple);
}
.words {
    padding: 0 0 0 0px;
    margin: 0;
    white-space: nowrap;
}

.box:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}

a {
    text-decoration: none;
}

.btn {
    position: relative;
}

.box.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--orange);
    border-radius: 10px;
    z-index: -1;
    
    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
}

.btn.box:hover::before, .btn.box:focus::before {
    transform: scaleX(1);
}

.box.btn {
    z-index: 1;
}


@media screen and (width < 720px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn {
         width: 50%;
    }

}
</style>