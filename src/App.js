import React, { Component } from 'react'
import './App.css'
import ForecastContainer from './containers/ForecastContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Buildit 5 day forecast!</h1>
        </header>
        <ForecastContainer />
      </div>
    );
  }
}

export default App
