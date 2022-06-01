const numbers = [1, 2, 3, 4, 5]

// gets an array and returns an array with all
// values doubled
function doubled(arr) {
	const copy = arr
	for (let i = 0; i < copy.length; i++) {
		copy[i] = copy[i] * 2
	}
	return copy
}

const result = doubled(numbers)
// console.log(result)
// console.log(numbers)

const str = 'abc'
let copy = str
console.log(copy)
copy = 'xyz'
console.log(copy)
console.log(str)

const arr = [1, 2, 3]
const copyArr = arr
copyArr.push(4)
console.log(copyArr)
console.log(arr)


// copy an array -> these are shallow copies 
const original = [2, 6]
// using slice()
// const copyOriginal = original.slice()
// using the spread operator
const copyOriginal = [...original]
console.log(copyOriginal)

// JSON stringify and parse
const strg = JSON.stringify({ user: 'rick' })
console.log(strg)
const obj = JSON.parse(strg)
console.log(obj)

const copyObj = JSON.parse(JSON.stringify({ user: 'morty' }))
console.log(copyObj)

// to compare objects change them to strings using 
// JSON.stringify
JSON.stringify([]) === JSON.stringify([])