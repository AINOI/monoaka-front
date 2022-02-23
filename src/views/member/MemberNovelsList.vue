<template lang="pug">
b-container#membernovelsList.mt-5
  b-table(striped hover :items='novelsFilterMemberNovelsList' :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style="height: 50px;")
    template(#cell(edit)='data')
      b-btn.aino-btn-third.aino-bg-third(@click='editNovels(data.index)') 編輯
  b-modal#modal-novel(
    size="lg"
    centered
    ok-title='更新'
    cancel-title='取消編輯'
    @ok="republish"
    @hidden="resetForm"
    :ok-disabled="modalSubmitting"
    :cancel-disabled="modalSubmitting"
  )
    img-inputer(
      accept="image/*"
      v-model="form.image"
      theme="light"
      size="large"
      bottomText="點選或拖曳圖片以修改"
      hoverText="點選或拖曳圖片以修改"
      placeholder="點選或拖曳選擇圖片"
      :max-size="1024"
      exceed-size-text="檔案大小不能超過"
    )
    b-form-group(
      label='文作名稱:'
      label-for='input-title'
      :state='state.title'
    )
      b-form-input#input-title(
        v-model='form.title'
        type='text'
        required
        :state='state.title'
      )
    b-form-group(
      label='文作分類:'
      label-for='input-novelType'
      :state='state.novelType'
    )
      b-form-select#input-novelType(
        v-model='form.novelType'
        required
        :options='novelTypes'
        :state='state.novelType'
      )
    b-form-group(
      label='文作概要:'
      label-for='input-summary'
      :state='state.summary'
    )
      b-form-textarea#input-summary(
        v-model='form.summary'
        type='text'
        required
        :state='state.summary'
        rows='5' max-rows="6"
      )
    b-form-group(
      label='文作內文:'
      label-for='input-text'
      :state='state.text'
    )
      b-form-textarea#input-text(
        v-model='form.text'
        type='text'
        required
        :state='state.text'
        rows='20'
      )
</template>

<script>
export default {
  data () {
    return {
      form: {
        image: null,
        title: '',
        summary: '',
        novelType: '',
        text: '',
        index: -1,
        _id: '',
        publishDate: new Date()
      },
      novelTypes: [
        { text: '請選擇文作類別', value: '' },
        '奇幻', '古風', '寫實', '玄怪', '恐怖', '愛情', '科幻', '同人', '西洋', '東方'
      ],
      modalSubmitting: false,
      novels: [],
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'title', label: '文作名稱' },
        { key: 'novelType', label: '文作分類' },
        { key: 'publishDate', label: '上傳日期' },
        { key: 'edit', label: '編輯' }
      ]
    }
  },
  computed: {
    state () {
      return {
        title: this.form.title.length === 0 ? null : true,
        summary: this.form.summary.length === 0 ? null : true,
        novelType: this.form.novelType.length === 0 ? null : true,
        text: this.form.text.length === 0 ? null : true
      }
    },
    novelsFilterMemberNovelsList () {
      return this.novels.filter(item => {
        if (item.authorId === this.user._id) {
          return true
        }
      })
    }
  },
  methods: {
    async republish (event) {
      event.preventDefault()
      if (!this.state.title || !this.state.summary || !this.state.novelType || !this.state.text) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/novels', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.novelsFilterMemberNovelsList.push(data.result)
        } else {
          const { data } = await this.api.patch('/novels/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.novelsFilterMemberNovelsList[this.form.index] = { ...this.form, image: data.result.image }
          this.$refs.table.refresh()
        }
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '編輯成功'
        })
        this.$bvModal.hide('modal-novel')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        image: null,
        title: '',
        summary: '',
        novelType: '',
        text: '',
        index: -1,
        _id: ''
      }
    },
    editNovels (index) {
      // this.form = {
      //   image: null,
      //   title: this.novels[index].title,
      //   summary: this.novels[index].summary,
      //   novelType: this.novels[index].novelType,
      //   text: this.novels[index].text,
      //   _id: this.novels[index]._id
      // }
      // or this type
      this.form = { ...this.novelsFilterMemberNovelsList[index], image: null, index }
      this.$bvModal.show('modal-novel')
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('novels/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.novels = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '文作取得失敗'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss';

tr {
  th {
    width: 100px;
  }
}
</style>
