import {
  RECEIVE_CATELIST
} from './mutation-types'


export default {
  [RECEIVE_CATELIST](state, {cateList}){
    state.cateList = cateList
  },
}
