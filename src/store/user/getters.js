export const user = (state) => {
  return {
    isLogin: state.token.length > 0,
    isAdmin: state.role === 1,
    isBlock: state.block === true,
    ...state
  }
}
