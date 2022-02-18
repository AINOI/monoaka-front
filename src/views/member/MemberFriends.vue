<template lang="pug">
b-container#memberfriends.my-5
  b-row.my-5
    b-col(cols='4')
      b-card(img-src='https://picsum.photos/500/500/?image=90' img-top)
        b-card-text.h2 458
        b-button Go!
    b-col(cols='4')
      b-card(img-src='https://picsum.photos/500/500/?image=90' img-top)
        b-card-text.h2 458
        b-button Go!
    b-col(cols='4')
      b-card(img-src='https://picsum.photos/500/500/?image=90' img-top)
        b-card-text.h2 458
        b-button Go!
    b-col(cols='4')
      b-card(img-src='https://picsum.photos/500/500/?image=90' img-top)
        b-card-text.h2 458
        b-button Go!
    b-col(cols='4')
      FriendCard()
</template>

<script>
import FriendCard from '../../components/FriendCard.vue'

export default {
  components: {
    FriendCard
  },
  data () {
    return {
      user: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/friendget')
      console.log(data)
      this.user = data.result
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
