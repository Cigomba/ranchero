<template>
    <div class="gallery">
      <div class="titles">
        <h1>Gallery</h1>
        <p>View our work for yourself. We are not shy to show you!</p>
      </div>
      <div class="comp">
        <GalleryComponent />
      </div>
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
.gallery {
  margin-top: 50px;
}

.titles {
  text-align: left;
}

.comp {
    padding: 0 10%;
    width: 100%;
    background-color: var(--brown);
  }

</style>