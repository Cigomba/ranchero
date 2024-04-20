<template>
  <div class="main-home">

    <div class="overflow-hidden">
      <img src="../assets/images/Screenshot 2022-07-18 161013_transparent.png
      " class="w-full h-auto object-contain scale-[1.075]" alt="">
  </div>
  <div class="bg-[var(--brown)] text-white">
    <div class="flex flex-col gap-10 h-[fit-content] py-28 px-[10%]">
      <div class="flex flex-col gap-2.5 text-left">
        <h4 class="text-xl font-medium">Quality Paint, Affordable Price.</h4>
        <h6 class="font-extralight">Our featured work</h6>
      </div>
      <GalleryMin/>
    </div>
  </div>
  <CustomerReview />
  <TalkProjectComponent />
  <FAQComponent />
</div>

</template>

<script>
// @ is an alias to /src
// import ButtonComponent from '@/components/ButtonComponent.vue'
import GalleryMin from '@/components/GalleryMin.vue'
import CustomerReview from '@/components/CustomerReview.vue'
import TalkProjectComponent from '@/components/TalkProjectComponent.vue'
import FAQComponent from '@/components/FAQComponent.vue'

export default {
  name: 'HomeView', 
  components: {
    // ButtonComponent, 
    GalleryMin,
    CustomerReview,
    TalkProjectComponent,
    FAQComponent,
  },
  mounted() {
    // console.log(this.$refs.gc);

  }
}

// exports = function() {
//   // const mongodb = context.services.get("mongodb-atlas");
//   // const itemsCollection = mongo.db("assets").collection("paint-jobs");
  
// }

</script>

<!-- const url = const. -->
<style scoped>

</style>