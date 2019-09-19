import {
  SET_RATE,
  SET_READY,
  initialState,
  INCREASE_BALANCE,
  DECREASE_BALANCE,
  REGISTER_TRANSACTION
} from './vars'

function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_RATE:
      return {
        ...state,
        rates: {
          ...state.rates,
          [action.coin] : action.rate
        }
      }
    case SET_READY:
      return {
        ...state,
        ready: true
      }
    case INCREASE_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          [action.coin]: state.balance[action.coin] + action.value
        }
      }
    case DECREASE_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          [action.coin]: state.balance[action.coin] - action.value
        }
      }
    case REGISTER_TRANSACTION:
      return {
        ...state,
        
      }
    default:
      return state
  }
}

export default reducer