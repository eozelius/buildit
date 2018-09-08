import React, { Component } from 'react'
import './styles/dayforecast.css'

class DayForecast extends Component {
  getDate = () => {
    const d = new Date(this.props.hours[0].dt_txt)
    return `${d.getMonth() + 1}/${d.getDate()}`
  }

  getLow = () => {
    let currentLow = this.props.hours[0].main.temp_min

    this.props.hours.forEach(hour => {
      if(hour.main.temp_min < currentLow){
        currentLow = hour.main.temp_min
      }
    })

    return Math.round(currentLow)
  }

  getHigh = () => {
    let currentHigh = this.props.hours[0].main.temp_max

    this.props.hours.forEach(hour => {
      if(hour.main.temp_max > currentHigh){
        currentHigh = hour.main.temp_max
      }
    })

    return Math.round(currentHigh)
  }

  getDescription = () => {
    return this.props.hours[4].weather[0].description
  }

  render(){
    const date = this.getDate()
    const low = this.getLow()
    const high = this.getHigh()
    const description = this.getDescription()

    return (
      <div className='day-forecast'>
        <p>{date}</p>
        <p>
          <span className='day-low'>{low}&deg;</span> / <span className='day-high'>{high}&#8457;</span>
        </p>

        <p className='day-description'>{description}</p>
      </div>
    )
  }
}

export default DayForecast