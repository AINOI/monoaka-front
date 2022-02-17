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
      novels: [],
      user: []
    }
  },
  components: {
    NovelsCard
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/' + this.$route.params.id)
      console.log(data)
      this.user = data.result
      this.user.tokens = ''
    } catch (error) {
      // this.$router.push('/memberothers')
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
