Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters  Ans-- anything
3. Return value type  Ans -- 
4. Write three examples


let name = "sanaya"
name.charAt(3)
'a'

name.trim()
'sanaya'

name.trimStart()
'sanaya    '

name.trimEnd()
'   sanaya'


5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

 name.toUpperCase()
'ARYA STARK'

3. `toLowerCase`

name.toLowerCase()
'arya stark'

4. `trim`

name.trim()
'Arya Stark'

5. `trimEnd`

name.trimStart()
'Arya Stark  '

6. `trimStart`

name.trimStart()
'Arya Stark  '

7. `concat`

tagline="Everything you need to become a software developer"
name.concat("is" ,tagline)
'   sanaya    isEverything you need to become a software developer'

8. `endsWith`

name.endsWith("k")
true
name.startsWith("A")
true

9. `includes`

ame.includes("A")
true
name.includes("c")
false
name.includes("S")
true

10. `indexOf`

name.indexOf("S")
5

11. `lastIndexOf`

name.lastIndexOf("A")
0

12. `padEnd`

name.padEnd('15',".")
'Arya Stark.....'

13. `padStart`

name.padStart('15',".")
'.....Arya Stark'

name.padStart('15',"0")
'00000Arya Stark'

14. `repeat`

name.repeat(4)
'Arya StarkArya StarkArya StarkArya Stark'

15. `replace`

name.replace("a","o")
'Aryo Stark'

16. `slice`

tagline.slice(0,4)
'Ever'

tagline.slice(0,26)
'Everything you need to bec'

17. `split`

tagline.split(" ");
(8) ['Everything', 'you', 'need', 'to', 'become', 'a', 'software', 'developer']

18. `substring`

tagline.substring(0,29)
'Everything you need to become'

tagline.substring(0,"nan")
''