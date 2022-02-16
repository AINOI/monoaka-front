<template lang="pug">
b-container#adminnovelsList.mt-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 文作管理
  b-table(striped hover :items='adminnovels' :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style="height: 50px;")
    template(#cell(edit)='data')
      b-btn.aino-btn-third(@click='editNovels(data.index)') 編輯
</template>

<script>
export default {
  data () {
    return {
      form: {
        image: null,
        title: '',
        summary: '',
        novelType: '',
        text: '',
        index: -1,
        _id: '',
        publishDate: new Date()
      },
      adminnovels: [],
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'title', label: '文作名稱' },
        { key: 'novelType', label: '文作分類' },
        { key: 'publishDate', label: '上傳日期' },
        { key: 'edit', label: '編輯' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('novels/', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.adminnovels = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '文作取得失敗'
      })
    }
  }
}
</script>
