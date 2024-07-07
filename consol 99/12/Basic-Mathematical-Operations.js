//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//..............
//cheak a  opration then act
function basicop(operation, value1, value2) {
if ( operation ==='+') return value1 + value2
if ( operation ==='-') return value1 - value2
if ( operation ==='*') return value1* value2
if ( operation ==='/') return value1 / value2

}

console.log(basicop('+', 4, 7))