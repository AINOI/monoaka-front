<template lang="pug">
b-card(img-top :img-src='user.image')
  b-card-body.card-text-board
    b-card-title {{ user.nickname }}
    b-button.aino-btn-third(:to='"/memberothers/" + this.id') {{ user.nickname }} 的主頁
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true
    }
  }
}
</script>
