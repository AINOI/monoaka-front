<template lang="pug">
#app
  b-navbar.aino-bg-primary(toggleable='lg' type='dark')
    b-container(fluid)
      b-navbar-brand(to='/') Mono‘s Archive
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.h5.w-100.d-flex.justify-content-between
          div.d-flex.flex-column.flex-md-row.ml-md-5
            b-nav-item.ml-md-5(to='/MNovels') 文作列表
            b-nav-item.ml-md-5(to='/MAbout') 關於Monoaka
            b-nav-item.ml-md-5(to='/MRules') Monoaka規範
            b-nav-item.ml-md-5(to='/MReport') 問題回報
          div.d-flex.flex-column.flex-md-row.ml-md-5
            b-nav-item.ml-md-5(v-if='!user.isLogin' to='/register') 成為創作者
            b-nav-item.ml-md-5(v-if='!user.isLogin' to='/login') 登入
            b-nav-item.ml-md-5(v-if='user.isLogin && user.isAdmin' to='/admin') 管理者頁面
            b-nav-item.ml-md-5(v-if='user.isLogin && !user.isAdmin' to='/member') 創作者頁面
            b-nav-item.ml-md-5(v-if='user.isLogin' @click='logout') 登出
  router-view
</template>

<script>
// dispatch = call actions.js
export default {
  data () {
    return {
      footerSwitch: true
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>

<style lang="scss">
@import '../scss/aino-style.scss';

</style>
