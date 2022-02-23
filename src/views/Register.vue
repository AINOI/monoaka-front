<template lang="pug">
b-container#register.vh-100(fluid)
  div.whiteboard
    button.homebtn(@click='toHomePage') H
    b-row.mt-0.py-3.h-100
      b-col.border-r.h-100.d-flex.align-items-center(cols='8')
        b-row.m-0.w-100
          b-col(cols="12")
            b-form.mt-5(@submit.prevent='register')
              b-row
                b-col.pr-0.login-fs(cols='3') 帳號:
                b-col.pl-0(cols='9')
                  b-form-group(label-for='input-account' description='帳號長度為 6 至 20 字元。' :state='state.account')
                    b-form-input#input-account.w-100(v-model='form.account' required placeholder="請輸入帳號" type="text" :state='state.account')
                b-col.pr-0.login-fs(cols='3') 密碼:
                b-col.pl-0(cols='9')
                  b-form-group(label-for='input-password' description='密碼長度為 6 至 20 字元。' :state='state.password')
                    b-form-input#input-password.w-100(v-model='form.password' required placeholder="請輸入密碼" type="password" :state='state.password')
                b-col.pr-0.login-fs(cols='3') E-mail:
                b-col.pl-0(cols='9')
                  b-form-group( label-for='input-email' :state='state.email')
                    b-form-input#input-email(v-model='form.email' required placeholder="請輸入信箱" type="text" :state='state.email')
                b-col.d-flex.justify-content-end.mt-5(cols='12')
                  button.mx-1(type='submit') Register

      b-col.h-100.d-flex.justify-content-center.align-items-center(cols='4')
        b-row#loginside
          b-col(cols='12')
            button.reAndLogbtn.wrongway(@click='toLogin') 走錯地方了?
          b-col(cols='12')
            button.reAndLogbtn(@click='toForget') 何謂成為創作者?
          b-col(cols='12')
            b-link.reAndLogbtn-link(target='_blank' to='/MRules')
              div 常見問題
</template>

<script>
import validator from 'validator'

export default {
  data () {
    return {
      form: {
        account: '',
        password: '',
        email: '',
        block: false
      }
    }
  },
  computed: {
    state () {
      return {
        account: this.form.account.length === 0 ? null : this.form.account.length >= 6 && this.form.account.length <= 20,
        password: this.form.password.length === 0 ? null : this.form.password.length >= 6 && this.form.password.length <= 20,
        email: this.form.email.length === 0 ? null : validator.isEmail(this.form.email)
      }
    }
  },
  methods: {
    async register () {
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    toLogin () {
      this.$router.push('/login')
    },
    toForget () {
    },
    toHomePage () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/aino-style.scss' ;

#__BVID__109__BV_feedback_invalid_{
  width: 150px;
  margin-left: 1rem;
  color: $font-primary;
}
</style>
