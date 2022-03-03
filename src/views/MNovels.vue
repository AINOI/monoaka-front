<template lang="pug">
b-container#MNovels(fluid)
  b-row.mt-5
    b-col.bg-white.rounded(cols='9' :class="{navDark:user.themeSwitcher, light:!user.themeSwitcher}")
      b-navbar.d-flex.justify-content-center
        b-navbar-nav.h5.w-100.d-flex.justify-content-around
          b-nav-item.aino-novel-rounded(@click="filter = ''" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 全部
          b-nav-item.aino-novel-rounded(@click="filter = '奇幻'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 奇幻
          b-nav-item.aino-novel-rounded(@click="filter = '古風'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 古風
          b-nav-item.aino-novel-rounded(@click="filter = '寫實'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 寫實
          b-nav-item.aino-novel-rounded(@click="filter = '玄怪'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 玄怪
          b-nav-item.aino-novel-rounded(@click="filter = '恐怖'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 恐怖
          b-nav-item.aino-novel-rounded(@click="filter = '愛情'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 愛情
          b-nav-item.aino-novel-rounded(@click="filter = '科幻'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 科幻
          b-nav-item.aino-novel-rounded(@click="filter = '同人'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 同人
          b-nav-item.aino-novel-rounded(@click="filter = '西洋'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 西洋
          b-nav-item.aino-novel-rounded(@click="filter = '東方'" :class="{novelBtnDark:user.themeSwitcher, light:!user.themeSwitcher}") 東方
    b-col.d-flex.align-items-center(cols='3')
      b-form.w-100
        b-form-group.w-100.mb-0
          //- b-input.aino-search-rounded(type='text' placeholder="文作查詢" @keydown.enter='search')
          b-input.mr-2.aino-search-rounded(type='text' placeholder="文作查詢")
          b-button(pill)
            b-icon-search(:class="{iconDark:user.themeSwitcher, light:!user.themeSwitcher}")

  b-row.my-0
    b-col.p-0(cols='9')
      b-container#novelslist.mb-5.pb-5(fluid :class="{whiteBoardDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-row
          b-col.mt-3(cols='12')
            .w-25.h-100.m-0.h1.type.aino-bg-wood(v-if="this.filter === ''" :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") 全部
            .w-25.h-100.m-0.h1.type.aino-bg-wood(v-if="this.filter !== ''" :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") {{ this.filter }}
          b-col.d-flex.justify-content-end(cols='12')
            .overflow-auto
              b-pagination(:per-page='perPage' :total-rows='rows' v-model="page" aria-controls='novelslistpage')
          b-col(cols='12' v-for='novel in sliceitems' :key='novel._id')
            NovelsCard(:novel='novel' :per-page='perPage' :current-page="page" id='novelslistpage')
          //- b-col(cols='12')
          //-   b-table(:items="items" :per-page="perPage" :current-page="page")
    b-col(cols='3')
      #createrlist(:class="{whiteBoardDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-navbar.novels-nav-border
          b-navbar-nav.w-100.d-flex.justify-content-around
            b-nav-item.aino-bg-third(@click='Ccreater') 推薦作者
            b-nav-item.aino-bg-third(@click='Cnovelslist') 推薦文作
          //- 作者列表
        b-row.mt-0(v-if='creater')
          NnovelAuthor
          //- 推薦文作
        b-row.mt-0(v-if='novelslist')
          NnovelOsusume
</template>

<script>
import NovelsCard from '../components/NovelsCard.vue'
import NnovelAuthor from '../components/NnovelAuthor.vue'
import NnovelOsusume from '../components/NnovelOsusume.vue'

export default {
  components: {
    NovelsCard,
    NnovelAuthor,
    NnovelOsusume
  },
  data () {
    return {
      creater: true,
      novelslist: false,
      filter: '',
      perPage: 5,
      page: 1,
      novels: []
    }
  },
  methods: {
    Ccreater () {
      if (this.creater === false) {
        this.creater = true
        this.novelslist = false
      }
    },
    Cnovelslist () {
      if (this.novelslist === false) {
        this.creater = false
        this.novelslist = true
      }
    }
  },
  computed: {
    rows () {
      return this.filterType.length
    },
    filterType () {
      return this.novels.filter(item => {
        if (this.filter === '') return true
        return item.novelType === this.filter
      })
    },
    sliceitems () {
      return this.filterType.slice(
        (this.page - 1) * 5,
        (this.page - 1) * 5 + 5
      )
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/novels')
      this.novels = data.result
      this.novels.reverse()
    } catch (error) {
      this({
        icon: 'error',
        title: '錯誤',
        text: '文作取得失敗'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/aino-style.scss' ;

</style>
