// https://vuex.vuejs.org/en/mutations.html

import * as TYPES from './types'

/* eslint-disable no-param-reassign */
export default {
  [TYPES.SET_TOKEN] (state, value) {
    state.token = value
  }
}
