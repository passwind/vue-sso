import store from '../store'
import login from '../login'

const needAuth = auth => auth === true

const beforeEach = (to, from, next) => {
  const auth = to.meta.requiresAuth

  /**
   * If route doesn't require authentication be normally accessed.
   */
  if (!needAuth(auth)) {
    next()
    return // return to prevent the code from continuing in its flow
    // With this flow `else` or `else if` is not necessary
  }

  if (to.query.from === 'sso' && to.query.token.length > 0) {
    store.dispatch('setToken', to.query.token).then(() => {
      store.dispatch('checkUserToken')
        .then(() => {
          // hide the from & token
          // TODO: is there a more elegant method?
          var nurl = to.path
          var delim = '?'
          for (var key in to.query) {
            if (key !== 'from' && key !== 'token') {
              nurl = nurl + delim + key + '=' + to.query[key]
              delim = '&'
            }
          }
          // There is a token and it is valid
          next(nurl) // can access the route
        })
        .catch(() => {
          // No token, or it is invalid
          // next() // redirect to login
          login.ssoLogin(to.fullPath)
        })
    })
  }

  /**
   * Otherwise  if authentication is required login.
   */
  store.dispatch('checkUserToken')
    .then(() => {
      // There is a token and it is valid
      next() // can access the route
    })
    .catch(() => {
      // No token, or it is invalid
      // next() // redirect to login
      login.ssoLogin(to.fullPath)
    })
}

export default beforeEach
