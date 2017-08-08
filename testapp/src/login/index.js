export default {
  ssoLogin (ret) {
    var callback = 'http://localhost:8081' + ret
    window.location.href = 'http://localhost:8080/sso/signin?' + 'returl=' + encodeURIComponent(callback)
  }
}
