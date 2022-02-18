<template lang="pug">
b-container#memberothers.mt-5(fluid)
  b-row
    b-col(cols='3')
      div.mx-3.py-3.px-3.aino-rounded.bg-white
        b-nav(pills justified vertical)
          b-nav-item.gen(:to='"/memberothers/" + this.id' exact exact-active-class='active') 創作者首頁
          b-nav-item.gen(:to='"/memberothers/" + this.id + "/memberothersnovels"' exact exact-active-class='active') 作品頁面
    b-col.mb-5(cols='9')
      div.mx-3.pt-3.h-100.aino-rounded.bg-white
        router-view
</template>

<script>
export default {
  data () {
    return {
      avatarimg: '',
      nickname: '',
      account: '',
      emailswitch: '',
      email: '',
      birthdayMon: '',
      birthdayDate: '',
      sex: '',
      id: ''
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/' + this.$route.params.id)
      this.avatarimg = data.result.image
      this.nickname = data.result.nickname
      this.account = data.result.account
      this.emailswitch = data.result.emailswitch
      this.email = data.result.email
      this.birthdayMon = data.result.birthdayMon
      this.birthdayDate = data.result.birthdayDate
      this.sex = data.result.sex
      this.id = data.result._id
      document.title = `Mono‘s Archive | ${this.nickname} 創作者首頁`
    } catch (error) {
      console.log(error)
      this.$router.push('/')
    }
  }
}
</script>
