<template lang="pug">
b-container#novelpage.bg-white.aino-rounded.mb-5(:class="{whiteBoardDark:user.themeSwitcher, textDark:user.themeSwitcher, light:!user.themeSwitcher}")
  b-row.mt-5
    b-col.h1.mt-5.bold(cols='12') {{ title }}
    b-col.font-primary.h3(cols='12' :class="{textDark:user.themeSwitcher, light:!user.themeSwitcher}") 作者:
      b-link.ml-3(:to='"/memberothers/" + this.authorId') {{ author }}
    b-col.font-second.h4(cols='12' :class="{textSecondDark:user.themeSwitcher, light:!user.themeSwitcher}") 文作分類: {{ novelType }}
    b-col(cols='12' v-if='user.isLogin')
      button.aino-btn-wood.btn-md.mt-3(:class="{btnDark:user.themeSwitcher, light:!user.themeSwitcher}") Like!
  b-row.mb-5.pb-5
    b-col.mt-5.px-5(cols='12' v-html="text")
    //- b-col.h5.p-0(cols='12')
    //-   pre {{ text }}
</template>

<script>
export default {
  data () {
    return {
      image: '',
      title: '',
      summary: '',
      novelType: '',
      text: '',
      author: '',
      authorId: ''
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/novels/' + this.$route.params.id)
      this.image = data.result.image
      this.title = data.result.title
      this.novelType = data.result.novelType
      this.text = data.result.text.replace(/\r\n/g, '<br>')
      // this.text = data.result.text
      this.author = data.result.author
      this.authorId = data.result.authorId
      document.title = `Mono‘s Archive | ${this.title}`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
