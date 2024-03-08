<template>
    <div class="project-container">
        <div class="text-container">
            <h1>Ready to start your <span>project</span>?</h1>
            <p>Fill in the form or give us a call.</p>
        </div>
        <div class="contact_container">
            <ContactForm class="contact"/>
        </div>
    </div>
</template>
<script>
    import ContactForm from '../components/ContactForm.vue'

    export default {
        components: {
            ContactForm
        }
    }
</script>

<style scoped>
.project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #333;
    place-items: center;
}

.text-container {
    color: white;
}

.contact_container {
    width: 100%;
    /* min-width: 100%; */
}

img {
    width: 300px;
}

span {
    color: orange;
}

.contact {
    background-color: transparent;
    border: none;
}

@media screen and (max-width: 900px) {
    .project-container {
        grid-template-columns: 1fr;
        padding: 50px 0px;
    }

    .contact_container {
        /* width: 100%; */
    }
    .contact {
        min-width: 200px;
    }
}

</style>