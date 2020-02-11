function validator(){
    var email = registrationForm.email;
    var password = registrationForm.password;
    var cnfmPassword = registrationForm.cnfmPassword;
    var firstName = registrationForm.firstName;
    var lastName = registrationForm.lastName;
    var zipcode = registrationForm.zipcode;
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var zipCodePattern = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    /*Email validator */
    if(email.value.length ==0 || !email.value.match(mailformat)){
        window.alert("You have entered wrong email address !");
        email.focus();
        email.value = "";
        return false;
    }
    /*Password validator */
    if(password.value.length ==0){
        window.alert("Please enter your password !");
        password.focus();
        password.value = "";
        return false;
    }
    /* Confirm password validator */
    if(cnfmPassword == 0 || !password.value == cnfmPassword.value){
        window.alert("Password do not match !");
        cnfmPassword.focus();
        cnfmPassword.value = "";
        return false;
    }
    /*first name validator */
    if(firstName.value == 0){
        window.alert("First name not be empty !");
        firstName.focus();
        firstName.value = "";
        return false;
    }
    /*last name validator */
    if(lastName.value == 0){
        window.alert("Last name not be empty !");
        lastName.focus();
        lastName.value = "";
        return false;
    }
    /*zipcode validator */
    document.write(zipcode.value);
    if(zipcode.value !== ''){
        if(zipCodePattern.match(zipcode.value)){
            window.alert("Invalid zipcode");
            zipcode.focus();
            zipcode.value = "";
            return false;
        }
        window.alert("Invalid zipcode");
        zipcode.focus();
        zipcode.value = "";
        return false;
    }
    window.alert("Success !");
    return true;
}
