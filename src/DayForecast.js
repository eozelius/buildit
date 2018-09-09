import React, { Component } from 'react'
import HourForecast from './HourForecast'
import './styles/dayforecast.css'
import png_clearSky from './images/Clear Sky.png'

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

  getRain = () => {
    return this.props.hours.reduce((rainSum, hour) => {
      if(hour.rain['3h']){
        return rainSum + hour.rain['3h']
      } else {
        return rainSum
      }
    }, 0).toFixed(2)
  }

  render(){
    const date = this.getDate()
    const low = this.getLow()
    const high = this.getHigh()
    const description = this.getDescription()
    const rain = this.getRain()
    const hourlyListings = this.props.hours.map((hour, index) => <HourForecast hour={hour} key={index} />)

    console.log('state')
    console.log(this.state)

    return (
      <div className={`day-forecast ${this.props.active}`}>
        <p>{date}</p>

        <p>
          <img src={png_clearSky} />

        </p>
        <p>
          <span className='day-low'>{low}&deg;</span> / <span className='day-high'>{high}&#8457;</span>
        </p>

        <p className='day-description'>{description}</p>

        <p className='rain'>rain: {rain}</p>

        <p onClick={() => this.props.revealHourly(this.props.day)} className='hourly-link'>+ hourly</p>

        <div className='hourly-listings'>
          {hourlyListings}
        </div>
      </div>
    )
  }
}

export default DayForecast