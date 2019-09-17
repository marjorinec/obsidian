import {
  SET_RATE,
  SET_READY,
  initialState
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
    default:
      return state
  }
}

export default reducer