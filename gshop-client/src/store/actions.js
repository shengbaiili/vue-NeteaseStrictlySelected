import {
  RECEIVE_CATELIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_POLICYDESCLIST,
} from './mutation-types'

import {
  reqCateList,
  reqKingKongList,
  reqPolicyDescList
} from '../api'

export default {
  async getCateList({commit}, callback) {
    const result = await  reqCateList()
    if (result.code === 0) {
      const cateList = result.data
      commit(RECEIVE_CATELIST, {cateList})
      typeof(callback) === 'function' && callback()
    }
  },
  async getKingKongList({commit}) {
    const result = await  reqKingKongList()
    if (result.code === 0) {
      const kingKongList = result.data
      commit(RECEIVE_KINGKONGLIST, {kingKongList})
    }
  },
  async getPolicyDescList({commit}) {
    const result = await  reqPolicyDescList()
    console.log('+++',result)
    if (result.code === 0) {
      const policyDescList = result.data
      commit(  RECEIVE_POLICYDESCLIST, {policyDescList})
    }
  },
}
