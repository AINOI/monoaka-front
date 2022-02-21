<template lang="pug">
b-container#home.px-0.h-100(fluid)
  HomePageCarousel
    //- novels rank(need mark)
  b-container.w-100
    b-row
      b-col.my-5.aino-osusume(cols='12')
        | 每週推薦
    b-row.mt-0
      b-col(cols='12' v-for='novel in novels' :key='novel._id')
        NovelsCard(:novel='novel')
</template>

<style lang="scss">
@import '../../scss/aino-style.scss';

</style>

<script>
import NovelsCard from '../components/NovelsCard.vue'
import HomePageCarousel from '../components/HomePageCarousel.vue'

export default {
  components: {
    NovelsCard,
    HomePageCarousel
  },
  data () {
    return {
      novels: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/novels')
      this.novels = data.result
    } catch (error) {
      this({
        icon: 'error',
        title: '錯誤',
        text: '文作取得失敗'
      })
    }
  }
}
</script>
