<template lang="pug">
b-card(img-top :img-src='user.image')
  b-card-body.card-text-board
    b-card-title {{ user.nickname }}
    b-button.aino-btn-third(:to='"/memberothers/" + user._id') {{ user.nickname }} 的主頁
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      require: true
    }
  }
}
</script>
