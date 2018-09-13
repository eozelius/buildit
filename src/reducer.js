export const forecastReducer = (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_FORECAST_SUCCESS':
  console.log('action')
    return {
      forecast: action.payload
    }
  default:
    return state
  }
}
