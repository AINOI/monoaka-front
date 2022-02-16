<template lang="pug">
b-container#memberothernovels
  b-row
    b-col(cols='12' v-for='novel in novels' :key='novel._id')
      NovelsCard(:novel='novel')
</template>

<script>
import NovelsCard from '../../components/NovelsCard.vue'

export default {
  data () {
    return {
      novels: []
    }
  },
  components: {
    NovelsCard
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

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
