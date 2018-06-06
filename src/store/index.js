import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  store.subscribe(() => {
    // 方便在控制台查看state by whr 2018.6.1
    console.log('__state__:', store.getState());
  })
  return store
}