<template>
    <div class="project-container">
        <div class="text-container">
            <h1>Ready to start your <span>project</span>?</h1>
            <p>Fill in the form or give us a call.</p>
        </div>
        <div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    background-color: #333;
}

.text-container {
    color: white;
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

@media screen and (width < 900px) {
    .project-container {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 50px 50px;
    }

    .contact {
        /* width: 100%; */
    }
}

</style>