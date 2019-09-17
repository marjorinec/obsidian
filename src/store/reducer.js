import {
  SET_RATE,
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
    default:
      return state
  }
}

export default reducer