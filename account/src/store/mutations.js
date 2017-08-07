// https://vuex.vuejs.org/en/mutations.html

import * as TYPES from './types'

/* eslint-disable no-param-reassign */
export default {
  [TYPES.NAVIGATION_SET_TITLE] (state, obj) {
    state.navigationTitle = obj
  },
  [TYPES.PROJECTS_SET_DISPLAY] (state, obj) {
    state.displayBlocks = obj
  },
  [TYPES.MAIN_SET_FETCHING] (state, obj) {
    state.fetching = obj.fetching
  },
  [TYPES.MAIN_SET_MESSAGE] (state, obj) {
    state.messages[obj.type] = obj.message
  },
  [TYPES.NAVIGATION_SET_DISPLAY] (state, display) {
    state.showNavigationBar = display
  }
}
