import {
  RECEIVE_CATELIST
} from './mutation-types'

import {
  reqCateList,
} from '../api'

export default {
  async getCateList({commit}, callback) {
    const result = await  reqCateList()
    if (result.code === 0) {
      const cateList = result.data
      commit(RECEIVE_CATELIST, {cateList})
      typeof(callback) === 'function' &&callback()
    }
  },
}
