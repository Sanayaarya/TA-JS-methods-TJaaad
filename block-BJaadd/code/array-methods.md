Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
3. `flat`
```js
let numbers =[1,2,[3,4,[5,6,[7,8]]]]
undefined
numbers.flat(4)
(8) [1, 2, 3, 4, 5, 6, 7, 8]
```
4. `push`

```js
let colors=["Red","Brown","Pink","Orange"]
undefined
colors.push("Yellow")
5
colors
(5) ['Red', 'Brown', 'Pink', 'Orange', 'Yellow']
```

5. `indexOf`

```js
colors
(5) ['Red', 'Brown', 'Pink', 'Orange', 'Yellow']
colors.indexOf("Red")
0
```

6. `lastIndexOf`

```js
colors.lastIndexOf("Yellow")
4
```

7. `includes`

```js
colors.includes("Yellow")
true
```

8. `reverse`

```js
colors.reverse()
(5) ['Yellow', 'Orange', 'Pink', 'Brown', 'Red']
```

9. `every`

```js
let ret = numbers.every(function(number){
return number>1000;
});
ret
false

let ret = numbers.every(function(number){
return number<1000;
});
ret
true
```

10. `shift`

```js
colors.shift()
'Yellow'
```

11. `splice`

```js
colors.splice("Red")
(6) ['Black', 'Blue', 'Orange', 'Pink', 'Purple', 'Red']
```

12. `find`

```js
function isTwelve(num){
return num === 12;
}
isTwelve(12)
true

or

let numbers = [1,2,3,23,44,223,66,98,12];
let findReturn = numbers.find(isTwelve)
findReturn
12
```

13. `unshift`

```js
let colors=["Red","Brown","Pink","Orange"]
colors.unshift("Black")
5
colors
(5) ['Black', 'Red', 'Brown', 'Pink', 'Orange']
```

14. `findIndex`

```js
let findIndexReturn = numbers.findIndex(isTwelve)
findIndexReturn
```

15. `filter`

```js
let numbers = [1,23,44,22,33,32,22,22,322]
function isEven(num){
return num % 2 === 0;
}
numbers.filter(isEven)
(6) [44, 22, 32, 22, 22, 322]

or

function isOdd(num){
return num % 2 !=== 0;
}
```

16. `flat`

```js
let numbers =[1,2,[3,4,[5,6,[7,8]]]]
undefined
numbers.flat(4)
(8) [1, 2, 3, 4, 5, 6, 7, 8]
```

17. `forEach`

```js
let colors = ["Red" ,"Black","Blue","Purple","Pink","Orange"]
function log(color){
console.log(color);
}
colors.forEach(log);

or
let numbers = [1,3,43,21,43,11,76,5,79]
numbers.forEach(function(number){
console.log(number);
})


```

18. `map`

```js
let numbers = [22,332,2,3,432,11,33,44]
undefined
function double(number){
return number * 2;
}
undefined
double(3)
6

or

numbers.map(double);
(8) [44, 664, 4, 6, 864, 22, 66, 88]

or

let doubleNumbers = numbers.map(double);
console.log(doubleNumbers)
[44, 664, 4, 6, 864, 22, 66, 88]
```

19. `pop`

```js
colors
(5) ['Black', 'Red', 'Brown', 'Pink', 'Black']
colors.push("Purple")
6
colors.pop()
'Purple'
```

20. `reduce`
21. `slice`

```js
colors.slice()
['Green']
```
22. `some`

```js
let numbers = [1,546,23,3,88,655,29,12,31]
let ret = numbers.some(function(number){
return number>1000;
});
ret
false

or

let colors = ["Red" ,"Black","Blue","Purple","Pink","Orange"]
let retColors = colors.some(function(color){
return color.includes("Red")
});
undefined
retColors
true
```

