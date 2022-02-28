<template lang="pug">
#app
  b-navbar.aino-bg-primary(toggleable='lg' type='dark')
    b-container(fluid)
      b-navbar-brand.logoBorder(to='/')
        .logoBorderInner Mono‘s Archive
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.h5.w-100.d-flex.justify-content-between
          div.d-flex.flex-column.flex-md-row
            b-nav-item.ml-md-3.aino-a-btn(to='/MNovels') 文作列表
            b-nav-item.ml-md-3.aino-a-btn(to='/MAbout') 關於Monoaka
            b-nav-item.ml-md-3.aino-a-btn(to='/MRules') Monoaka規範
            b-nav-item.ml-md-3.aino-a-btn(v-if='!user.isAdmin' to='/MReport') 問題回報
          div.d-flex.flex-column.flex-md-row.ml-md-5
            b-nav-item.ml-md-5.aino-a-btn.registerType(v-if='!user.isLogin' to='/register')
              .registerBox
              b-icon-book
              .registerTypeText 成為創作者
            b-nav-item.ml-md-5.aino-a-btn.bg-thirdAndHover(v-if='!user.isLogin' to='/login') 登入
            b-nav-item.ml-md-5.aino-a-btn.adminType(v-if='user.isLogin && user.isAdmin' to='/admin')
              b-icon-gear
              .adminTypeText 管理者頁面
            b-nav-item.ml-md-5.aino-a-btn.authorType(v-if='user.isLogin && !user.isAdmin' to='/member')
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
  }
}
</script>

<style lang="scss">
@import '../scss/aino-style.scss';

.mh-100{
  min-height: 100vh;
}

.logoBorder {
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  transition: 0.5s;
  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
  }
  &::after {
    content: '';
    width: 15px;
    height: 15px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: 0.5s;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }
  .logoBorderInner {
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    transition: 0.5s;
    z-index: 1;
    &::before {
      content: '';
      width: 0;
      height: 0;
      border-top: 2px solid transparent;
      border-right: 2px solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      transition: 0.5s;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-bottom: 2px solid transparent;
      border-left: 2px solid transparent;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.5s;
    }
  }
  &:hover ,
  &:hover .logoBorderInner{
      filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
    }
  &:hover .logoBorderInner::before,
  &:hover .logoBorderInner::after {
    width: 100%;
    height: 100%;
    border-color: white;
  }
  &:hover .logoBorderInner {
    background: #fff;
    color: $font-primary;
  }
}

.registerType {
  position: relative;
  z-index: 1;
  padding: 0 !important;
  a {
    display: flex;
    .registerTypeText {
      margin-left: 10px;
    }
    .registerBox {
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 0;
    height: 100%;
    transition: 0.5s ease-in-out;
    z-index: -2;
    }
  }
  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: 0.5s;
    z-index: -1;
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
  }
  &:hover a {
    color: $font-primary !important;
  }
  &:hover .registerBox {
    width: 100%;
    transition-delay: 0.3s;
  }
  &:hover::before {
    width: 100%;
    height: 100%;
    border-top: 2px solid $font-primary;
    border-left: 2px solid $font-primary;
  }
  &:hover::after {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid $font-primary;
    border-right: 2px solid $font-primary;
  }
}

.adminType {
  position: relative;
  z-index: 1;
  a {
    display: flex;
    .adminTypeText {
      margin-left: 10px;
    }
  }
  &::before {
    content: "";
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    transition: 0.5s;
    z-index: -1;
  }
  &::after {
    content: "";
    border-bottom: 2px solid transparent;
    border-right:  2px solid transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover::before {
    border-top: 2px solid white;
    border-left: 2px solid white;
    width: 100%;
    height: 100%;
  }
  &:hover::after {
    border-bottom: 2px solid white;
    border-right:  2px solid white;
    width: 100%;
    height: 100%;
  }
}

.authorType {
  position: relative;
  z-index: 1;
  a {
    display: flex;
    .authorTypeText {
      margin-left: 10px;
    }
  }
  &::before {
    content: "";
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    transition: 0.5s;
    z-index: -1;
  }
  &::after {
    content: "";
    border-bottom: 2px solid transparent;
    border-right:  2px solid transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover::before {
    border-top: 2px solid white;
    border-left: 2px solid white;
    width: 100%;
    height: 100%;
  }
  &:hover::after {
    border-bottom: 2px solid white;
    border-right:  2px solid white;
    width: 100%;
    height: 100%;
  }
}

.aino-a-btn {
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  transition: 0.5s;
  a {
    color: white !important;
  }
}

.bg-thirdAndHover {
  background: $third;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0));
  &:hover {
    background: $third-hover;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
  }
}

.bg-dangerAndHover {
  background: $problem;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0));
  &:hover {
    background: $problem-hover;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
  }
}
</style>
