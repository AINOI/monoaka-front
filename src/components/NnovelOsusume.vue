<template lang="pug">
b-container(fluid)
  b-row.NCardHeight(v-for='Nnovel in NnovelOsusume' :key='Nnovel._id')
    b-col.h-100(cols='4')
      img.h-100.objectfit.rounded.w-100(:src='Nnovel.image')
    b-col.h-100(cols='8')
      b-btn.w-100.h-100.border-0.justalign-center(:Nnovel='Nnovel._id' :to='"/novelpage/" + Nnovel._id')
        div(:Nnovel='Nnovel.title') {{ Nnovel.title }}
</template>

<script>
import arrayShuffle from 'array-shuffle'

export default {
  data () {
    return {
      NnovelOsusume: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/novels/')
      this.NnovelOsusume = arrayShuffle(data.result)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
}
</script>
