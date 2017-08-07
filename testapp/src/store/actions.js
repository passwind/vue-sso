// https://vuex.vuejs.org/en/actions.html
import * as TYPES from './types'

export default {
  setNavigationTitle ({ commit }, obj) {
    commit(TYPES.NAVIGATION_SET_TITLE, obj)
  },

  setDisplayBlocks ({ commit }, obj) {
    commit(TYPES.PROJECTS_SET_DISPLAY, obj)
  },

  setFetching ({ commit }, obj) {
    commit(TYPES.MAIN_SET_FETCHING, obj)
  },

  setMessage ({ commit }, obj) {
    commit(TYPES.MAIN_SET_MESSAGE, obj)
  },

  resetMessages ({ commit }) {
    commit(TYPES.MAIN_SET_MESSAGE, { type: 'success', message: '' })
    commit(TYPES.MAIN_SET_MESSAGE, { type: 'error', message: [] })
    commit(TYPES.MAIN_SET_MESSAGE, { type: 'warning', message: '' })
    commit(TYPES.MAIN_SET_MESSAGE, { type: 'validation', message: [] })
  },

  setShowNavigationBar ({ commit }, display) {
    commit(TYPES.NAVIGATION_SET_DISPLAY, display)
  }
}
