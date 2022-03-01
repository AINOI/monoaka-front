<template lang="pug">
b-container#admin.mt-5(fluid)
  b-row
    b-col(cols='3')
      div.mx-3.py-3.px-3.aino-rounded.bg-white(:class="{whiteBoardDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-nav(pills justified vertical)
          b-nav-item.gen(to='/admin/admincarousel' exact exact-active-class='active') 主頁輪播圖管理
          b-nav-item.gen(to='/admin/adminnovels' exact exact-active-class='active') 文作管理
          b-nav-item.gen(to='/admin/adminmembers' exact exact-active-class='active') 用戶管理
          b-nav-item.gen(to='/admin/adminreports' exact exact-active-class='active') 問題回報管理
    b-col.mb-5(cols='9')
      div.mx-3.pt-3.h-100.aino-rounded.bg-white(:class="{whiteBoardDark:user.themeSwitcher, light:!user.themeSwitcher}")
        router-view
</template>

<style lang="scss">
@import '../../../scss/primary.scss';
.active {
  background: $third !important;
  color: $font-white !important;
}
.gen {
  a {
    color: $font-primary;
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
  }
}
</style>
