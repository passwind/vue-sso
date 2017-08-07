<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
                <ul class="nav nav-pills nav-stacked">
                    <router-link tag="li" :to="{ name: 'auth.signin' }">
                        <a>Sign in</a>
                    </router-link>
                    <router-link tag="li" :to="{ name: 'auth.signup' }">
                        <a>Sign up</a>
                    </router-link>
                </ul>
            </div>
        <div class="col-md-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['setNavigationTitle'])
  },
  created () {
    this.setNavigationTitle(this.$i18n.t('auth.nav.title'))
  }
}

</script>

<style lang="css">
</style>
