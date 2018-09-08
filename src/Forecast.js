import React, { Component } from 'react'
import './styles/forecast.css'
import Api from './Api'
import DayForecast from './DayForecast'
import './styles/forecast.css'

class Forecast extends Component {
  constructor(props){
    super(props)
    this.state = {
      forecast: null
    }
  }

  componentDidMount(){
    const forecast = Api.fetchForecast()
    this.setState({ forecast: forecast })
  }

  render() {
    const days = []
    const location = this.state.forecast ? this.state.forecast.city.name : ''

    if(this.state.forecast){
      const myForecast = this.state.forecast.list.slice(0)

      while(myForecast.length > 0){
        days.push(myForecast.splice(0,8))
      }
    }

    const renderedDays = days.map((day, index) => <DayForecast hours={day} key={index} />)

    return (
      <div className='forecast-container'>
        <h2>{location}</h2>
        <div className="forcast">
          { renderedDays }
        </div>
      </div>
    )
  }
}

export default Forecast