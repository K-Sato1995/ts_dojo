var validatePhoneNumber = function (input) {
  if (Math.floor(input) !== input) {
    throw new Error('Invalid account number, must be an integer!')
  }
  return input
}
var logPhoneNumber = function (num) {
  console.log(num)
}
logPhoneNumber(validatePhoneNumber(323)) //=> 323
console.log(validPassword)
var validatePassword = function (input) {
  if (input.length < 8) {
    throw new Error('パスワードは8文字以上で入力してください。')
  }
  return input
}
var user1 = { name: 'user1', password: validatePassword('12345678') }
var user2 = { name: 'user1', password: validatePassword('1234') }
