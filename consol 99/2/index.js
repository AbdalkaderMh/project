//sum-without-highest-and-lowest-number
function sumofpositives(arr){
return arr.fillter((x) => x > 0)
.reduce((acc,current) => acc + current ,0)
}
console.log(sumofpositives ([1]));
