<template lang="pug">
b-container#memberothernovels
  b-row
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12' :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") 創作者作品列表
  b-row
    b-col(cols='12' v-for='novel in memberOthersNovelsFilter' :key='novel._id')
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
  computed: {
    memberOthersNovelsFilter () {
      return this.novels.filter(item => {
        if (item.authorId === this.$route.params.id) {
          return true
        }
      })
    }
  },
  // async created () {
  //   try {
  //     const { data } = await this.api.get('/users/' + this.$route.params.id)
  //     console.log(data)
  //     this.user = data.result
  //     this.user.tokens = ''
  //   } catch (error) {
  //     this.$router.push('/memberothers')
  //   }
  // }
  async created () {
    try {
      const { data } = await this.api.get('novels/')
      this.novels = data.result
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
