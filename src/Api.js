import forecast from './mock_data/mock_5day.js'


export default class Api {
  static fetchForecast(days = 5){
    // const url = 'http://api.openweathermap.org/data/2.5/forecast?id=5128638&APPID=17b563c2b128998b9650d6f3d573092e&units=imperial'
    // fetch(url)
    //   .then((response) => {
    //     console.log('success ' + response)
    //   })
    //   .catch((error) => {
    //     console.log('error ' + error)
    //   })

    return JSON.parse(forecast)
  }
}