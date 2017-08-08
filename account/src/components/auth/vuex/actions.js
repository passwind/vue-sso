export const attemptLogin = ({ dispatch }, payload) => {
  if (payload.email === 'test' && payload.password === 'test') {
    return 'token-from-account'
  }
  return false
}

export const logout = ({ dispatch }) => {
  // call actions
  return Promise.all([
    dispatch('setToken', null),
    dispatch('setUser', {})
  ])
}
