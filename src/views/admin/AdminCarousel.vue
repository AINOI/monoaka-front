<template lang="pug">
b-container#admincarousel.my-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 主頁輪播圖管理
  b-container#carouselChange(fluid)
    b-row
      b-col.add.mb-5(cols='4')
        b-btn(v-b-modal="'modal-carousel'") 新增
      b-col.d-flex.justify-content-center.mb-5(cols='4' v-for='image in carousel' :key='image._id')
        b-card.carousel-height(:img-src='image.carouselImage')
          b-btn(v-b-modal="'modal-delete' + image._id") 刪除圖片
            b-modal(
              size="md"
              centered
              ok-title='確認刪除'
              cancel-title='取消刪除'
              ok-variant='danger'
              cancel-variant='success'
              @ok='deleteCarousel(image._id)'
              :id='"modal-delete" + image._id'
            )
              .h2.deleteSignal.mx-auto.my-3
                div.deleteSignalText !
              .text-center.my-5.kakunin 是否刪除此圖片?
    b-modal#modal-carousel(
      size="md"
      centered
      ok-title='上傳'
      cancel-title='取消上傳'
      @ok="addCarousel()"
      @hidden="resetForm"
      title='新增主頁輪播圖'
      ok-variant='success'
      cancel-variant='danger'
    )
      b-row
        b-col.d-flex.justify-content-center.align-items-center(cols='12')
          img-inputer(
            accept="image/*"
            v-model="carouselImage"
            theme="dark"
            size="large"
            bottomText="點選或拖曳圖片以修改"
            hoverText="點選或拖曳圖片以修改"
            placeholder="點選或拖曳選擇圖片"
            :max-size="2048"
            exceed-size-text="檔案大小不能超過"
          )
</template>

<script>
export default {
  data () {
    return {
      carousel: [],
      carouselImage: '',
      modalSubmitting: false
    }
  },
  methods: {
    async addCarousel () {
      this.modalSubmitting = true
      const fd = new FormData()
      fd.append('image', this.carouselImage)
      try {
        const { data } = await this.api.post('/pages', fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '新增輪播圖圖片成功'
        })
        this.getimage()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '新增輪播圖圖片失敗'
        })
      }
    },
    async deleteCarousel (id) {
      try {
        await this.api.delete('/pages/' + id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除圖片成功'
        })
        this.getimage()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '刪除圖片失敗'
        })
      }
    },
    async getimage () {
      try {
        const { data } = await this.api.get('/pages')
        console.log(data.result)
        this.carousel = data.result
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.carouselImage = ''
    }
  },
  created () {
    this.getimage()
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
