
function fromvalidate() {


    var Name = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var Phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
   var text = "";
    



  
if(Name.length < 5 ) 
  {
    alert("I am an alert box!");
    text("please enter valid Username");
    error.innerHTML= text;
  
    
    return false;
  }

   else if (Email.indexof("@") <-1 && Email.length < 7) {
    text("please enter valid Email");
    error.innerHTML= text;
  

    return false;
  }
  else if (Phone.length !=11) {
    console.log("please enter valid Email")
   
    error.innerHTML = text;

    return false;
  }
  else{
    console.log("successfully")
   
    return true
  }
}