function validationFunction(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value;
    var colour = document.getElementById("colour").value;
    var bear = document.getElementById("bear")
    var tiger = document.getElementById("tiger")
    var snake = document.getElementById("snake")
    var donkey = document.getElementById("donkey")
    var tigerType = document.getElementById("tiger_type")
    var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//if/else statement that evaluates whether the text entered into the field is a valid email address using a regular expression & prompts the user to fix it if it is not a valid email address

    if(!regEx.test(email)){
        document.getElementById("emailid").innerHTML = "Please enter a valid email address";
        document.getElementById("emailid").parentElement.classList.add('error')
        return false;
    }
    else 
        document.getElementById("emailid").innerHTML = "";
        document.getElementById("emailid").parentElement.classList.remove('error');

//if/else statement that evaluates whether the text entered into the field is shorter than 8 characters and if it is a prompt is sent to the user to make it longer

    if(password.length < 8){
        document.getElementById("passwordid").innerHTML = "Please enter a password of at least 8 characters";
        document.getElementById("passwordid").parentElement.classList.add('error')
        return false;
    }
    else 
        document.getElementById("passwordid").innerHTML = "";
        document.getElementById("passwordid").parentElement.classList.remove('error');

//if/else statement that evaluates whether the value of the 'colur' field has a value. or whether it is nothing. If it indeed has no value, the user is prompted to choose one.

    if(colour == "") {
        document.getElementById("colourid").innerHTML = "Please choose a colour";
        document.getElementById("colourid").parentElement.classList.add('error')
        return false;
    }
    else 
        document.getElementById("colourid").innerHTML = "";
        document.getElementById("colourid").parentElement.classList.remove('error');

//if/else statement that evaluates whether the user has selected at least two animals. This is kind of a clumsy/hacky solution and could definately do with some re-tooling but for the current code, it does the job.

    if(
    (bear.checked == false && tiger.checked == false && snake.checked == false && donkey.checked ==false)
    || (bear.checked == false && tiger.checked == false && snake.checked == false) 
    || (bear.checked == false && tiger.checked == false && donkey.checked == false) 
    || (bear.checked == false && donkey.checked == false && snake.checked == false) 
    || (donkey.checked == false && tiger.checked == false && snake.checked == false)){
        document.getElementById("selectionid").innerHTML = "Please choose two options";
        document.getElementById("selectionid").parentElement.classList.add('error')
        return false
    }
    else 
        document.getElementById("selectionid").innerHTML = "";
        document.getElementById("selectionid").parentElement.classList.remove('error');

// this if/else statement evaluates whether anything has been entered into the field. It uses a regular expression to account for white space, so if a user just taps the space bar a number of times, the form will not be able to submit and they will be met with the prompt

    if(tiger.checked == true && tigerType.value.replace(/\s/g, '').length == 0){
        document.getElementById("tigerid").innerHTML = "Please give your tiger a name";
        return false
    }
    else document.getElementById("tigerid").innerHTML = "";
}