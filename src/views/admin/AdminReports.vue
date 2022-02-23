<template lang="pug">
b-container#adminissues.my-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 問題回報管理
  b-table(striped hover :items='reports' :fields='fields' ref='table')
    template(#cell(processState)='data')
      | {{ data.item.processed ? '已處理完成' : '尚未處理' }}
    template(#cell(detail)='data')
      b-btn.aino-btn-third.aino-bg-third(@click='adminReportsDetail(data.index)') 詳細狀況
    template(#cell(delete)='data')
      b-btn.aino-btn-third.bg-danger(@click='adminDeleteReports(data.index)') 刪除

  b-modal#modal-adminReportsDetail(
    size="lg"
    centered
    title='詳細狀況'
    ok-title='處理完成'
    cancel-title='取消編輯'
    ok-variant='success'
    cancel-variant='danger'
    @ok=''
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
        .reportTextBox.px-3.py-3.mt-3 {{ this.form.reportText }}

  b-modal#modal-adminDeleteReports(
    size="lg"
    centered
    ok-title='確認刪除'
    cancel-title='取消刪除'
    ok-variant='danger'
    cancel-variant='success'
    @ok='deleteReports'
  )
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
    async deleteReports () {
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
@import '../../../scss/primary.scss' ;

.reportTextBox {
  width: 100%;
  border: 1px solid $font-second;
  border-radius: 10px;
  color: $font-primary;
}
</style>
