<template lang="pug">
b-container#adminnovelsList.my-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 文作管理
  b-table(striped hover :items='adminnovels' :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style="height: 50px;")
    template(#cell(publishState)='data')
      | {{ data.item.publish ? '已上架' : '下架中' }}
    template(#cell(unpublish)='data')
      b-btn.aino-btn-third(@click='adminUnpublishNovels(data.index)') 編輯
    template(#cell(republish)='data')
      b-btn.aino-btn-wood(@click='adminRepublishNovels(data.index)') 重新上架
    template(#cell(delete)='data')
      b-btn.aino-btn-danger(@click='adminDeleteNovels(data.index)') 刪除

  b-modal#modal-adminUnpublishNovels(
    size="lg"
    centered
    ok-title='下架'
    cancel-title='取消編輯'
    ok-variant='danger'
    cancel-variant='success'
    @ok="updatePublish(false)"
  )
    .h2.text-center 是否下架此篇文作?

  b-modal#modal-adminRepublishNovels(
    size="lg"
    centered
    ok-title='重新上架'
    cancel-title='取消編輯'
    ok-variant='success'
    cancel-variant='danger'
    @ok="updatePublish(true)"
  )
    .h2.text-center 是否重新上架此篇文作?

  b-modal#modal-adminDeleteNovels(
    size="lg"
    centered
    ok-title='確認刪除'
    cancel-title='取消刪除'
    ok-variant='danger'
    cancel-variant='success'
    @ok='deleteNovels'
  )
    .h2.deleteSignal.mx-auto.my-3
      div.deleteSignalText !
    .h2.text-center 是否刪除此文作?
</template>

<script>
export default {
  data () {
    return {
      form: {
        publish: false
      },
      adminnovels: [],
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'title', label: '文作名稱' },
        { key: 'novelType', label: '文作分類' },
        { key: 'publishDate', label: '上傳日期' },
        { key: 'publishState', label: '狀態' },
        { key: 'unpublish', label: '下架' },
        { key: 'republish', label: '重新上架' },
        { key: 'delete', label: '刪除' }
      ]
    }
  },
  methods: {
    adminUnpublishNovels (index) {
      this.form = { ...this.adminnovels[index], image: null, index }
      this.$bvModal.show('modal-adminUnpublishNovels')
    },
    adminRepublishNovels (index) {
      this.form = { ...this.adminnovels[index], image: null, index }
      this.$bvModal.show('modal-adminRepublishNovels')
    },
    adminDeleteNovels (index) {
      this.form = { ...this.adminnovels[index], image: null, index }
      this.$bvModal.show('modal-adminDeleteNovels')
    },
    async updatePublish (value) {
      try {
        const { data } = await this.api.patch('/novels/admin/' + this.form._id, { publish: value }, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.adminnovels[this.form.index] = { ...this.form, publish: value, image: data.result.image }
        this.$refs.table.refresh()
        console.log(data)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '編輯成功'
        })
        this.$bvModal.hide('modal-adminUnpublishNovels')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    async deleteNovels () {
      try {
        const { data } = await this.api.delete('/novels/admin/' + this.form._id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '文作刪除成功'
        })
        this.adminnovels.splice(this.form.index, 1)
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '文作刪除失敗'
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('novels/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.adminnovels = data.result
      this.adminnovels.reverse()
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
