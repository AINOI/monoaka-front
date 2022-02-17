<template lang="pug">
b-container#member.mt-5.h-100(fluid)
  b-row
    b-col(cols='3')
      div.mx-3.py-3.px-3.aino-rounded.bg-white
        b-nav(pills justified vertical)
          b-nav-item.gen(to='/member' exact exact-active-class='active') 創作者首頁
          b-nav-item.gen(to='/member/membernovels' exact exact-active-class='active') 作品頁面
          b-nav-item.gen(to='/member/memberfriends' exact exact-active-class='active') 好友列表
          b-nav-item.gen(to='/member/membertegami' exact exact-active-class='active') 創作者手紙
          b-nav-item.gen(to='/member/memberfavorite' exact exact-active-class='active') 喜愛作品
    b-col.mb-5(cols='9')
      div.mx-3.pt-3.h-100.aino-rounded.bg-white
        router-view
</template>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
