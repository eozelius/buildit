import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ForecastContainer from '../containers/ForecastContainer'
import configureStore from '../store'

const renderContainer = () => {
  const div = document.createElement('div')
  const mock_store = { mock_store: 42 }
  ReactDOM.render(
    <Provider store={mock_store}>
      <ForecastContainer />
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div);
}

it('renders without crashing', () => {
  renderContainer()
})

it('renders a presentational <Forecast> with forecast props', () => {
  const wrapper = renderContainer()
  const mockState = { forecast: { mock_store: 42 } }



  // const initialState = {output:100}
  //   const mockStore = configureStore()
  //   let store,container

  //   beforeEach(()=>{
  //       store = mockStore(initialState)
  //       container = shallow(<ConnectedHome store={store} /> )  
  //   })
  // Mock the store data
  // check that the Forecast component is rendered with forecast prop 

  expect(wrapper.find('input').prop('value')).toEqual(mockStore)
})

it('dispatches a fetchForecast action after mounting', () => {

})