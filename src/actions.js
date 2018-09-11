import Api from './Api.js'

export const getForecast = () => dispatch => {
  return Api.fetchForecast()
    .then((response) => {
      return dispatch({
        type: 'GET_FORECAST',
        payload: response
      })
    })
    .catch((error) => {
      console.log('error: ' + error)
    })
}