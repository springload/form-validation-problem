import './setup-dom'
import Form from '../components/Form'

import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

test('Test suit working', () => {
  expect(true).toBe('truthy')
})

// test('<Form />', () => {
//   const expected = 'Hello World!'
//   const wrapper = shallow(<Form />)
//   expect(wrapper.text()).toBe(expected)
// })
