var submission = require('./testfunctions.js')

test("checkEmail returns false for an email that ends in an @", function () {
  var expected = false
  var actual = submission.checkEmail('anthony@')
  expect(actual).toBe(expected)
})

test("checkEmail returns false for an email without a proper url", function () {
  var expected = false
  var actual = submission.checkEmail('anthony@gmail')
  expect(actual).toBe(expected)
})

test("checkEmail returns false for an email without an address", function () {
  var expected = false
  var actual = submission.checkEmail('@gmail.com')
  expect(actual).toBe(expected)
})


test("checkEmail returns true for a correct email", function () {
  var expected = true
  var actual = submission.checkEmail('ant.gordon@gmail.com')
  expect(actual).toBe(expected)
})

test("checkEmail returns true for a different correct email", function () {
  var expected = true
  var actual = submission.checkEmail('antgordon1993@gmail.com')
  expect(actual).toBe(expected)
})