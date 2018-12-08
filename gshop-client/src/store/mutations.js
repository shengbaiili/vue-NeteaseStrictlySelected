import {
  RECEIVE_CATELIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_POLICYDESCLIST,
} from './mutation-types'


export default {
  [RECEIVE_CATELIST](state, {cateList}){
    state.cateList = cateList
  },
  [RECEIVE_KINGKONGLIST](state, {kingKongList}){
    state.kingKongList = kingKongList
  },
  [RECEIVE_POLICYDESCLIST](state, {policyDescList}){
    state.policyDescList = policyDescList
  },
}
