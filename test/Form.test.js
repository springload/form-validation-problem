import './setup-dom'
import Form from '../components/Form'

import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

// Test suite setup
test('Test suite working', () => {
  expect(true).toBe(true)
})

// Initial State
test('initial state returns correctly', () => {
  const expected = {
    email: '',
    password: '',
    colour: '',
    animals: [],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const wrapper = shallow(<Form />)
  const actual = wrapper.instance().state
    expect(actual).toEqual(expected)
})

// User Input
test('handleUserInput adds to state', () => {
  const initialState = {
    email: ''
  }
  const testEvent = {
    target: {
      name: 'email',
      value: 'test@test.com'
    }
  }
  const expected = {
    email: testEvent.target.value
  }

  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().handleUserInput(testEvent)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('handleAnimalChoice adds to empty state', () => {
  const initialState = {
    animals: []
  }

  const testEvent = {
    target: {
      name: 'animals',
      value: 'bear'
    }
  }
  const expected = {
    animals: [...initialState.animals, testEvent.target.value]
  }

  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().handleAnimalChoice(testEvent)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('handleAnimalChoice filters out unchecked animals', () => {
  const initialState = {
    animals: ['bear']
  }

    const testEvent = {
      target: {
        name: 'animals',
        value: 'bear'
      }
    }
    const expected = {
      animals: []
    }

    const wrapper = shallow(<Form />)
    wrapper.instance().render = () => <div></div>
    wrapper.instance().state = initialState
    wrapper.instance().handleAnimalChoice(testEvent)

    const actual = wrapper.instance().state
    expect(actual).toEqual(expected)
})

// onSubmit validation
test('validate recognises valid inputs in state', () => {
  const initialState = {
    email: 'test@test.com',
    password: 'testtesttest',
    colour: 'blue',
    animals: ['bear', 'snake'],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    valid: true
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('validate recognises valid inputs in state with Tiger', () => {
  const initialState = {
    email: 'test@test.com',
    password: 'testtesttest',
    colour: 'blue',
    animals: ['bear', 'tiger'],
    tiger_type: 'cool',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    valid: true
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('validate recognises invalid email input', () => {
  const initialState = {
    email: 'test',
    password: 'testtesttest',
    colour: 'blue',
    animals: ['bear', 'snake'],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    errors: ['email']
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('validate recognises invalid password input', () => {
  const initialState = {
    email: 'test@test.com',
    password: '',
    colour: 'blue',
    animals: ['bear', 'snake'],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    errors: ['password']
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('validate recognises invalid colour input', () => {
  const initialState = {
    email: 'test@test.com',
    password: 'testtesttest',
    colour: '',
    animals: ['bear', 'snake'],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    errors: ['colour']
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('validate recognises invalid animal input', () => {
  const initialState = {
    email: 'test@test.com',
    password: 'testtesttest',
    colour: 'blue',
    animals: ['bear'],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    errors: ['animal']
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('validate recognises invalid tiger input', () => {
  const initialState = {
    email: 'test@test.com',
    password: 'testtesttest',
    colour: 'blue',
    animals: ['bear', 'tiger'],
    tiger_type: '',
    errors: [],
    valid: false
  }
  const expected = {
    ...initialState,
    errors: ['tiger']
  }
  const e = {
    preventDefault: () => ({})
  }
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().validate(e)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

// Errors
test('displayErrorMessage returns a default of undefined', () => {
  const error = []
  const expected = undefined
  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>

  const actual = wrapper.instance().displayErrorMessage()
  expect(actual).toEqual(expected)
})

test('displayErrorMessage outputs correct error types', () => {
  const errors = [
    'email',
    'password',
    'colour',
    'animal',
    'tiger'
  ]

  const wrapper = shallow(<Form />)
  wrapper.instance().render = () => <div></div>
  errors.forEach(error => {
  const actual = wrapper.instance().displayErrorMessage(error)
  expect(actual).toBeTruthy()
  })
})

test('displayErrorMessage displays errors from state', () => {
  const state = {
    errors: [
      'email'
    ]
  }
  const expected = 'Please enter a valid email address.'
  const wrapper = shallow(<Form />)
  wrapper.instance().displayErrorMessage = () => expected
  wrapper.instance().state = state

  const actual = shallow(wrapper.instance().render())
  expect(actual.find('#errorDisplay').text()).toBe(expected)
})

test('displayErrorMessage can display more than one error message', () => {
  const state = {
    errors: [
      'email',
      'password'
    ]
  }
  const emailErrorMessage = 'Please enter a valid email address.'
  const passwordErrorMessage = 'Your password must have at least 8 characters.'
  const expectedMessage = emailErrorMessage + passwordErrorMessage
  const expectedLength = 2

  const wrapper = shallow(<Form />)
  wrapper.instance().dispayErrorMessage = () => errorMessages
  wrapper.instance().state = state

  const actual = shallow(wrapper.instance().render())
  expect(actual.find('#errorDisplay').text()).toBe(expectedMessage)
  expect(actual.find('#errorDisplay').children().length).toBe(expectedLength)
})

test('addErrorClass returns "error" on true', () => {
  const error = 'email'
  const state = {
    errors: [
      error
    ]
  }
  const expected = 'error'
  const wrapper = shallow(<Form />)
  wrapper.instance().state = state
  wrapper.instance().render = () => <div></div>

  const actual = wrapper.instance().addErrorClass(error)
  expect(actual).toBe(expected)
})

test('addErrorClass returns empty string on false', () => {
  const error = 'email'
  const state = {
    errors: [
      'password'
    ]
  }
  const expected = ''
  const wrapper = shallow(<Form />)
  wrapper.instance().state = state
  wrapper.instance().render = () => <div></div>

  const actual = wrapper.instance().addErrorClass(error)
  expect(actual).toBe(expected)
})
