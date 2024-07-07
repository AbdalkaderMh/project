// //Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:
//I have an array and loop through the array
//Check Needle's location .cheack if the elment=== needle
//returns a message
function findnedle(Array){
for(let i = 0; i < Array.length; i++) {
  if (Array[i] === "needle"){
    return "found the needle at position " + i;
  }
}}
console.log(findnedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))