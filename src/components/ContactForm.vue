<template>
        <form action="" class="form">
            <h3 id="title">Contact Us</h3>
            <input type="text" placeholder="Enter your name" />
            <input type="email" id="email" placeholder="Email Address"/>
            <input type="phone" id="phone" placeholder="Phone Number"/>
            <textarea name="" id="textarea" rows="10" cols="30" placeholder="Message"></textarea>
            <input type="submit" value="Submit" id="submit-btn"/>
        </form>
</template>

<script>

</script>

<style >

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 70px;
        background-color: var(--purple);
        border: 1px solid;
        border-radius: 3px;
    }
    input, textarea {
        width: 100%;
        padding: 10px;
    }
    
    #textarea {
        width: 100%;
    }

    label {
        padding: 0;
        margin: 0;
    }

    #title {
        padding: 0;
        margin: 0;
        text-align: left;
        color: white;
        text-transform: uppercase;
    }

    #submit-btn {
        border-radius: 3px;
        color: var(--purple);
        background-color: white;
        width: 100% !important;
        border: none;
        font-size: 18px;
        text-transform: uppercase;
    }
    
    #submit-btn:hover {
        cursor: pointer;
        border: 1px solid var(--purple);
        color: white;
        background-color: var(--light-green);
    }

</style>