<template lang="pug">
b-container#MNovels(fluid)
  b-row.mt-5
    b-col.bg-white.rounded(cols='9')
      b-navbar.d-flex.justify-content-center
        b-navbar-nav.h5.w-100.d-flex.justify-content-around
          b-nav-item.aino-novel-rounded(@click="filter = ''") 全部
          b-nav-item.aino-novel-rounded(@click="filter = '奇幻'") 奇幻
          b-nav-item.aino-novel-rounded(@click="filter = '古風'") 古風
          b-nav-item.aino-novel-rounded(@click="filter = '寫實'") 寫實
          b-nav-item.aino-novel-rounded(@click="filter = '玄怪'") 玄怪
          b-nav-item.aino-novel-rounded(@click="filter = '恐怖'") 恐怖
          b-nav-item.aino-novel-rounded(@click="filter = '愛情'") 愛情
          b-nav-item.aino-novel-rounded(@click="filter = '科幻'") 科幻
          b-nav-item.aino-novel-rounded(@click="filter = '同人'") 同人
          b-nav-item.aino-novel-rounded(@click="filter = '西洋'") 西洋
          b-nav-item.aino-novel-rounded(@click="filter = '東方'") 東方
    b-col.d-flex.align-items-center(cols='3')
      b-form.w-100
        b-form-group.w-100.mb-0
          //- b-input.aino-search-rounded(type='text' placeholder="文作查詢" @keydown.enter='search')
          b-input.mr-2.aino-search-rounded(type='text' placeholder="文作查詢")
          b-button(pill)
            b-icon-search

  b-row.my-0
    b-col.p-0(cols='9')
      b-container#novelslist(fluid)
        b-row
          b-col.mt-3(cols='12')
            .w-25.h-100.m-0.h1.type.aino-bg-wood(v-if="this.filter === ''") 全部
            .w-25.h-100.m-0.h1.type.aino-bg-wood(v-if="this.filter !== ''") {{ this.filter }}
          b-col.d-flex.justify-content-end(cols='12')
            .overflow-auto
              b-pagination(:per-page='perPage' :total-rows='rows' v-model="currentPage" aria-controls='novelslistpage')
          b-col(cols='12' v-for='novel in sliceitems' :key='novel._id')
            NovelsCard(:novel='novel' :per-page='perPage' :current-page="currentPage" id='novelslistpage')
          //- b-col(cols='12')
          //-   b-table(:items="items" :per-page="perPage" :current-page="currentPage")
    b-col(cols='3')
      #createrlist
        b-navbar.novels-nav-border
          b-navbar-nav.w-100.d-flex.justify-content-around
            b-nav-item.aino-bg-third(@click='Ccreater') 推薦作者
            b-nav-item.aino-bg-third(@click='Cnovelslist') 推薦文作
          //- 作者列表
        b-row(v-if='creater')
          b-col(cols='4')
            img.rounded.w-100.h-50(src='https://picsum.photos/500/500/?random=10')
          b-col(cols='8')
            b-btn.w-100.h-50.border-0
              div Yamas*
        b-row(v-if='novelslist')
          b-col(cols='4')
            img.rounded.w-100.h-50(src='https://picsum.photos/500/500/?random=20')
          b-col(cols='8')
            b-btn.w-100.h-50.border-0
              div 華清的酒
</template>

<script>
import NovelsCard from '../components/NovelsCard.vue'

export default {
  components: {
    NovelsCard
  },
  data () {
    return {
      creater: true,
      novelslist: false,
      filter: '',
      perPage: 3,
      currentPage: 1,
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
        (this.currentPage - 1) * 20,
        (this.currentPage - 1) * 20 + 20
      )
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/novels')
      this.novels = data.result
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
