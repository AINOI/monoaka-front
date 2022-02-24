import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

export const login = async ({ commit }, form) => {
  try {
    const { data } = await api.post('/users/login', form)
    commit('login', data.result)
    if (data.result.block === true) {
      commit('logout')
      router.push('/')
      swal.fire({
        icon: 'error',
        title: '登入失敗',
        text: '此帳號暫時被停用'
      })
    } else if (data.result.role === 1) {
      router.push('/')
      swal.fire({
        icon: 'success',
        title: '登入成功',
        text: '您已進入管理員模式'
      })
    } else {
      router.push('/')
      swal.fire({
        icon: 'success',
        title: '登入成功',
        text: '歡迎使用Mono‘s Archive'
      })
    }
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: error.response.data.message
    })
  }
}

export const logout = async ({ commit, state }) => {
  try {
    await api.delete('users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    router.push('/')
    swal.fire({
      icon: 'success',
      title: '登出成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: error.response.data.message
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}
