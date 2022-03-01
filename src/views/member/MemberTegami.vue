<template lang="pug">
b-container#membertegami
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12' :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") 創作者手紙
  div
    b-table(striped :hover='!user.themeSwitcher' :items='items' :fields='fields' :class="{textDark:user.themeSwitcher, light:!user.themeSwitcher}")
      template(#cell(openMail)='data')
        b-btn.aino-btn-third() 開啟信件
      template(#cell(deleteMail)='data')
        b-btn.aino-btn-danger() 刪除
</template>

<script>
export default {
  data () {
    return {
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'title', label: '文作名稱' },
        { key: 'novelType', label: '文作分類' },
        { key: 'publishDate', label: '上傳日期' },
        { key: 'openMail', label: '' },
        { key: 'deleteMail', label: '' }
      ],
      items: []
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
