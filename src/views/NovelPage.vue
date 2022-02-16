<template lang="pug">
b-container#novelpage.bg-white.aino-rounded
  b-row.mt-5
    b-col.h1.mt-5.bold(cols='12') {{ title }}
    b-col.font-primary.h3(cols='12') 作者: {{ author }}
    b-col.font-second.h4(cols='12') 文作分類: {{ novelType }}
    b-col(cols='12' v-if='user.isLogin')
      button.aino-btn-wood.btn-md.mt-3 Like!
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
      author: ''
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
      document.title = `Mono‘s Archive | ${this.title}`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
