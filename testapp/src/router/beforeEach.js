import store from '../store'

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
          var callback = 'http://localhost:8081' + to.fullPath
          window.location.href = 'http://localhost:8080/sso/signin?' + 'returl=' + encodeURIComponent(callback)
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
      var callback = 'http://localhost:8081' + to.fullPath
      window.location.href = 'http://localhost:8080/sso/signin?' + 'returl=' + encodeURIComponent(callback)
    })
}

export default beforeEach
