<template lang="pug">
b-container#home.px-0.h-100(fluid)
  b-carousel#carousel-fade(style='text-shadow:0px 0px 2px #000;' controls fade :interval="5000")
    b-carousel-slide(caption='First slide' img-src="https://picsum.photos/1440/400/?image=20")
      b-button.aino-btn-primary.btn-position 了解更多
    b-carousel-slide(caption='Second slide' img-src="https://picsum.photos/1440/400/?image=8")
      b-button.aino-btn-primary.btn-position 了解更多
    b-carousel-slide(caption='Third slide' img-src="https://picsum.photos/1440/400/?image=18")
      b-button.aino-btn-primary.btn-position 了解更多
    //- novels rank(need mark)
  b-container.w-100
    b-row
      b-col.my-5.aino-osusume(cols='12')
        | 每週推薦
    b-row.mt-0
      b-col(cols='12' v-for='novel in novels' :key='novel._id')
        NovelsCard(:novel='novel')
  footer
    b-container#copyright.copyright(fluid)
      .h-100.d-flex.justify-content-center.align-items-center
        b-row.m-0
          b-col.font-white.h3(cols='12') Copyright &copy; 2022 Aino Studio. All rights reserved.
</template>

<style lang="scss">
@import '../../scss/aino-style.scss';

</style>

<script>
import NovelsCard from '../components/NovelsCard.vue'

export default {
  components: {
    NovelsCard
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      novels: []
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
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
