<template lang="pug">
b-container#MReport
  b-form
    b-row
      b-col.h1.rounded.text-white.text-center.py-3.aino-bg-problem.aino-rounded(cols='12') 問題回報
        //- nickname isLogin
      b-col.d-flex.align-items-center(cols='12' v-if='user.isLogin')
        .aino-fs.mr-3 創作者名稱:
        div.h4.m-0 {{ user.account }}
            //- nickname !isLogin
      b-col.d-flex.align-items-center(cols='12' v-if='!user.isLogin')
        .aino-fs.mr-3 名稱:
        b-form-group.w-75
          b-form-input.w-100(v-model='form.nickname' type='text' :state='state.nickname')
        //- account
      b-col.d-flex.align-items-center(cols='12' v-if='user.isLogin')
        .aino-fs.mr-3 創作者帳號:
        div.h4.m-0 {{ user.account }}
        //- email
      b-col.d-flex.align-items-center(cols='12')
        .aino-fs.mr-3 E-mail:
        b-form-group.w-75
          b-form-input.w-100(v-model='form.email' type='text' :state='state.email')
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
        b-btn(:disabled='!check' :state='state') 送出
</template>

<script>
import validator from 'validator'

export default {
  data () {
    return {
      check: false,
      form: {
        nickname: '',
        email: '',
        reportItem: '',
        reportText: '',
        acc: ''
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
        nickname: this.form.nickname.length === 0 ? null : this.form.nickname.length > 1,
        email: this.form.email.length === 0 ? null : validator.isEmail(this.form.email),
        reportItem: this.form.reportItem.length === 0 ? null : true,
        reportText: this.form.reportText.length === 0 ? null : this.form.reportText.length > 1
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
