import React, { Component } from 'react'
import './App.css'
import ForecastContainer from './containers/ForecastContainer'
import { Provider } from 'react-redux'
import configureStore from './store'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Buildit 5 day forecast!</h1>
          </header>
          <ForecastContainer />
        </div>
      </Provider>
    );
  }
}

export default App
