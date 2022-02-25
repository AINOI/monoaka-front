<template lang="pug">
b-container#memberfriends.my-5
  b-row.my-5
    b-col.mb-5(cols='4' v-for='friend in friendList' :key='friend._id')
      FriendCard(:friend='friendlist')
</template>

<script>
import FriendCard from '../../components/FriendCard.vue'

export default {
  components: {
    FriendCard
  },
  data () {
    return {
      friendList: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/nauthorgetall')
      console.log(data)
      this.friendList = data.result
    } catch (error) {
      this({
        icon: 'error',
        title: '錯誤',
        text: '好友資訊取得失敗'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
