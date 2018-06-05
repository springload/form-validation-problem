// In order to simplify my code, I have placed the essence of the functions into this file for the purposes of testing.

var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkColour(colour){
    if(colour == "") {
        return false;    
    }
    else 
        return true
}

function checkPassword(password){
    if(password.length < 8){
        return false;
    }
    else 
        return true
  }

  function checkEmail(email) {
    if(!regEx.test(email)){
        return false;
    }
    else return true
  }

  module.exports = {
    checkEmail: checkEmail,
    checkPassword: checkPassword,
    checkColour: checkColour
  }