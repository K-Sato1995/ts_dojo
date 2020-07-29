// type PhoneNumber = number & { _: "PhoneNumber" }
type Opaque<K, T> = T & { K: never }

// Example1

const validatePhoneNumber = (input: number) => {
  if (Math.floor(input) !== input) {
    throw new Error('Invalid account number, must be an integer!')
  }
  return input as PhoneNumber
}

const logPhoneNumber = (num: PhoneNumber) => {
  console.log(num)
}

logPhoneNumber(validatePhoneNumber(323)) //=> 323

// Example2
declare const validPassword: unique symbol

type Password = string & { validPassword: never }

type User = {
  name: string
  password: Password
}

const validatePassword = (input: string) => {
  if (input.length < 8) {
    throw new Error('パスワードは8文字以上で入力してください。')
  }

  return input as Password
}

const user1: User = { name: 'user1', password: validatePassword('12345678') }
const user2: User = { name: 'user1', password: validatePassword('1234') }

console.log(user1)
