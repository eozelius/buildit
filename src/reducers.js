import { combineReducers } from 'redux'

const   forecastReducer = (state = {}, action) => {
 switch (action.type) {
  case 'GET_FORECAST':
    return {
      forecast: action.payload
    }
  default:
    return state
  }
}

export default combineReducers({
  forecastReducer
});