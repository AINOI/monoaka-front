<template lang="pug">
b-container#adminmembersList.mt-5
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 用戶管理
  b-table(striped hover :items='users' :fields='fields' ref='table')
    template(#cell(edit)='data')
      b-btn.aino-btn-third.bg-danger(@click='deleteUser(data.index)') 刪除
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
      users: [],
      fields: [
        { key: 'account', label: '帳號' },
        { key: 'nickname', label: '創作者名稱' },
        { key: 'email', label: 'email' },
        { key: 'edit', label: '刪除' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('users/getall', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.users = data.result
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
