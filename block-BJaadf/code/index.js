let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end


fruits.push("papaya")
5
fruits
(5) ['Banana', 'Orange', 'Apple', 'Mango', 'papaya']

// Remove the last element from fruits array

fruits.pop("Papaya")
'Papaya'
fruits
(4) ['Banana', 'Orange', 'Apple', 'Mango']

// Log the current length of fruits array

console.log(fruits.length)

// Remove the first element from fruits and log the value of fruits (use delete arr[0])

fruits.shift()
'Banana'
fruits
(4) ['Orange', 'Apple', 'Mango', 'Papaya']

// Log the element on index 0 and 1

console.log(fruits.indexOf(0,1));

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift("Guava")
5
fruits
(5) ['Guava', 'Orange', 'Apple', 'Mango', 'Papaya']



// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift("Dragan fruit")
6
fruits
(6) ['Dragan fruit', 'Guava', 'Orange', 'Apple', 'Mango', 'Papaya']

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

fruits.includes("Dragan fruit","Guava")
true

// Update the value of index 1 to `Pears`

fruits.unshift("Pears")
7
fruits
(7) ['Pears', 'Dragan fruit', 'Guava', 'Orange', 'Apple', 'Mango', 'Papaya']

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1,0, "Kiwi","Lemon")
fruits
(9) ['Pears', 'Kiwi', 'Lemon', 'Dragan fruit', 'Guava', 'Orange', 'Apple', 'Mango', 'Papaya']

// Remove (slice) all the element from index 5

fruits.slice(5)
(4) ['Orange', 'Apple', 'Mango', 'Papaya']

// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits = ['Berries', 'Melons']

// Concat moreFruits into fruits array (re-assign so the value gets updated)

fruits.concat(moreFruits)
(11) ['Pears', 'Kiwi', 'Lemon', 'Dragan fruit', 'Guava', 'Orange', 'Apple', 'Mango', 'Papaya', 'Berries', 'Melons']

// Log the name of all fruit in console

console.log(fruits)

// Convert each fruit name to lowercase and log it

fruits = ['Pears', 'Kiwi', 'Lemon', 'Dragan fruit', 'Guava', 'Orange', 'Apple', 'Mango', 'Papaya', 'Berries', 'Melons']
fruits.forEach((e)=>{
  console.log(e.toLowerCase())
})

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

let lowercaseFruits = []
fruits.forEach((e)=>{
  console.log(e.toLowerCase())
 lowercaseFruits.push(e.toLowerCase())
})

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

fruits.forEach((element)=>{
  console.log(element.toUpperCase())
  })

  uppercaseFruits=[]
fruits.forEach((element)=>{
console.log(element.toUpperCase())
uppercaseFruits.push(element.toUpperCase)
})

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

let numbers = [1, 2, [3, 4]];
numbers.flat(2)
(4) [1, 2, 3, 4]

let numbersTwo = [1, 2, [3, 4, [5, 6]]];
numbersTwo.flat(3)
(6) [1, 2, 3, 4, 5, 6]

let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
numbersThree.flat(5)
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

let numbersTwo = [1, 2, [3, 4, [5, 6]]];
numbersTwo.flat(3)
(6) [1, 2, 3, 4, 5, 6]



// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
numbersThree.flat(5)
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

or 

numbersThree = numbersThree.flat(infinity)


// Use forEach to log all the elements of numberThree array

let numbersThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function element(a){
  console.log(a);
  }
  numbersThree.forEach(element)

  or

  numbersThree.forEach((num) => console.log(num));
  


// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let numbersThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let doubleNumbers = []
numbersThree.forEach(e=>{
doubleNumbers.push(e)
})
doubleNumbers
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function doubleNumber(num){
  return num * 2;
  }
  
  doubleNumber(4)
  8

  or

  let doubleNumbers = numbersThree.map((ele)=> ele *2);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let numbersThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tripleNumbers = []
numbersThree.forEach(e=>{
tripleNumbers.push(e)
})
tripleNumbers
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tripleNumber(num){
  return num * 3;
  }
  undefined
  tripleNumber(4)
  12

  or

  let tripleNumbers = numbersThree.map((ele)=> ele * 3);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let numbersThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let halfNumbers = []
numbersThree.forEach(e=>{
halfNumbers.push(e)
})
halfNumbers
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function halfNumber(num){
  return num / 3;
  }
  undefined
  halfNumber(4)
  2

  or

  let halfNumbers = numbersThree.map((ele)=> ele  / 2);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNumbers= numbersThree.filter(
  (ele)=> ele % 2 !== 0
)



// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumbers= numbersThree.filter(
  (ele)=> ele % 2 === 0
)



// Find the index of 10 in numbersThree array

let numbersThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
undefined
numbersThree.indexOf(10)
9

numbersThree.find((num)=> num === 10);

// Reverse the values of numbersThree array

numbersThree.reverse()
(12) [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Reverse the values of numbersTwo array

numbersTwo.reverse()
(12) [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Join all fruits with '-', convert to uppercase and log it


console.log(fruits.join('-').toLowerCase);

// Join all fruits with '&', convert to lowercase and log it

console.log(fruits.join('&').toUpperCase);