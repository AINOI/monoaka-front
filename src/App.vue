<template lang="pug">
#app(:class="{dark:themeSwitcher, light:!themeSwitcher}")
  b-navbar.aino-bg-primary(toggleable='lg' type='dark' :class="{navdark:themeSwitcher, light:!themeSwitcher}")
    b-container(fluid)
      b-navbar-brand.logoBorder(to='/')
        .logoBorderInner Mono‘s Archive
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.h5.w-100.d-flex.justify-content-between
          div.d-flex.flex-column.flex-md-row
            b-nav-item.ml-md-3.aino-b-btn(to='/MNovels') 文作列表
            b-nav-item.ml-md-3.aino-b-btn(to='/MAbout') 關於Monoaka
            b-nav-item.ml-md-3.aino-b-btn(to='/MRules') Monoaka規範
            b-nav-item.ml-md-3.aino-b-btn(v-if='!user.isAdmin' to='/MReport') 問題回報
          div.d-flex.flex-column.flex-md-row.ml-md-5
            b-nav-text.ml-md-5
              b-form-checkbox(switch v-model='themeSwitcher') 黑暗模式
            b-nav-item.ml-md-5.registerType(v-if='!user.isLogin' to='/register')
              .registerBox
              b-icon-book
              .registerTypeText 成為創作者
            b-nav-item.ml-md-5.aino-a-btn.bg-thirdAndHover(v-if='!user.isLogin' to='/login') 登入
            b-nav-item.ml-md-5.adminType(v-if='user.isLogin && user.isAdmin' to='/admin')
              b-icon-gear
              .adminTypeText 管理者頁面
            b-nav-item.ml-md-5.authorType(v-if='user.isLogin && !user.isAdmin' to='/member')
              b-icon-person
              .authorTypeText 創作者頁面
            b-nav-item.ml-md-5.aino-a-btn.bg-dangerAndHover(v-if='user.isLogin' @click='logout') 登出
  router-view.mh-100
  footer
    b-container#copyright.copyright(fluid)
      .h-100.d-flex.justify-content-center.align-items-center
        b-row.m-0
          b-col.font-white.h3(cols='12') Copyright &copy; 2022 Aino Studio. All rights reserved.
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
  },
  computed: {
    themeSwitcher: {
      get () {
        return this.user.themeSwitcher
      },
      set (value) {
        this.$store.dispatch('user/updateTheme', value)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../scss/aino-style.scss';

.dark {
  background: rgb(77, 77, 77) !important;
  transition: 0.3s;
}
.navdark {
  background: rgb(121, 121, 121) !important;
  transition: 0.3s;
}
.light {
  transition: 0.3s;
}
</style>
