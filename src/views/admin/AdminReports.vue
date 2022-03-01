<template lang="pug">
b-container#adminreports.my-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12' :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") 問題回報管理
  b-table(striped :hover='!user.themeSwitcher' :items='reports' :fields='fields' ref='table' :class="{textDark:user.themeSwitcher, light:!user.themeSwitcher}")
    template(#cell(processState)='data')
      | {{ data.item.processed ? '已處理完成' : '尚未處理' }}
    template(#cell(detail)='data')
      b-btn.aino-btn-third(@click='adminReportsDetail(data.index)') 詳細狀況
    template(#cell(delete)='data')
      b-btn.aino-btn-danger(@click='adminDeleteReports(data.index)') 刪除

  b-modal#modal-adminReportsDetail(
    size="lg"
    centered
    title='詳細狀況'
    ok-title='處理完成'
    cancel-title='尚未處理'
    ok-variant='success'
    cancel-variant='danger'
    @ok='reportsState(true)'
    @cancel='reportsState(false)'
    :header-class="{modalDark:user.themeSwitcher, light:!user.themeSwitcher}"
    :body-class="{modalDark:user.themeSwitcher, light:!user.themeSwitcher}"
    :footer-class="{modalDark:user.themeSwitcher, light:!user.themeSwitcher}"
  )
    b-row.border-bottom
      b-col.d-flex.h5(cols='12')
        | 回報人帳號:
        .mx-3.text-primary {{ this.form.rpaccount }}
    b-row.border-bottom.mt-5
      b-col.d-flex.h5(cols='12')
        | 回報人名稱:
        .mx-3.text-primary {{ this.form.rpnickname }}
    b-row.border-bottom.mt-5
      b-col.d-flex.h5(cols='12')
        | 回報人E-mail:
        .mx-3.text-primary {{ this.form.rpemail }}
    b-row.border-bottom.mt-5
      b-col.d-flex.h5(cols='12')
        | 問題類型:
        .mx-3.text-primary {{ this.form.reportItem }}
    b-row.mt-5
      b-col.h5(cols='12')
        | 問題敘述:
        .reportTextBox.px-3.py-3.mt-3(:class="{textDark:user.themeSwitcher, light:!user.themeSwitcher}") {{ this.form.reportText }}

  b-modal#modal-adminDeleteReports(
    size="lg"
    centered
    ok-title='確認刪除'
    cancel-title='取消刪除'
    ok-variant='danger'
    cancel-variant='success'
    @ok='deleteReports'
    :header-class="{modalDark:user.themeSwitcher, light:!user.themeSwitcher}"
    :body-class="{modalDark:user.themeSwitcher, light:!user.themeSwitcher}"
    :footer-class="{modalDark:user.themeSwitcher, light:!user.themeSwitcher}"
  )
    .h2.deleteSignal.mx-auto.my-3
      div.deleteSignalText !
    .h2.text-center 是否刪除此回報?
</template>

<script>
export default {
  data () {
    return {
      form: {
        processed: false
      },
      reports: [],
      fields: [
        { key: 'rpaccount', label: '創作者帳號' },
        { key: 'rpnickname', label: '創作者名稱' },
        { key: 'reportItem', label: '問題類型' },
        { key: 'processState', label: '處理狀況' },
        { key: 'detail', label: '詳細狀況' },
        { key: 'delete', label: '刪除' }
      ]
    }
  },
  methods: {
    adminReportsDetail (index) {
      this.form = { ...this.reports[index], index }
      this.$bvModal.show('modal-adminReportsDetail')
    },
    adminDeleteReports (index) {
      this.form = { ...this.reports[index], index }
      this.$bvModal.show('modal-adminDeleteReports')
    },
    async reportsState (value) {
      try {
        const { data } = await this.api.patch('/reports/reportstate/' + this.form._id, { processed: value }, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '此回報問題已完成處理'
        })
        this.reports[this.form.index] = { ...this.form, processed: value }
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '處理狀態變更失敗'
        })
      }
    },
    async deleteReports () {
      if (!this.form.processed) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '此回報尚未處理完成'
        })
        return
      }
      try {
        const { data } = await this.api.delete('/reports/reportsdelete/' + this.form._id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '問題回報刪除成功'
        })
        this.reports.splice(this.form.index, 1)
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '問題回報刪除失敗'
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('reports/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.reports = data.result
      this.reports.reverse()
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '問題回報取得失敗'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/aino-style.scss' ;

</style>
