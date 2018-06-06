import { USER_AGE } from '../types/user'
import { createAction } from 'redux-actions'
import { apis } from "config";
import { request } from "utils";

/**
 * 仅作为对createAction方法的理解
 * @author whr
 */
// const getFn = createAction(TYPE, actionCreaterFn)
// getFn = function(...args){
//   return {
//     type: TYPE,
//     payload: actionCreaterFn(...args)
//   }
// }

export const getAge = createAction(USER_AGE, (age) => {
  return request(apis.test, {
    data: {
      helStr: age
    }
  })
})
