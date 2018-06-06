import { handleActions } from 'redux-actions'
import { USER_FOLLOW, USER_AGE } from '../types/user'

export default handleActions({
  [USER_FOLLOW] (state) {
    return {
      ...state,
      followed: !state.followed
    }
  },
  [USER_AGE](state, action){
    return {
      ...state,
      age: action.payload
    }
  }
}, {
  followed: false,
  age: 0,
})
