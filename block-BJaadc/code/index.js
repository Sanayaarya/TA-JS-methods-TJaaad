let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`

console.log(`The length of [${message}] is ${message.length}`);

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`

console.log(`The first character of ${message} is ${message[0]}`)

or 

console.log(message.charAt(0))

// Log the last character of message using length like `The last character of [message] is [character]`

console.log(`The last character of ${message} is ${message[42]}`)

or 

console.log(message.charAt(message.length-1))

// Log the index of word "you" in message

message.indexOf("you")
3

// Log the index of word "still" in message

message.indexOf("still");
11

// Log the index of word "answers" in message

message.indexOf("answer");
30

// Log true or false based on whether the word "answers" exist in message or not

message.includes("Answer")
false
message.includes("answer")
true

// Log true or false based on whether the word "they" exist in message or not

message.includes("they")
false

or

console.log(message.indexOf("they")!==-1);

// Log true or false based on whether the word "is" exist in message or not

message.includes("is")
true

or

console.log(message.indexOf("is")!==-1);

// Log true or false based on whether the word "Is" exist in message or not

message.includes("Is")
false

console.log(message.indexOf("is")!==-1);

// Check and log whether the word from index 3 to 6 is "you" or not (use slice)

message.slice(3,6)
'you'

or

console.log(message.slice(3,6)==="you")


// Check and log whether the word from index 7 to 8 is "a" or not

message.slice(7,8)
'a'


or

console.log(message.slice(7,8)==="you")

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
message.slice(-3)

// Check and log whether the last 5 character in message is "no!" or not
message.slice(-5)


// Log the message variable, all in lowecase

message.toLowerCase()
'if you are still thinking the answer is no!'

// Log the message variable, all in uppercase

message.toUpperCase()
'IF YOU ARE STILL THINKING THE ANSWER IS NO!'

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.

message.replace("are","can't")
"If you can't still thinking the answer is no!"

// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

message.replace("still"," ")
'If you are   thinking the answer is no!'

// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

message.replace("thinking","decide")
'If you are still decide the answer is no!'

// Log all the characters from the message variable (you can user for..of loop on string)

for (let character of message) {
  console.log(character);
}

// Split all the words in message (split by " " space) and store it in a variable messageArray

message.split(" ")
(9) ['If', 'you', 'are', 'still', 'thinking', 'the', 'answer', 'is', 'no!']

// Log all the words of messageArray
for (let word of messageArray) {
  console.log(word);
}