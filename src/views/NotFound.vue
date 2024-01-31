<template>
    <div class="container" >
        <img alt="" :src="imageUrl" v-if="imageUrl !== null">
        <div  class="page_info" href="" >
            <div class="div">
                <h1>404</h1>
                <p>Your page request was not found.</p>
            </div>
        </div>
    </div>
        
        <div id="unsplash" v-if="this.imageUrl !== null">
            <a :href="this.imageUrl" target="_blank">Photo</a> by <a :href="this.creatorUrl" target="_blank"> {{ creator }}</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a>
        </div>
    </template>

<script>
    // import { createApi } from 'unsplash-js';
    // on node server
    // const api = createApi(
    //     {accessKey: 'lT97a1LrKNpbrpoQ_QlqrWa_8SmU60nod18nC3KhhWs',
        // fetch: nodeFetch
    // })

    export default {
        data() {
        return { 
            // imageUrl: null,
            // creator: null,
            // creatorUrl: null
            // randomPhoto: null,

            }
        },
        async mounted() {
            // let response = await api.search.getPhotos({ query: 'paint', orientation: 'landscape'});
            // console.log(response)
            // const randomNum = Math.floor(Math.random()*9)
            // let data = response.response.results[randomNum];
            // this.imageUrl = data.urls.full;
            // this.creator = data.user.first_name;
            // this.creatorUrl = data.user.links.html;

            // let res = await api.
            // console.log(res)
            // console.log("random: ", res.response.urls.regular)
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
    
    .container img {
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
        width: 60%;
        border-radius: 7px;
        /* display: flex; */
        /* background-color: var(--brown); */
        /* background-color: rgba(146, 96, 30, 0.698); */
        background-color: #40530dab;
        color: white;
    }

    .page_info p, .page_info h1 {
        width: 100%;
    }

    .unsplash {
        text-decoration: none;
    }

    a:link {
        text-decoration: none;
    }

    .div{
        padding: 20px 0;
    }
</style>