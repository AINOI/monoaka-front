<template lang="pug">
b-container#membernovels
  b-row.my-5
    b-col.d-flex.justify-content-center.align-items-center(cols='6')
      button.novelslistbtn.aino-rounded(@click='tolist' :class="{btnDark:user.themeSwitcher, light:!user.themeSwitcher}") 作品列表
    b-col.d-flex.justify-content-center.align-items-center(cols='6')
      button.novelslistbtn.aino-rounded(@click='towrite' :class="{btnDark:user.themeSwitcher, light:!user.themeSwitcher}") 創作
  router-view
</template>

<script>
export default {
  methods: {
    tolist () {
      this.$router.push('/member/membernovels/membernovelsList')
    },
    towrite () {
      this.$router.push('/member/membernovels/membernovelsWrite')
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
