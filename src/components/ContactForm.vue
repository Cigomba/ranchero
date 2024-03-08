<template>
        <form class="form" id="form">
            <h3 id="title">Connect with Us</h3>
            <div class="input-container">
                <i class="fa-solid fa-user"> </i>
                <input type="text" name="name" placeholder="Enter your name" />
            </div>

            <div class="input-container">
                <i class="fa fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="Email Address"/>
            </div>
            <div class="input-container">
                <i class="fa fa-phone"></i>
                <input type="phone" id="phone" name="phone" placeholder="Phone Number"/>
            </div>
            <div class="input-container" id="message-container">
                <i class="fa-solid fa-message"></i>
                <textarea id="message" name="message" rows="10" cols="30" placeholder="What would you like us to know?"></textarea>
            </div>
                <input type="submit" value="Submit" id="submit-btn" @click="handleForm($event)"/>
        </form>
</template>

<script>
import emailjs from '@emailjs/browser';

const service_id = "service_1lyeejp";
const template_id = "template_k6zzosm";
const public_key = "MzSIdgg5HdqE-3xBi";

export default {
    mounted () {
        
    },
    created() {
        
        
        emailjs.init(public_key);
    },
    methods: {
        
        handleForm(e) {
            e.preventDefault();
            // console.log(this.$el)
            emailjs.sendForm(service_id, template_id, "#form");

            // clear form
            console.log(this.$el[0])
            this.$el[0].value = '';
            this.$el[1].value = '';
            this.$el[2].value = '';
            this.$el[3].value = '';

            window.alert("Thank you for contacting us. We'll be in contact soon.")
        }
    }
}


</script>

<style scoped>

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
        min-width: 50%;
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
        color: white;
        /* width: 100% !important; */
        border: none;
        font-size: 18px;
        text-transform: uppercase;
        background-color: white;
        color: var(--purple);
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
    }

    #message-container i {
        padding-top:11px;
    }

    @media only screen and (max-width: 900px) {
        .form {
            padding: 30px 5%;
        }
        .input-container {
            /* max-width: 50%; */
            /* width: 100%; */
            max-width: 100%;
            min-width: 50%;
        }

        #submit-btn {
            /* width: 50%; */
        }
    }
    @media only screen and (max-width: 500px) {
        .form {
            padding: 30px 5%;
            /* width: 100%; */
        }
        
        .input-container {
            /* max-width: 50%; */
            /* width: 100%; */
            /* max-width: 100%; */
            /* min-width: 50%; */
        }

        #submit-btn {
            /* width: 50%; */
        }
    }


    
</style>