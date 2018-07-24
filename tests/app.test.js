import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import App from '../client/components/App'

test('h1 text shows on App', () => {
  const expected = "It's the obligatory....Hello world"

  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})