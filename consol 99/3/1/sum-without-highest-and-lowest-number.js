//sum-without-highest-and-lowest-number
//cheak emptyvalue
//find hightest number
//find lowest number
//filter the array
//sum all numbers in the array
// var element = document.getElementById("h2");
function sumwithouthighestandlowestnumber(array)
{
    if (array == null) return 0;
    let maxvalue = Math.max(...array);
    let minvalue = Math.min(...array);
  console.log(maxvalue,minvalue);
    // alert("element") ;

}

sumwithouthighestandlowestnumber([11,2,3,4,5,6,7,8,999]);