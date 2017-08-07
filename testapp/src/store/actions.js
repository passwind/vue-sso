// https://vuex.vuejs.org/en/actions.html
import * as TYPES from './types'
import localforage from 'localforage'
// src is a alias. see client/build/webpack.base.conf.js
import { userTokenStorageKey } from '../config'
import { isEmpty } from 'lodash'

const setToken = ({ commit }, payload) => {
  // prevent if payload is a object
  const token = (isEmpty(payload)) ? null : payload.token || payload

  // Commit the mutations
  commit(TYPES.SET_TOKEN, token)

  return Promise.resolve(token) // keep promise chain
}

const checkUserToken = ({ dispatch, state }) => {
  // If the token exists then all validation has already been done
  if (!isEmpty(state.token)) {
    return Promise.resolve(state.token)
  }

  /**
   * Token does not exist yet
   * - Recover it from localstorage
   * - Recover also the user, validating the token also
   */
  return localforage.getItem(userTokenStorageKey)
    .then((token) => {
      if (isEmpty(token)) {
        // Token is not saved in localstorage
        return Promise.reject('NO_TOKEN') // Reject promise
      }
      // Put the token in the vuex store
      return dispatch('setToken', token) // keep promise chain
    })
}

export default {
  setToken,
  checkUserToken
}
