<template lang="pug">
b-container#MRules.mt-5.kiteiheight.h-md-0
  b-navbar.d-flex.justify-content-center.mb-4
    b-navbar-nav.h5.d-flex.flex-column.flex-md-row
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='wnovelRule') 創作規則
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='wsiteRule') 本站條規
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='waccountProblem') 帳號相關事宜
      b-nav-item.ml-md-5.mt-2.mt-md-0.rulesbtn.aino-rounded(@click='wreport') 騷擾及申訴
  b-container(fuild)
    b-row
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='novelRule')
        | 88888
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='siteRule')
        | 77777
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='accountProblem')
        | 44444
      b-col.px-4.py-4.white-board.bg-white.aino-rounded(v-if='report')
        | 11111
</template>

<script>
export default {
  data () {
    return {
      novelRule: true,
      siteRule: false,
      accountProblem: false,
      report: false
    }
  },
  methods: {
    wnovelRule () {
      if (this.novelRule === false) {
        this.novelRule = true
        this.siteRule = false
        this.accountProblem = false
        this.report = false
      }
    },
    wsiteRule () {
      if (this.siteRule === false) {
        this.novelRule = false
        this.siteRule = true
        this.accountProblem = false
        this.report = false
      }
    },
    waccountProblem () {
      if (this.accountProblem === false) {
        this.novelRule = false
        this.siteRule = false
        this.accountProblem = true
        this.report = false
      }
    },
    wreport () {
      if (this.report === false) {
        this.novelRule = false
        this.siteRule = false
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
