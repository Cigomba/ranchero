<template>
    <div class="gallery">
      <h1>Gallery</h1>
      <p>View our work for yourself. We are not shy to show you!</p>
      <GalleryComponent />
    </div>
</template>
<script>
import GalleryComponent from '@/components/GalleryComponent.vue';

export default {
  name: "GalleryView",
  components: { GalleryComponent }
}

</script>
<style></style>