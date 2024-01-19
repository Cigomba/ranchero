<template>
    <div class="container" >
        <img alt="" :src="this.imageUrl">
        <div  class="page_info" href="" >
            <div class="404">
                <h1>404</h1>
                <p>Your page request was not found.</p>
            </div>
        </div>

        <div id="unsplash">
            <!-- <a :href="this.randomPhoto">Photo</a> by <a :href=""> {{ this.creator }}</a> on <a href="https://unsplash.com/">Unsplash</a> -->
        </div>
    </div>
</template>

<script>
    import { createApi } from 'unsplash-js';

    // on node server
    const api = createApi(
        {accessKey: 'lT97a1LrKNpbrpoQ_QlqrWa_8SmU60nod18nC3KhhWs',
        // fetch: nodeFetch
    })

    export default {
        data() {
        return { 
            imageUrl: null,
            // randomPhoto: null,
            // creator: null,

            }
        },
        async mounted() {
            let response = await api.search.getPhotos({ query: 'paint', orientation: 'landscape'});
            console.log(response)
            const randomNum = Math.floor(Math.random()*9)
            let data = response.response.results[randomNum];
            this.imageUrl = data.urls.regular;
            this.creator = data.user.first_name;

            // let res = await api.photos.getRandom();
            // // console.log(res)
            // console.log(res.response.urls.regular)
            // this.randomPhoto = res.response.urls.regular;
            // this.creator = res.response.user.first_name
        }
    }
</script>

<style scoped>
    .head_img {
        height: 100vh;
        border: 1px solid orange;
        background-image: url(../assets/images/pexels-tima-miroshnichenko-6474300.jpg);
        /* filter: blur(800px); */
        /* -webkit-filter: blur(8px); */
    }

    .container {
        position: relative;
        font-size: 2em;
        /* border: 1px solid yellow; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(50%);
        filter: blur(1px);
        /* opacity: 0.7; */
        
    }
    .page_info {
        position: absolute;
        top: 30%;
        left: 20%;
        /* display: flex; */
    }

    .page_info p, .page_info h1 {
        width: 100%;
    }
</style>