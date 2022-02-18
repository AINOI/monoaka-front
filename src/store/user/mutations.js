export const login = (state, data) => {
  state.token = data.token
  state._id = data._id
  state.account = data.account
  state.nickname = data.nickname
  state.image = data.image
  state.role = data.role
  state.email = data.email
  state.novel = data.novel
  state.emailswitch = data.emailswitch
  state.sex = data.sex
  state.birthdayMon = data.birthdayMon
  state.birthdayDate = data.birthdayDate
}

export const logout = (state, data) => {
  state.token = ''
  state._id = ''
  state.account = ''
  state.nickname = ''
  state.image = ''
  state.role = 0
  state.email = ''
  state.emailswitch = ''
  state.sex = ''
  state.birthdayMon = ''
  state.birthdayDate = ''
}

export const getInfo = (state, data) => {
  state._id = data._id
  state.account = data.account
  state.nickname = data.nickname
  state.image = data.image
  state.role = data.role
  state.email = data.email
  state.novel = data.novel
  state.emailswitch = data.emailswitch
  state.sex = data.sex
  state.birthdayMon = data.birthdayMon
  state.birthdayDate = data.birthdayDate
}

export const updateInfo = (state, data) => {
  state.nickname = data.nickname
  state.image = data.image
  state.novel = data.novel
  state.emailswitch = data.emailswitch
  state.sex = data.sex
  state.birthdayMon = data.birthdayMon
  state.birthdayDate = data.birthdayDate
}
