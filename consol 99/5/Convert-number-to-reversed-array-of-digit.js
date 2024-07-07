//give a roadmap non negative number, you have to return the digit of the number within an array in revers order
//Don't turn it into a matrix, turn it into a string and make a split for it to change the array
//change the number to the start
//Convert string in the array to number
//revert the array
//solve

function digitize(n){
return n
.toString()
.split("")
.map((m) => Number(m))
.reverse();


}

console.log( digitize(817464864865))