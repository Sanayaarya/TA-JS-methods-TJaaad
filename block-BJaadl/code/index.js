let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr){
  let long = "";
  arr.forEach((v)=>{
      if(v.length > long.length){
        long = v
      }
  })
     return long
}

// - Convert the above array "words" into an array of length of word instead of word.


let wordLength = words.map((word) =>  word.length)

// - Create a new array that only contains word with atleast one vowel.

let vowel =["a","e","i","o","u"]
let arr = []
words.forEach((word)=>{
  for(i=0; i<vowel.length;i++){
 if(word.includes(vowel[i])){
if(!arr.includes(word)){
   arr.push(word);
  }
 }
}
})

// - Find the index of the word "rhythm"

words.indexOf("rhythm")
7 

// - Create a new array that contians words not starting with vowel.



// - Create a new array that contianse words not ending with vowel

words.forEach(()=>{

  
})

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers


let sum = 0;
let sumArray = numbers.reduce((acc,num) => {
  return acc + num ;
} , 0)

 


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

numbers.reduce((acc,num)=>{
  return acc=acc.concat(num*3)
} , [])

// - Create a new array that contains only even numbers

let evenNumbers = numbers.filter((num) => num % 2 === 0 );
console.log(evenNumbers);

// - Create  a new array that contains only odd numbers.

let oddNumbers = numbers.filter((num) => num % 2 != 0 );
console.log(evenNumbers);


// - Create a new array that should have true for even number and false for odd numbers.

let isEvenTrueOddFalse = numbers.map((num) => {
  if ( num % 2 === 0 ){
    return true
  }
  else {
    return false
  }
} )


// - Sort the above number in assending order.

numbers.sort()
(10) [1, 1, 10, 12, 13, 16, 18, 2, 6, 8]

// - Does sort mutate the original array?

yes

// - Find the sum of the numbers in the array.

let sumOfNumber = numbers.reduce((acc,num) => acc + num ,0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];    

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


function averageWordLength(array){
  let sum = 0;
  let avg
  for (let i = 0 ; i < array.length ; i++ ){
    sum = sum + array[i].length ;
     
}
avg = sum / array.length
return avg

}