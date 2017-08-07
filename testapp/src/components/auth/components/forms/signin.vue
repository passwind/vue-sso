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
        email: '',
        password: ''
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
        const { email, password } = this // http://wesbos.com/destructuring-objects/
        // 前端数据验证
        this.attemptLogin({ email, password, info_flag: true }) // this is a Vuex action
          .then((data) => {
            if (!data) {
              this.setMessage({ type: 'error', message: [] }) // this is a Vuex action
            } else {
              this.$router.push({ name: 'projects.index' })
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
    }
  }
</script>
