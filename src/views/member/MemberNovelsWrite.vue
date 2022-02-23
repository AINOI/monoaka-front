<template lang="pug">
#membernovelsWrite.mt-5
  b-container.border-top
    b-form
      b-row.my-5
        b-col.d-flex.flex-column.align-items-center.h2.mb-5(cols='12') 文作封面
          b-form-group.mt-3.w-100.d-flex.justify-content-center
            img-inputer(
              accept='image/*'
              v-model="form.image"
              theme="light"
              size="large"
              bottom-text="修改文作封面"
              hover-text="修改文作封面"
              placeholder="上傳文作封面"
              :max-size="1024"
              exceedSizeText='文件大小不能超過')
        b-col.d-flex(cols='12')
          .aino-fs.mr-3 文作名稱:
          b-form-group.w-75(:state='state.title')
            b-form-input.w-100(v-model='form.title' type='text' required :state='state.title' placeholder="請輸入文作名稱")
        b-col.d-flex(cols='12')
          .aino-fs.mr-3 文作分類:
          b-form-group.w-75(:state='state.novelType')
            b-form-select.w-100(v-model='form.novelType' :state='state.novelType' :options='novelTypes')
        b-col.aino-fs(cols='12') 文作概要:
          b-form-group(:state='state.summary')
            b-form-textarea(v-model='form.summary' type='text' required :state='state.summary' rows='5' max-rows="6")
        b-col.aino-fs(cols='12') 文作內文:
          b-form-group(:state='state.text')
            b-form-textarea(v-model='form.text' type='text' required :state='state.text' rows='20')
        b-col(cols='12')
          b-button(@click='publish' :disabled='modalSubmitting') 完成創作
</template>

<script>

export default {
  data () {
    return {
      novels: [],
      modalSubmitting: false,
      novelTypes: [
        { text: '請選擇文作類別', value: '' },
        '奇幻', '古風', '寫實', '玄怪', '恐怖', '愛情', '科幻', '同人', '西洋', '東方'
      ],
      form: {
        image: null,
        title: '',
        summary: '',
        novelType: '',
        text: '',
        index: -1,
        _id: '',
        author: '',
        authorId: '',
        publish: true,
        publishDate: new Date()
      }
    }
  },
  computed: {
    state () {
      return {
        title: this.form.title.length === 0 ? null : true,
        summary: this.form.summary.length === 0 ? null : true,
        novelType: this.form.novelType.length === 0 ? null : true,
        text: this.form.text.length === 0 ? null : true
      }
    }
  },
  methods: {
    async publish (event) {
      event.preventDefault()
      if (!this.state.title || !this.state.summary || !this.state.novelType || !this.state.text) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }

      this.modalSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
          this.form.author = this.user.account
          this.form.authorId = this.user._id
        }
      }
      try {
        const { data } = await this.api.post('/novels', fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.novels.push(data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '上傳成功'
        })
        this.$router.push('/member/membernovels/membernovelsList')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        image: null,
        title: '',
        summary: '',
        novelType: '',
        text: '',
        index: -1,
        _id: ''
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

.img-inputer__mask {
  display: block !important;
}
</style>
