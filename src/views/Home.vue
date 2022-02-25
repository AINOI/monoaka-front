<template lang="pug">
b-container#home.px-0.h-100(fluid)
  HomePageCarousel
    //- novels rank(need mark)
  b-container.w-100
    b-row
      b-col.my-5.aino-osusume(cols='12')
        | 每週推薦
    b-row.mt-0.mb-5
      NovelsCardTest
</template>

<style lang="scss">
@import '../../scss/aino-style.scss';

</style>

<script>
import NovelsCardTest from '../components/NovelsCardTest.vue'
import HomePageCarousel from '../components/HomePageCarousel.vue'

export default {
  components: {
    NovelsCardTest,
    HomePageCarousel
  }
}
</script>
