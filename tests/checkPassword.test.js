var submission = require('./testfunctions.js')

test("checkPassword returns false for a password that is less than 8 characters", function () {
  var expected = false
  var actual = submission.checkPassword('anthony')
  expect(actual).toBe(expected)
})

test("checkPassword returns true for a password that is 8 characters", function () {
  var expected = true
  var actual = submission.checkPassword('anthony1')
  expect(actual).toBe(expected)
})

test("checkPassword returns true for a password that is more than 8 characters", function () {
  var expected = true
  var actual = submission.checkPassword('anthony1993')
  expect(actual).toBe(expected)
})
