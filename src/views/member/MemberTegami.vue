<template lang="pug">
b-container#membertegami
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 創作者手紙
  div
    b-table(striped hover :items='items' :fields='fields')
</template>

<script>
export default {
  data () {
    return {
      fields: ['寄件者', '信件標題', '收件時間'],
      items: [
        { 寄件者: '巧克力不黏', 信件標題: 'Thres masc', 收件時間: Date(Date.now()) }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
