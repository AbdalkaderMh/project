//Double Char
//To repeat each letter in the word
//tearn string into array;
//loop through array
//repeat each element ones
//return array in to string again




function DoubleChar(str){
    return str 
    .split("")
    .map((s) => s.repeat(2))
    .join("");//First, separate the letters into the letter string and its repetition
 
    }
   console.log(DoubleChar("doble"));