import React, { Component } from 'react'
import './styles/forecast.css'
import Api from './Api'
import DayForecast from './DayForecast'
import './styles/forecast.css'

class Forecast extends Component {
  constructor(props){
    super(props)
    this.state = {
      forecast: null,
      activeDay: 0,
    }
  }

  componentDidMount(){
    Api.fetchForecast()
      .then((forecast) => {
        this.setState({ forecast: forecast })
      })
      .catch((error) => {
        console.log(`Error => ${error}`)
      })
  }

  revealHourly = (day) => {
    if(day === this.state.activeDay){
      this.setState({ activeDay: null })
      return
    }

    this.setState({
      activeDay: day
    })
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

    const renderedDays = days.map((day, index) => <DayForecast hours={day} day={index} revealHourly={this.revealHourly} active={this.state.activeDay === index ? 'active' : ''} key={index} />)

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