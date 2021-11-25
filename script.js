"use strick";
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

const num = 2 ** 32 - 654;
console.log(num);
console.log(dec2bin(num));
console.log(dec2bin(num).length);
// Cheat Sheet
/*
General Notes:
    - Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
        But with JavaScript, methods and properties are also available to primitive values,
        because JavaScript treats primitive values as objects when executing methods and properties.
    - Write In Console "new" Then String Or Number Or Anything To See Their Methods
    - Never Use New Keyword
    - You should use objects when you want the element names to be strings (text).
        You should use arrays when you want the element names to be numbers.
    - Home Made Methods Are Great
    - constructor Method Return The Actual Type
String:
    Notes:
        - The backslash (\) escape character turns special characters into string characters
        - All string methods return a new string. They don't modify the original string.
        Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
    property:
        - length  
    Methods:
        - slice(start, end) [the start position, and the end position (end not included).] 
            [If a parameter is negative, the position is counted from the end of the string.]
            [If you omit the second parameter, the method will slice out the rest of the string]
        - substring(start, end) [Similar Of Slice (Do Not Use It)]
        - substr(start, length) [Similar Of Slice, The difference is that the second parameter specifies the length of the extracted part.]
        - replace(Old Value, New Value) [The replace() method replaces a specified value with another value in a string]
            [The replace() method does not change the string it is called on. It returns a new string.]
        - toUpperCase()  [A string is converted to upper case]
        - toLowerCase()  [A string is converted to Lower case]
        - concat()  [joins two or more strings]
        - padEnd()
        - padStart()
        - charAt() [The charAt() method returns the character at a specified index (position) in a string]
        - split() [Converting a String to an Array]
        - indexOf("Value", "Start Search Number")
        - lastIndexOf()
        - String.match() // In RegEx
        - includes("Value", "Start Search Number") [The includes() method returns true if a string contains a specified value.]
        - startsWith() [The startsWith() method returns true if a string begins with a specified value, otherwise false]
        - endsWith()  [The endsWith() method returns true if a string ends with a specified value, otherwise false]
        - repeat() Returns a new string with a specified number of copies of an existing string
        - trim() Removes whitespace from both ends of a string
        - 
Numbers:
    - Notes:
        -Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
            [let y = 9999999999999999 ........... y will be 10000000000000000 ]
        - The maximum number of decimals is 17.
        - Infinity (or -Infinity) is the value JavaScript will return
            if you calculate a number outside the largest possible number.
    - Methods:
        - isNaN() [to find out if a value is a not a number]
        - toString() [method returns a number as a string.]
        - toExponential() [returns a string, with a number rounded and written using exponential notation.]
            [A parameter defines the number of characters behind the decimal poin]
        - toFixed() [returns a string, with the number written with a specified number of decimals]
        - toPrecision() [returns a string, with a number written with a specified length]
        - Number() [Converting Variables to Numbers]
        - parseFloat() [Parses its argument and returns a floating point number]
        - parseInt()  [Parses its argument and returns an integer]
        ..... If the number cannot be converted, NaN (Not a Number) is returned ......
        - isInteger()
        - Number.isFinite()
Modern Operators:
    - Spraed Operator (...) 
    - Short Circuiting && And ||
    - The Nullish Coalescing Operator (??)
Arrays:
    Notes:
        - There is no need to use new Array().
        For simplicity, readability and execution speed, use the array literal method.
    Properties:
        - length
    Methods:
        - push(Element) [Add Element To Array In End]
        - unshift(Element) [Add Element To Array In Start]
        - pop() [Remove Last Element]
        - shift() [Remove First Element]
        - splice(position Of New Elements, Numbers Of Elements Should Remove, Rest Of the parameters define the new elements to be added) 
        - slice() Like String
        - reverse() method reverses the elements in an array.
        - indexOf() Like String 
        - lastIndexOf() Like String
        - includes() Like String
        - Array.from() method returns an Array object from any object with a length property or any iterable object
        - isArray() 
        - sort() method sorts an array alphabetically
        - join()
        - flat() work with nested array
        - High Order Functions:
            - forEach(function(item value, item index, array itself))
            - map(Like forEach) [LIKE forEach But It Create New Array]
            - filter(Like forEach) [method creates a new array with array elements that passes a test]
            - reduce(function(total, value, index, array), initial value)
            - reduceRight() Like Reduce But From Right To Left
            - every(function(value, index, array)) method check if all array values pass a test
            - some(Like Every) method check if some array values pass a test.
            - find(function(value, index, array)) method returns the value of the first array element that passes a test function
            - findIndex() Like find But Return Index
Date:
    Notes:
        - JavaScript counts months from 0 to 11
        - Specifying a month higher than 11, will not result in an error but add the overflow to the next year, And Days Are Same
    Create Date Object:
        - new date()
        - new Date(year, month, day, hours, minutes, seconds, milliseconds) creates a new date object with a specified date and time.
        - new Date(milliseconds)
        - new Date(date string)
    Methods:
        - toDateString() method converts a date to a more readable format
        - toUTCString() method converts a date to a UTC string (a date display standard)
        - toISOString() method converts a Date object to a string, using the ISO standard format
        - Get:
            - getFullYear()
            - getMonth()
            - getDate() Get Day
            - getHours()
            - getMinutes()
            - getSeconds()
            - getMilliseconds()
            - getTime()
            - getDay() [Get the weekday as a number (0-6)]
        - Set:
            - setDate() 
            - setFullYear()
            - setHours()
            - setMilliseconds()
            - setMinutes()
            - setMonth()
            - setSeconds()
            - setTime()
Math Object:

    Properties :
        Math.E        // returns Euler's number
        Math.PI       // returns PI
        Math.SQRT2    // returns the square root of 2
        Math.SQRT1_2  // returns the square root of 1/2
        Math.LN2      // returns the natural logarithm of 2
        Math.LN10     // returns the natural logarithm of 10
        Math.LOG2E    // returns base 2 logarithm of E
        Math.LOG10E   // returns base 10 logarithm of E 
    Methods:
        - Math.round(x)	[Returns x rounded to its nearest integer]
        - Math.ceil(x)	[Returns x rounded up to its nearest integer]
        - Math.floor(x)	[Returns x rounded down to its nearest integer]
        - Math.trunc(x) [Covert Decimal Numbers Into Integer]
        - Math.random()
        - Rest Methods
Set:
    Notes:
        - A JavaScript Set is a collection of unique values. 
        Each value can only occur once in a Set.

    Properties:
        - size: [Number Of Elements]
    Methods:
        - new Set() [Create New Set]
        - add(value)
        - delete(value)
        - has(value) [Return True If Set Has This Value]
Map:
    Properties:
        - size: [Number Of Elements]
    Methods:
        - new Map() [Create New Map]
        - set(key,value) 
        - get(key)
        - delete(key)
        - has(key)
JS Errors:
    - try: [statement lets you test a block of code for errors]
    - catch: [statement lets you handle the error]
    - throw: [statement lets you create custom errors]
    - finally: [statement lets you execute code, after try and catch, regardless of the result]
*/
