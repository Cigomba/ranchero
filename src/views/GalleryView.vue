<template>
    <div class="gallery">
      <div class="titles">
        <h1>Gallery</h1>
        <p>View our work for yourself. We are not shy to show you!</p>
      </div>
      <GalleryComponent class="comp"/>
    </div>
</template>
<script>
import GalleryComponent from '@/components/GalleryComponent.vue';

export default {
  name: "GalleryView",
  components: { GalleryComponent }
}

</script>
<style scoped>
  .titles {
    text-align: left;
    margin: 0 10%;
  }

  
</style>