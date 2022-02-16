<template lang="pug">
b-container#login.vh-100(fluid)
  div.whiteboard
    button.homebtn(@click='toHomePage') H
    b-row.mt-0.py-3.h-100
      b-col.border-r.h-100.d-flex.align-items-center(cols='8')
        b-row.m-0.w-100
          b-col(cols="12")
            b-form(@submit.prevent='login')
              b-row
                b-col.pb-4.pr-0.login-fs(cols='3') 帳號:
                b-col.pb-4.pl-0(cols='9')
                  b-form-group(label-for='input-account' description='帳號長度為 6 至 20 字元。' :state='state.account')
                    b-form-input#input-account.w-100(v-model='form.account' required placeholder="請輸入帳號" type="text" :state='state.account')
                b-col.pr-0.login-fs(cols='3') 密碼:
                b-col.pl-0(cols='9')
                  b-form-group(label-for='input-password' description='密碼長度為 6 至 20 字元。' :state='state.password')
                    b-form-input#input-password.w-100(v-model='form.password' required placeholder="請輸入密碼" type="password" :state='state.password')
                b-col.d-flex.justify-content-end.mt-5(cols='12')
                  button.mx-1(type='submit') Login
      b-col.h-100.d-flex.justify-content-center.align-items-center(cols='4')
        b-row#loginside
          b-col(cols='12')
            button.reAndLogbtn(@click='toRegister') 成為創作者
          b-col(cols='12')
            button.reAndLogbtn(@click='toForget') 忘記密碼?
          b-col(cols='12')
            b-link.reAndLogbtn-link(target='_blank' to='/MRules')
              div 常見問題
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    state () {
      return {
        account: this.form.account.length === 0 ? null : this.form.account.length >= 4 && this.form.account.length <= 20,
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 20
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login', this.form)
    },
    toRegister () {
      this.$router.push('/register')
    },
    toForget () {
    },
    toProblem () {
    },
    toHomePage () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/aino-style.scss' ;
</style>
