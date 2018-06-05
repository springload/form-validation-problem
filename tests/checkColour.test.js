var submission = require('./testfunctions.js')

test("checkColour returns false when no colour has been selected", function () {
  var expected = false
  var actual = submission.checkColour('')
  expect(actual).toBe(expected)
})

test("checkColour returns true when a colour has been selected", function () {
  var expected = true
  var actual = submission.checkColour('blue')
  expect(actual).toBe(expected)
})
