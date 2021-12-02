let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array


let peopleName = persons.map((value) => value.name );


// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((value) => value.grade)

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((value)=> value.sex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let a = persons.filter((person)=> person.name.charAt(0) === ("J")|| person.name.charAt(0) === ("P"))

or 

console.log(peopleName.filter((name)=>name.startsWith("J")||name.startsWith("P")
));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let  b = persons.filter((person)=>
person.name.charAt(0)===("A")||
person.name.charAt(0)===("C"))

or 

console.log(peopleName.filter((name)=>name.startsWith("A")||name.startsWith("C").length
));

// Log all the filtered male ('M') in persons array

let  c = persons.filter((person)=>
person.sex.charAt(0)===("M")
)

or 

console.log(
  persons.filter((person)=> person.sex =="M")
)

// Log all the filtered female ('F') in persons array

let d = persons.filter((person)=>
person.sex.charAt(0)===("F")
    ) 

    or 
    
console.log(
  persons.filter((person)=> person.sex =="F")
)


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femaleName = persons.filter((female) => (female.name.startsWith("C") || female.name.startsWith("J")) &&  female.sex === "F");

or 

console.log(
persons
   .filter((person)=>person.sex == "F")
   .filter((person)=>
       person.name.startsWith("C")||
       person.name.startsWith("J")
   )
);


// Log all the even numbers from peopleGrade array

let evenGrade = persons.filter((value) => value.grade % 2 === 0);

or 

console.log(peopleGrade.filter((n)=> n % 2 === 0))

// Find the first name that starts with 'J' in persons array and log the object

let personName = persons.filter((person)=>
  person.name.startsWith("J")
 )

 or 

 console.log(
   persons.find((person)=> person.name.startsWith("J"))
 )

// Find the first name that starts with 'P' in persons array and log the object

let personName = persons.filter((person)=>
  person.name.startsWith("P")
 )

 or 

 console.log(
   persons.find((person)=> person.name.startsWith("p"))
 );

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let firstName = persons.filter((person)=>
person.name.startsWith("J")&& person.grade < 10 && person.sex === "F"
 
)

or 

console.log(
  persons.find((person)=>
  person.name.startsWith("P")&&
  person.grade > 10 &&
  peopele.sex === "F"
  )
)

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((value)=> value.sex === "F");

or 

let femalePersons = persons.filter((person)=> person.sex === "F"
);


// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((value)=> value.sex === "M")

or 

let malePersons = persons.filter((person)=>person.sex==="M")

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.reduce((acc,g) => {
  return acc + g.grade
} ,0)

or 

let gradeTotal = peopleGrade.reduce((acc,cv)=> acc+cv ,0);

// Find the average grade

function avgGrade(arr){
  let gradeTotal = arr.reduce((acc,g) => {
    return acc + g.grade
  },0)
  return gradeTotal / arr.length
}

or 

gradeTotal/ peopleGrade.length


// Find the average grade of male

let maleGrade = persons.filter((p)=> p.sex=="M")
maleGrade.reduce((acc,cv)=>{
  return acc+cv;
},0)/maleGrade.length;
// Find the average grade of female

let femaleGrade = persons.filter((p)=> p.sex=="M")
femaleGrade.reduce((acc,cv)=>{
  return acc+cv;
},0)/femaleGrade.length;

// Find the highest grade

  
[...peopleGrade].sort((a,b) =>a-b).pop();
  


// Find the highest grade in male

[...malegrade].sort((a,b)=>a-b).pop()

// Find the highest grade in female

// [...femaleGrade].sort((a,b)=>a-b).pop()
  
// Find the highest grade for people whose name starts with 'J' or 'P'

let nameWithJOrP = persons.filter((person)=>
 person.name.startsWith("J")||
 person.name.startsWith("p")
);
let gradeWithNameJorP = nameWithJorP.map((person)=> person.grade);

[...gradeWithNameJorP].sort((a,b)=>a-b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?


peopleGrade.sort((a,b)=>a-b);

// Sort the peopleGrade in descending order

peopleGrade.sort((a,b)=>b-a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let mutateClone = [...peopleGrade].sort((a,b)=>  b - a);

or 

let sortedgrade = [...peopleGrade].sort((a,b)=>a-b);



// Sort the array peopelName in ascending `ABCD..Za....z`
let peopleNameSort = [...peopleName].sort()

or 

 peopleName.sort()

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let peopleNameSortReverse = [...peopleName].sort().reverse();

or 

peopleName.sort();
