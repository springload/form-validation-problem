import React from 'react'
import {shallow} from 'enzyme'

import Form from '../components/Form'

test('<Form />', () => {
  const expected = 'Hello World!'
  const wrapper = shallow(<Form />)
  expect(wrapper.text()).toBe(expected)
})
