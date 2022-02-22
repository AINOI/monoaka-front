<template lang="pug">
b-container.mt-5
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
              .text-center.my-5.kakunin 確定要刪除此圖片嗎?
    b-modal#modal-carousel(
      size="md"
      centered
      ok-title='上傳'
      cancel-title='取消上傳'
      @ok="addCarousel()"
      @hidden="resetForm"
      title='新增主頁輪播圖'
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
@import '../../../scss/primary.scss';

.add {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 200px;
  button {
    width: 100%;
    height: 100%;
    border: 2px dashed gray;
    border-radius: 10px;
    background: transparent !important;
    color: $font-primary !important;
    font-size: 36px;
    transition: 0.5s;
    &:hover {
      background: $font-primary !important;
      color: white !important;
      font-size: 36px;
      filter: drop-shadow(2px 2px 1px rgba(0,0,0,0.5)) opacity(0.5);
    }
  }
}
.carousel-height{
  width: 100%;
  height: 200px;
  border-radius: 10px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  button {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    background: transparent !important;
    color: transparent;
    font-size: 36px;
    font-weight: bold;
    transition: 0.5s;
    filter: drop-shadow(2px 2px 1px rgba(0,0,0,0.5)) opacity(0.2);
    &:hover {
      background: black !important;
      color: white !important;
      filter: drop-shadow(2px 2px 1px rgba(0,0,0,0.5)) opacity(0.5);
    }
  }
}

.kakunin {
  font-size: 36px;
  font-weight: bold;
}
</style>
