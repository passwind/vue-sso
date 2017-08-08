// https://vuex.vuejs.org/en/mutations.html

import * as TYPES from './types'
import localforage from 'localforage'
// plugins and src are alias. see client/build/webpack.base.conf.js
import { userTokenStorageKey } from '../config'
import { setToken as httpSetToken } from '../plugins/http'

/* eslint-disable no-param-reassign */
export default {
  [TYPES.SET_TOKEN] (state, value) {
    state.token = value

    httpSetToken(state.token)

    /**
     * Sets the token to the local storage
     * for auto-login purpose
     */
    localforage.setItem(userTokenStorageKey, state.token)
  }
}
