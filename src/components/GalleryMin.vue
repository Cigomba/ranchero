<template>
    <div class="gallery-section">
      <div class="gallery-header">
        <h4 style="font-weight: 500;">Quality Paint, Affordable Price.</h4>
        <h6 style="font-weight: 200;">Our featured work</h6>
      </div>
        <!-- <GalleryMin /> -->
    </div>
</template>

<script>
import { createApi } from 'unsplash-js';


// const photos = [];

const unsplash = createApi({
    accessKey: 'lT97a1LrKNpbrpoQ_QlqrWa_8SmU60nod18nC3KhhWs'
})

export default {
    data(){
        return {
            photos: []
        }
    },
    mounted () {
        unsplash.search.getPhotos({ query: "green", orientation: "landscape"})
        .then(response => {
            console.log(response.response.results)
            this.photos = response.response.results;
        })
    }
}
</script>

<style>


.gallery-section {
    margin-top: 5px;
    border: 1px solid green;
    height: fit-content;
    padding: 20px 10% 0;
    color: white;
    background-color: var(--brown);
    padding-top: 6%;
  }

  .gallery-header {
    text-align: left;
  }

</style>