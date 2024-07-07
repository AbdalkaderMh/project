//There is a right and he wants to know how many are right and how many are wrong
//Explanation: Make a loob, and if the ironing is correct, add 1, and if it is incorrect, cross it
//initial value of zero
//loop through the array
//cheack if the sheep-=== true , icreas the intial value +1
function Countingsheep(arrayofsheep)
{
    //todo may the force be with you
    let counter =0;
    Countingsheep.map((m) => {
if(m=== true) counter++;


    });
    return counter;
}