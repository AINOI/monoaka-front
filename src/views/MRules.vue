<template lang="pug">
b-container#MRules.my-5.kiteiheight.h-md-0
  b-navbar.d-flex.justify-content-center.mb-4
    b-navbar-nav.h5.d-flex.flex-column.flex-md-row
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='wnovelRule') 創作規則
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='waccountProblem') 帳號相關事宜
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='wreport') 騷擾及申訴
  b-container(fuild)
    b-row
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='novelAndSiteRule' :class="{labelDark:user.themeSwitcher, textDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-row
          b-col(cols='12')
            h3 可以發表何種文作？
            br
            h5 目前分類僅有「奇幻、古風、寫實、玄怪、恐怖、愛情、科幻、同人、西洋、東方」，若創作者想創作複合分類，可在「概要」區手動加入分類。
            br
            br
            br
            h3 創作文作有那些規範？
            br
            h5 基本上無特別規範，但禁止利用文作進行謾罵、宣揚主義等等。
            h5 若經檢舉且查證屬實，管理方有權停止其創作者之使用權限。
            br
            br
            br
            h3 創作上有年齡規範嗎？
            br
            h5 只要你喜愛創作，都歡迎在這裡分享自己的文作，無論長短文章都歡迎。
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='accountProblem' :class="{labelDark:user.themeSwitcher, textDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-row
          b-col(cols='12')
            h3 成為創作者有什麼好處？
            br
            h5 1.成為創作者，即可分享及創作屬於自己的文章。
            h5 2.可將喜歡的文章加入蒐藏櫃內，不用再次反覆搜尋。
            h5 3.可將與其他創作者建立好友關係，不再錯過好友所發表的文章。
            h5 4.可以在介面上使用黑暗模式。
            br
            br
            br
            h3 若帳號被停止使用權限，有什麼功能會被禁止？
            br
            h5 1.包含登入，及重複註冊之事宜。
            h5 2.可以閱讀其他使用者之文作，但無法使用蒐藏櫃系統。
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='report' :class="{labelDark:user.themeSwitcher, textDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-row
          b-col(cols='12')
            h3 暫停帳號使用權：
            br
            h5 1.若此創作者經檢舉查證對他人進行辱罵之事實，經第一次舉報，將停止使用權限7日，再犯者將永久停止使用權限。
            h5 2.若此創作者經檢舉查證對他人性騷擾之事實，將永久停止使用權限。
            h5 3.若此創作者經檢舉查證之創作含過激或謾罵之事實，經第一次舉報，將停止使用權限14日，再犯者經有勇停止使用權限。
            br
            br
            br
            h3 停權之相關申訴：
            br
            h5 1.若對停權之事宜持有異議者，可利用問題回報系統與管理者聯繫，並處理相關事宜，並且提出自身無違規之事實。
</template>

<script>
export default {
  data () {
    return {
      novelAndSiteRule: true,
      accountProblem: false,
      report: false
    }
  },
  methods: {
    wnovelRule () {
      if (this.novelAndSiteRule === false) {
        this.novelAndSiteRule = true
        this.accountProblem = false
        this.report = false
      }
    },
    waccountProblem () {
      if (this.accountProblem === false) {
        this.novelAndSiteRule = false
        this.accountProblem = true
        this.report = false
      }
    },
    wreport () {
      if (this.report === false) {
        this.novelAndSiteRule = false
        this.accountProblem = false
        this.report = true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/aino-style.scss' ;

.white-board {
  height: 600px;
}
.rulesbtn {
  background: $third;
  width: 200px !important;
  text-align: center;
  transition: 0.5s;
  &:hover {
    background: $third-hover;
  }
  a {
    color: white !important;
  }
}
.kiteiheight {
  height: 1000px !important;
}
@include md {
  .h-md-0 {
    height: 0% !important;
  }
}
</style>
