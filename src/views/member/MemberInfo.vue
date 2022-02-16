<template lang="pug">
b-container#memberinfo
  b-row
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 資訊更新
  b-form
    b-row.my-5
      b-col.d-flex.flex-column.align-items-center.h2.mb-5(cols='12') 創作者頭貼
        b-form-group.mt-3.w-100.d-flex.justify-content-center
          img-inputer.circle(
            accept='image/*'
            v-model="form.avatarimg"
            theme="light"
            size="large"
            bottom-text="修改大頭貼"
            hover-text="修改大頭貼"
            placeholder="上傳大頭貼"
            :max-size="1024"
            exceedSizeText='文件大小不能超過')
      div.text-white.aino-rounded.aino-bg-primary.w-100
        b-row.my-5
          b-col.d-flex(cols='12')
            .h3.mr-3 創作者名稱:
            b-form-group.w-75(:state='state.nickname')
              b-form-input.w-100(v-model='form.nickname' type='text' required :state='state.nickname' placeholder="請輸入創作者名稱")
          b-col.d-flex(cols='12')
            .h3.mr-3 信箱公開:
            b-form-group.w-75(:state='state.emailswitch')
              b-form-select.w-100(v-model='form.emailswitch' :state='state.emailswitch' :options='emailswitchs')
          b-col.d-flex(cols='12')
            .h3.mr-3 性別:
            b-form-group.w-75(:state='state.sex')
              b-form-select.w-100(v-model='form.sex' :state='state.sex' :options='sexs')
          b-col.d-flex(cols='12')
            .h3.mr-3 生日:
            b-form-group.w-25(:state='state.birthdayMon')
              b-form-select.w-75(v-model='form.birthdayMon' :state='state.birthdayMon' :options='birthdayMons')
              .h3.ml-3 月
            b-form-group.w-25(:state='state.birthdayDate')
              b-form-select.w-75(v-model='form.birthdayDate' :state='state.birthdayDate' :options='birthdayDates')
              .h3.ml-3 日
          b-col.d-flex.justify-content-center(cols='12')
            b-button.aino-btn-third.w-75(@click='reinfo' :disabled='modalSubmitting') 更新
</template>

<script>
export default {
  data () {
    return {
      modalSubmitting: false,
      emailswitchs: [
        { text: '選擇公開與否', value: '' },
        { text: '公開', value: 1 },
        { text: '不公開', value: 2 }
      ],
      sexs: [
        { text: '選擇公開與否', value: '' },
        '男性', '女性', '不公開'
      ],
      birthdayMons: [
        { value: '', text: '請選擇月份' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: '7' },
        { value: 8, text: '8' },
        { value: 9, text: '9' },
        { value: 10, text: '10' },
        { value: 11, text: '11' },
        { value: 12, text: '12' },
        { value: 13, text: '不公開' }
      ],
      birthdayDates: [
        { value: '', text: '請選擇日期' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: '7' },
        { value: 8, text: '8' },
        { value: 9, text: '9' },
        { value: 10, text: '10' },
        { value: 11, text: '11' },
        { value: 12, text: '12' },
        { value: 13, text: '13' },
        { value: 14, text: '14' },
        { value: 15, text: '15' },
        { value: 16, text: '16' },
        { value: 17, text: '17' },
        { value: 18, text: '18' },
        { value: 19, text: '19' },
        { value: 20, text: '20' },
        { value: 21, text: '21' },
        { value: 22, text: '22' },
        { value: 23, text: '23' },
        { value: 24, text: '24' },
        { value: 25, text: '25' },
        { value: 26, text: '26' },
        { value: 27, text: '27' },
        { value: 28, text: '28' },
        { value: 29, text: '29' },
        { value: 30, text: '30' },
        { value: 31, text: '31' },
        { value: 32, text: '不公開' }
      ],
      form: {
        avatarimg: null,
        nickname: '',
        emailswitch: '',
        sex: '',
        birthdayMon: '',
        birthdayDate: ''
      }
    }
  },
  computed: {
    state () {
      return {
        nickname: this.form.nickname.length === 0 ? null : true,
        emailswitch: this.form.emailswitch.length === 0 ? null : true,
        birthdayMon: this.form.birthdayMon.length === 0 ? null : true,
        birthdayDate: this.form.birthdayDate.length === 0 ? null : true,
        sex: this.form.sex.length === 0 ? null : true,
        birthday: this.form.birthdayMon.value === 2 && this.form.birthdayDate.value > 29 ? null : true
      }
    }
  },
  methods: {
    async reinfo () {
      if (!this.state.nickname || !this.state.emailswitch || !this.state.birthdayMon || !this.state.birthdayDate || !this.state.sex) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      } else if (this.form.birthdayMon === 2 && this.form.birthdayDate > 29) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '生日日期出現錯誤'
        })
        return
      }
      this.modalSubmitting = true
      try {
        await this.api.patch('/users/reinfo', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(this.form)
        this.$store.commit('user/updateInfo', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '更新成功'
        })
        this.$router.push('/member')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
      this.modalSubmitting = false
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

.img-inputer__mask {
  display: block !important;
}
.circle {
  width: 300px;
  height: 300px;
  border-radius: 50% !important;
  background: transparent !important;
.img-inputer__preview-box {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.img-inputer__mask {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
}
</style>
