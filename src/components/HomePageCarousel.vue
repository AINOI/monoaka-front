<template lang="pug">
b-carousel#carousel-fade(style='text-shadow:0px 0px 2px #000;' indicators controls fade :interval="5000" background="#ababab")
  b-carousel-slide.imgstyle(v-for="image in carousel" :key="image._id" :img-src="image.carouselImage")
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      slide: 0,
      sliding: null,
      carousel: []
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
      const { data } = await this.api.get('/pages')
      this.carousel = data.result
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
}
</script>

<style lang="scss">
.imgstyle{
  height: 500px;
  img {
    height: 100%;
    object-fit: cover;
  }
}
.carousel-indicators {
  .active {
    background-clip: padding-box !important;
    background-color: #fff !important;
  }
}
</style>
