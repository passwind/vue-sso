<template>
  <div class="well">
    <el-form ref="form" style="margin-top:72px">
      <el-form-item label="E-mail">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-button @click="submit">Login</el-button>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    /**
    * Component's local state
    */
    data () {
      return {
        email: 'test',
        password: 'test',
        returl: ''
      }
    },
    methods: {
      /**
      * Map the actions from Vuex to this component.
      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
      */
      ...mapActions(['attemptLogin', 'setMessage']),

      /**
      * Handle form's submit event
      */
      submit () {
        const { email, password, returl } = this // http://wesbos.com/destructuring-objects/
        // 前端数据验证
        this.attemptLogin({ email, password }) // this is a Vuex action
          .then((data) => {
            if (data === false) {

            } else {
              var ret = returl + '?' + 'token=' + data + '&from=sso'
              window.location.href = ret
            }
          })
      },
      /**
      * Reset component's local state
      */
      reset () {
        this.email = ''
        this.password = ''
      }
    },
    created () {
      this.returl = this.$route.query.returl
      console.log(this.returl)
    }
  }
</script>
