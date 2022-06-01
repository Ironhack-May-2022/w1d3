// console.log('objects intro')
const person = {
	name: 'rick',
	dimension: 'earth-c-137',
	'first name': 'hans',
	address: {
		street: 'Friedrichstr.',
		city: 'Berlin'
	},
	hobbies: ['chess', 'alcohol']
}
// access nested arrays
console.log(person.hobbies[0])
// access nested objects
console.log(person.address.city)

// access some values in an object
// console.log(person.name)
// change a value
person.name = 'morty'
// console.log(person)
// add a key value pair
person.age = 13
// console.log(person)

const key = 'name'

// use the variable 'key' to access one of the values
// here we have to use the bracket notation
console.log(person[key])
console.log(person.dimension)

// access a key that has a space
console.log(person['first name'])

console.log(person.height) // -> undefined

// if (person.height !== undefined) {
// 	console.log('this key is present')
// }
// check if name is a key in person
// if ('name' in person) {
// 	console.log('name is there')
// }

delete person.age
// console.log(person)

// iterate over an object

// for in loop
const user = {
	name: 'rick',
	password: '123'
}
for (let key in user) {
	console.log(user[key])
}

const keys = Object.keys(user)
console.log(keys) // -> [ 'name', 'password' ]

for (let key of keys) {
	console.log(user[key])
}
const values = Object.values(user)
console.log(values) // -> ['rick', '123']

const entries = Object.entries(user)
console.log(entries) // -> [ [ 'name', 'rick' ], [ 'password', '123' ] ]

const persons = [
	{
		name: 'Alice',
		age: 33
	},
	{
		name: 'Bob',
		age: 38
	}
]
// iterate over persons and log every name

for (let person of persons) {
	console.log(person.name)
	console.log(person.age)
}