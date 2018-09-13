import React from 'react'
import Forecast from '../Forecast'
import { shallow, mount, render } from 'enzyme'

it('shallow renders', () => {
  shallow(<Forecast />)
})