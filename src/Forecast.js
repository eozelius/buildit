import React, { Component } from 'react'
import './styles/forecast.css'
import Api from './Api'

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
    if(this.state.forecast){
      const myForecast = this.state.forecast.list.slice(0)
      console.log(myForecast)
      window.e = myForecast

      for(let i = 0; i < myForecast.length; i += 7){
        // const day = myForecast.splice(0, 8)
        //console.log('day')
        //console.log(day)
      }
    }

    return (
      <div className="forcast">
        Forecast placeholer        
      </div>
    );
  }
}

export default Forecast