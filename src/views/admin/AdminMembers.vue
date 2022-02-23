<template lang="pug">
b-container#adminmembersList.my-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 用戶管理
  b-table(striped hover :items='accounts' :fields='fields' ref='table')
    template(#cell(AccountState)='data')
      | {{ data.item.block ? '停用中' : '啟用中' }}
    template(#cell(Block)='data')
      b-btn.aino-btn-third.aino-bg-third(@click='adminBlockAccount(data.index)') 停用帳號
    template(#cell(RetreatMember)='data')
      b-btn.aino-btn-third.aino-bg-wood(@click='adminRetreatMember(data.index)') 恢復帳號
    template(#cell(DeleteAccount)='data')
      b-btn.aino-btn-third.bg-danger(@click='adminDeleteAccount(data.index)') 刪除

  b-modal#modal-adminBlockAccount(
    size="lg"
    centered
    ok-title='確認停用'
    cancel-title='取消編輯'
    ok-variant='danger'
    cancel-variant='success'
    @ok="blockAccount(true)"
  )
    .h2.text-center 是否暫時停用此帳號?

  b-modal#modal-adminRetreatMember(
    size="lg"
    centered
    ok-title='確認重啟'
    cancel-title='取消編輯'
    ok-variant='danger'
    cancel-variant='success'
    @ok="blockAccount(false)"
  )
    .h2.text-center 是否重新啟用此帳號?

  b-modal#modal-adminDeleteAccount(
    size="lg"
    centered
    ok-title='確認刪除'
    cancel-title='取消刪除'
    ok-variant='danger'
    cancel-variant='success'
    @ok="deleteAccount()"
  )
    .h2.text-center 是否刪除此帳號?
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        nickname: '',
        email: ''
      },
      accounts: [],
      fields: [
        { key: 'account', label: '帳號' },
        { key: 'nickname', label: '創作者名稱' },
        { key: 'email', label: 'email' },
        { key: 'AccountState', label: '帳號狀態' },
        { key: 'Block', label: '停用帳號' },
        { key: 'RetreatMember', label: '恢復帳號' },
        { key: 'DeleteAccount', label: '刪除' }
      ]
    }
  },
  methods: {
    adminBlockAccount (index) {
      this.form = { ...this.accounts[index], index }
      this.$bvModal.show('modal-adminBlockAccount')
    },
    adminRetreatMember (index) {
      this.form = { ...this.accounts[index], index }
      this.$bvModal.show('modal-adminRetreatMember')
    },
    adminDeleteAccount (index) {
      this.form = { ...this.accounts[index], index }
      this.$bvModal.show('modal-adminDeleteAccount')
    },
    async blockAccount (value) {
      try {
        const { data } = await this.api.patch('/users/accountstate/' + this.form._id, { block: value }, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.accounts[this.form.index] = { ...this.form, block: value }
        this.$refs.table.refresh()
        console.log(data)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '編輯成功'
        })
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '編輯失敗'
        })
      }
    },
    async deleteAccount () {
      try {
        const { data } = await this.api.delete('/users/deleteaccount/' + this.form._id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '使用者資料刪除成功'
        })
        this.accounts.splice(this.form.index, 1)
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '使用者資料刪除失敗'
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('users/getall', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.accounts = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '使用者資料取得失敗'
      })
    }
  }
}
</script>
