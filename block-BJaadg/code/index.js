// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';


/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/

quote.indexOf("is")
6

let indexOfIs = quote.indexOf("is")


/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
quote.charAt(indexOfIs)
/*
3. Log the message saying `The index of first is in quote is 7`
*/

quote.charAt(7)

or 

console.log(
  `The index of first is in quote is ${quote.charAt(indexOfIs)}`
)

/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
quote.charAt(0)
'T'
quote.charAt(1)
'h'
quote.charAt(2)
'e'
quote.charAt(3)
'r'
quote.charAt(4)
'e'
quote.charAt(5)
' '
quote.charAt(6)
'i'

or

for(let i= 0; i < 6;i++){
  console.log(`The character at index ${i} is ${quote[i]}`)
}
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/

from.concat(quote,to)
'Syrio ForelThere is only one thing we say to death: Not todayArya Stark'

/*
6. Does from, to and quote ends with "rk". Check all three.
*/

from.endsWith("rk")
false



/*
7. Does quote includes the word "Only"
*/

quote.includes("only")
true

/*
8. Does quote includes the word " we"
*/

quote.includes("we")
true

/*
9. Find the index of the the word `we` in quote
*/

quote.indexOf("we")
24

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/

quote.split("")
(50) ['T', 'h', 'e', 'r', 'e', ' ', 'i', 's', ' ', 'o', 'n', 'l', 'y', ' ', 'o', 'n', 'e', ' ', 't', 'h', 'i', 'n', 'g', ' ', 'w', 'e', ' ', 's', 'a', 'y', ' ', 't', 'o', ' ', 'd', 'e', 'a', 't', 'h', ':', ' ', 'N', 'o', 't', ' ', 't', 'o', 'd', 'a', 'y']

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/

let index = quoteSplitted.indexOf("today");

quoteSplitted[index] = "tomorrow";

quoteSplitted.join(" ");

/*
12. Find the index of second "o" in quote. Use indexOf
*/
quote.indexOf("o",10)
14
/*
13. Find the last index of letter "a" in quote.
*/

quote.lastIndexOf("a")
48

/*
14. Find the second last index of letter "a" in quote.
*/

quote.lastIndexOf("a" , lastIndexOfA -1);

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/

quote.padEnd("70",'.')
'There is only one thing we say to death: Not today....................'

or

let max = 70;

let length = quote.length;

for(let i = lenght; i<=max;i++){
  quote = quote + ".";
  length= quote.lenght;
}

let newQuote = quote + ".".repeat(max - length);
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/

quote.padStart("60",'.')

'..........There is only one thing we say to death: Not today'

or

let newStartQuote= ".".repeat(max - length) + quote;

/*
17. Log the repeat of "Hello World!" 10 times.
*/

let a = "Hello World!"
a.repeat(10)
'Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!'

or

console.log("Hello World".repeat(10));

/*
18. Replace today to tomorrow in quote.
*/

quote.replace("today","tomorrow")
'There is only one thing we say to death: Not tomorrow'



/*
19. Replace Stark to Lannister in quoteTo
*/

to.replace("Stark","Lannister")
'Arya Lannister'

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
let limit = quote.slice(0,30)+ "..."
/*
21. Find out does quote, from, to starts with "A"
*/
quote.startsWith("A");
from.startsWith("A");
to.startsWith("A");