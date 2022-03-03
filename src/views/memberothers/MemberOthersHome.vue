<template lang="pug">
b-container#memberothershome
  b-row
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12' :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") 創作者資訊
  b-row.mt-5
    b-col.d-flex.flex-column.align-items-center.h2.mb-5(cols='3')
        | 創作者頭貼
        img.mt-3.img-box.aino-rounded(:src='this.avatarimg' )
    b-col.pl-5.mb-5(cols='9')
      b-row.h-100.d-flex.mx-0.my-0
        b-col.d-flex.flex-column.justify-content-around(cols='12')
          div.h3(v-if='this.nickname') 創作者名稱: {{ this.nickname }}
          div.h3(v-if='!this.nickname') 創作者名稱: {{ this.account }}
          div.h4 帳號: {{ this.account }}
          div.h4(v-if='this.emailswitch === 2') 信箱: 不讓你看 キラー☆
          div.h4(v-if='this.emailswitch === 1') 信箱: {{ this.email }}
          div.h4(v-if='this.birthdayMon !== 13 || this.birthdayDate !== 32') 生日: {{ this.birthdayMon }} 月 {{ this.birthdayDate }} 日
          div.h4(v-if='this.birthdayMon === 13 && this.birthdayDate === 32') 生日: 不讓你看 キラー☆
          div.h4 性別: {{ this.sex }}
          b-btn.aino-btn-third(@click='addFriend') 加入好友
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
      sex: ''
    }
  },
  methods: {
    addFriend () {
      if (this.user._id === '') {
        this.$swal({
          icon: 'error',
          title: '加入好友失敗',
          text: '請先登入'
        })
      }
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
      document.title = `Mono‘s Archive | ${this.nickname} 創作者首頁`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
