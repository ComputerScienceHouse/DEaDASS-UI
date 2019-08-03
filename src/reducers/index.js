import { combineReducers } from 'redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { connectRouter } from 'connected-react-router'
import {
  REQUEST_DATABASES,
  RECEIVE_DATABASES
} from '../actions/get'

function apis (state = {
  isFetching: false
},
action) {
  switch (action.type) {
    case REQUEST_DATABASES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DATABASES:
      return Object.assign({}, state, {
        isFetching: false,
        databases: action.databases,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  oidc: oidcReducer,
  apis
})
