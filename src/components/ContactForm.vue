<template>
        <form action="" class="form">
            <h3 id="title">Contact Us</h3>
            <div class="input-container">
                <i class="fa-solid fa-user"> </i>
                <input type="text" placeholder="Enter your name" />
            </div>

            <div class="input-container">
                <i class="fa fa-envelope"></i>
                <input type="email" id="email" placeholder="Email Address"/>
            </div>
            <div class="input-container">
                <i class="fa fa-phone"></i>
                <input type="phone" id="phone" placeholder="Phone Number"/>
            </div>
            <div class="input-container" id="message-container">
                <i class="fa-solid fa-message"></i>
                <textarea name="" id="textarea" rows="10" cols="30" placeholder="What would you like us to know?"></textarea>
            </div>
                <input type="submit" value="Submit" id="submit-btn" @click="(el) => { console.log(el);}"/>
        </form>
</template>

<script>

export default {
    mounted () {
    }
}


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
        border: none;
        outline: none;
    }
    
    #textarea {
        box-sizing: border-box;
        /* width: 100% !important; */
        /* border: 1px solid orange; */
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
        /* border: 1px solid var(--purple); */
        color: white;
        background-color: var(--light-green);
    }

    .input-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 0 10px;
        /* color: white; */
        background: white;
        width: 100%;   
    }

    #message-container {
        align-items: start;
        /* padding-right: 0px !important; */
        border: 1px solid green;
    }

    #message-container i {
        padding-top:11px;
    }
</style>