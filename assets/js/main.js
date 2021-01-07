myForm.addEventListener('submit' , (event) => {
    event.preventDefault();
    validateForm();
})


// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.myForm.name.value;
    var email = document.myForm.email.value;
    var mobile = document.myForm.mobile.value;
    var password = document.myForm.password.value;
    var address = document.myForm.address.value;
   
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = passErr = addErr = true;
    
    // Validate fisrt name
    if(firstname == "") {
        printError("firstErr", "Please enter first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printError("fisrtErr", "Please enter a valid name");
        } else {
            printError("firstErr", "");
            nameErr = false;
        }
    }

     // Validate last name
     if(lastname == "") {
        printError("lastErr", "Please enter last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printError("lasrErr", "Please enter a valid name");
        } else {
            printError("lastErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }


     // Validate mobile number
     if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


     // Validate password
     if(password == "") {
        printError("passErr", "Please enter password");
    } else {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(regex.test(password) === false) {
            printError("passErr", "Password should contain alphabet,number and minimum length to be 8 ");
        } else{
            printError("passErr", "");
            passErr = false;
        }
    }

    //Validate Address

    if(address == "") {
        printError("addErr", "Please enter address");
    } else{
            printError("addErr", "");
            addErr = false;
        }

};   