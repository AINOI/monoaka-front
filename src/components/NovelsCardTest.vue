<template lang="pug">
b-container.px-0(fluid)
  b-row.w-100(v-for='Ncard in novels' :key='Ncard._id')
    b-card.w-100.card-novels.card-filter.mb-4(:Ncard='Ncard.image' img-left :img-src='Ncard.image' img-width= 400 :class="{cardDark:user.themeSwitcher,textDark:user.themeSwitcher, light:!user.themeSwitcher}")
      b-card-body.card-text-board.pt-0
        b-card-title(:Ncard='Ncard.title') {{ Ncard.title }}
        b-card-sub-title.mb-2(:Ncard='Ncard.novelType' :class="{textSecondDark:user.themeSwitcher, light:!user.themeSwitcher}") 文作分類:{{ Ncard.novelType }}
        b-card-text.summary-height(:Ncard='Ncard.summary') {{ Ncard.summary }}
        b-btn.aino-btn-third(:to='"/novelpage/" + Ncard._id') 欣賞此作品
</template>

<script>
export default {
  data () {
    return {
      novels: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/novels')
      this.novels = data.result
      this.novels.reverse()
      this.novels.splice(5)
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
.card-img-left{
  object-fit: cover !important;
}
</style>
