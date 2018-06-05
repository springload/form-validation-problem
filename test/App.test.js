import React from 'react'
import {shallow} from 'enzyme'

import App from '../components/App'

test('<App />', () => {
  const expected = '<Form />'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
