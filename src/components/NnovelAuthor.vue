<template lang="pug">
b-container(fluid)
  b-row.NCardHeight(v-for='Nauthor in NnovelAuthor' :key='Nauthor._id')
    b-col.h-100(cols='4')
      img.h-100.objectfit.rounded.w-100(:src='Nauthor.image')
    b-col.h-100(cols='8')
      b-btn.w-100.h-100.border-0.justalign-center(:Nauthor='Nauthor._id' :to='"/memberothers/" + Nauthor._id')
        div.AuthorAndOsusumeFs(:Nauthor='Nauthor.nickname') {{ Nauthor.nickname }}
</template>

<script>
export default {
  data () {
    return {
      NnovelAuthor: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/nauthorgetall')
      this.NnovelAuthor = data.result
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
}
</script>

<style lang="scss">
.NCardHeight {
  height: 50px !important;
}
.objectfit {
  object-fit: cover;
}
.justalign-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AuthorAndOsusumeFs {
  font-size: 24px;
}
</style>
