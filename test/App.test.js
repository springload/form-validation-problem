import App from '../components/App'
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

test('<App />', () => {
  const expected = '<Form />'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
