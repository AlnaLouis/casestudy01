let user = document.getElementById("user");
let pwd = document.getElementById("pwd");


function valiDater()
{
 let result1 = validateUser();
 let result2 = validatePas();
 if(result1 && result2){
   return true;
 }
 else{
   return false;
 }
}

function validateUser(){
  if(user.value==="admin"){
    return true;
  }
  else {
    alert("Oop's the username is invalid type admin");
    return false;
  }
}
function validatePas(){
  if(pwd.value==="1234"){
    return true;
  }
  else {
    alert("Oop's the password is invalid type 1234");
    return false;
  }
}


