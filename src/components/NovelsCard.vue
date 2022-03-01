<template lang="pug">
b-card.card-novels.card-filter.mb-4(img-left :img-src='novel.image' img-width= 400 :class="{cardDark:user.themeSwitcher,textDark:user.themeSwitcher, light:!user.themeSwitcher}")
  b-card-body.card-text-board.pt-0
    b-card-title {{ novel.title }}
    b-card-sub-title.mb-2(:class="{textSecondDark:user.themeSwitcher, light:!user.themeSwitcher}") 文作分類:{{ novel.novelType }}
    b-card-text.summary-height {{ novel.summary }}
    b-btn.aino-btn-third(:to='"/novelpage/" + novel._id') 欣賞此作品
</template>

<script>
export default {
  props: {
    novel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card-img-left{
  object-fit: cover !important;
}
</style>
