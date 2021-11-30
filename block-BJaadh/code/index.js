// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101)
8

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9)
11

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.toString()
'This,is,a,collection,of,words'

or 
 
strings.join("");

// - Add two new words in the strings array "called" and "sentance"

strings.push("called","sentance")
12
strings
(12) ['This', 'is', 'a', 'collection', 'of', 'words', 'called', 'sentance', 'called', 'sentance', 'called', 'sentance']

or 

strings.push("called");
strings.push("sentance")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join("")

'This,is,a,collection,of,words,called,sentance,called,sentance,called,sentance'

// - Remove the first word in the array (strings)

strings.shift("This")
'This'
strings
(10) ['is', 'a', 'collection', 'of', 'words', 'called', 'sentance', 'called', 'sentance', 'called']

// - Find all the words that contain 'is' use string method 'includes'

strings.includes("is")

or 

let allIs = strings.filter((String)=> String.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'

strings.indexOf("is")
0

or 

let allIsAgain = strings.filter((string)=> string.indexOf("is") !== -1 );
// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((num)=> num % 3 === 0);

// -  Sort Array from smallest to largest

numbers.sort((a,b) => a - b );

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

numbers.forEach((large)=>{
  if ( numbers < large ){
     numbers  = large;
  }  
})

or 

let largest = numbers.sort((a,b)=> a - b).pop();

// - Find longest string in strings

let longestString = strings 
  .sort((a,b)=> a.length - b.length )
  .pop();

// - Find all the even numbers

let evenNumbers = numbers.filter((num) => num % 2 === 0 );
console.log(evenNumbers);

// - Find all the odd numbers

let evenNumbers = numbers.filter((num) => num % 2 != 0 );
console.log(evenNumbers);

// - Place a new word at the start of the array use (unshift)

strings.unshift("New World");

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(3,7);
[18, 9, 7, 11]

// - Make a subset of strings array ['a','collection']

strings.slice(2,4)
(2) ['a', 'collection']


// - Replace 12 & 18 with 1221 and 1881

numbers.splice(1,1,1221);
[12]
numbers
(12) [1, 1221, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9]
numbers.splice( 3,1,1881);
[18]
numbers
(12) [1, 1221, 4, 1881, 9, 7, 11, 3, 101, 5, 6, 9]

or 

console.log(
  numbers.map((num)=>{
    if(num === 12){
      return 1221;
    } else if (num === 18){
      return num;
    }
  })
);

// - Replace words in strings array with the length of the word

let stringlength = strings.map((element)=>element.length);
undefined
stringlength
(6) [4, 2, 1, 10, 2, 5]

// - Find the sum of the length of words using above question

stringlength.reduce((acc,num)=>{
  return acc = acc + num 
  },0)
                      
  24

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.filter((customer)=>{
  
  return customer.firstname[0] =='J'
 })

 or 

 let filteredCustomer = customers.filter((customer)=>
  customer.firstname.startsWith("J")
 )

// - Create new array with only first name

let firstName = [];
 customers.forEach((customer)=>{
   return firstName.push(customer.firstname)
 });

 or 

 let firstnameCustomer = customers.map(
  (customer)=> customer.firstname
);
 

// - Create new array with all the full names (ex: "Joe Blogs")

customers.forEach((customer)=>{
  let fullName = (`${customer.firstname}  ${customer.lastname}`)
arr.push(fullName)
});

or 

let fullnameCustomer = customers.map(
  (customer)=>
  `${customer.firstName} ${customer.lastname}`
);


// - Sort the array created above alphabetically

fulNames.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

customers.forEach((e)=>{
  if( e.firstname.includes("a") || e.firstname.includes("e") || e.firstname.includes("i") || 
e.firstname.includes("o") ||
e.firstname.includes("u") ){
  arr.push(e);
}
})
arr


or 

let vowels = ['a','e','i','o','u']
let vowelName = customers.filter(obj => obj.firstname.split('').some(letter=> vowels.includes(letter)))


vowelName
