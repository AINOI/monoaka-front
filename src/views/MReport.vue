<template lang="pug">
b-container#MReport
  b-row
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-problem.aino-rounded(cols='12') 問題回報
  b-form
    b-row
      //- nickname isLogin
      b-col.d-flex.align-items-center(cols='12' v-if='user.isLogin')
        .aino-fs.mr-3 創作者名稱:
        div.h4.m-0 {{ user.nickname }}
      //- nickname !isLogin
      b-col.d-flex.align-items-center(cols='12' v-if='!user.isLogin')
        .aino-fs.mr-3 名稱:
        b-form-group.w-75
          b-form-input.w-100(v-model='form.rpnickname' type='text' :state='state.rpnickname')
        //- account
      b-col.d-flex.align-items-center(cols='12' v-if='user.isLogin')
        .aino-fs.mr-3 創作者帳號:
        div.h4.m-0 {{ user.account }}
        //- email
      b-col.d-flex.align-items-center(cols='12' v-if='!user.isLogin')
        .aino-fs.mr-3 E-mail:
        b-form-group.w-75
          b-form-input.w-100(v-model='form.rpemail' type='text' :state='state.rpemail')
        //- email isLogin
      b-col.d-flex.align-items-center(cols='12' v-if='user.isLogin')
        .aino-fs.mr-3 E-mail:
        div.h4.m-0 {{ user.email }}
        //-report items
      b-col.d-flex.align-items-center(cols='12')
        .aino-fs.mr-3 反映項目:
        b-form-group.w-75
          b-form-select.w-100(v-model='form.reportItem' :options='reportItems' :state='state.reportItem')
        //- report text
      b-col.aino-fs(cols='12') 反映內容敘述:
        b-form-group
          b-form-textarea(rows='10' max-rows="10" v-model='form.reportText' type='text' :state='state.reportText')
        //- rules check
      b-col.aino-fs.d-flex.justify-content-center(cols='12')
        b-form-checkbox(v-model='check') 請遵守
        b-link(target='_blank' to='/MRules') 本站規則
        | ，若詳閱並同意，請勾選。
        //- check button
      b-col.aino-fs.d-flex.justify-content-center(cols='12')
        b-btn(:disabled='!check' :state='state' @click='report') 送出
</template>

<script>
import validator from 'validator'

export default {
  data () {
    return {
      check: false,
      reports: [],
      form: {
        rpnickname: '',
        rpaccount: '匿名創作者',
        rpemail: '',
        reportItem: '',
        reportText: '',
        processed: false
      },
      reportItems: [
        { text: '請選擇反映項目', value: '' },
        '帳號相關', '活動相關', '創作相關', '文作瀏覽相關', '文作標題不合適', '其他問題'
      ]
    }
  },
  computed: {
    state () {
      return {
        rpnickname: this.form.rpnickname.length === 0 ? null : this.form.rpnickname.length > 1,
        rpemail: this.form.rpemail.length === 0 ? null : validator.isEmail(this.form.rpemail),
        reportItem: this.form.reportItem.length === 0 ? null : true,
        reportText: this.form.reportText.length === 0 ? null : this.form.reportText.length > 1
      }
    }
  },
  methods: {
    async report () {
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id' && this.user.account === '') {
          fd.append(key, this.form[key])
        } else {
          this.form.rpnickname = this.user.nickname
          this.form.rpaccount = this.user.account
          this.form.rpemail = this.user.email
        }
      }
      try {
        const { data } = await this.api.post('/reports', { ...this.form }, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.reports.push(data.result)
        this.$router.push('/')
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '問題回報傳送成功，我們會盡快處理。'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/aino-style.scss' ;

.col-12 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
