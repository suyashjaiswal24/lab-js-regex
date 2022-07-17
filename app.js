/* Fill your code*/

function formValidate() {
    var name = document.forms['RegForm']["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["phone"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var address = document.forms["RegForm"]["Address"];
    var checkbtn = document.forms["RegForm"]["Submit"];

    var errname = document.getElementById("name");
    var erremail = document.getElementById("email");
    var errphone = document.getElementById("phone");
    var erraddress = document.getElementById("address");
    var errpwd = document.getElementById("pwd");
    var errcpwd = document.getElementById("cpwd");
    var validate = document.getElementById("validate");

    let regexName = /^[a-zA-Z]{5,10}$/;
    let regexAddress = /^\s*$/;
    let regexEmail = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
    let regexPhone = /^[6-9]\d{9}$/;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

    if (name.value === ""){
        errname.innerText = "Name should not be empty"
        name.focus();
        return false;
    }
    else if (regexName.test(name.value) === false) {
        errname.innerText = "name should be 8 to 15 characters long";
        name.focus();
        return false;
    } else
        errname.innerText = "";


    if (regexAddress.test(address.value)) {
        erraddress.innerText = "Kindly Fill Address";
        address.focus();
        return false;
    } else {
        erraddress.innerText = "";
    }


    if (email.value === ""){
        erremail.innerText = "Email can't be empty"
        email.focus();
        return false;
    }
    else if (regexEmail.test(email.value) === false) {
        erremail.innerText = "Enter a Proper Email ID";
        email.focus();
        return false;
    }
    else
        erremail.innerText = "";


    if (password.value == "") {
        errpwd.innerText = "Kindly fill Password field";
        password.focus();
        return false;
    } else if (regexPassword.test(password.value) === false) {
        errpwd.innerText = "Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and symbols (min 6 char. and max 15 char)";
        password.focus();
        return false;
    } else {
        errpwd.innerText = "";
    }


    if (cpassword.value == "") {
        errcpwd.innerText = "Kindly Retype your Password";
        cpassword.focus();
        return false;
    } else if (cpassword.value !== password.value) {
        errcpwd.innerText = "Passwords are not matching";
        cpassword.focus();
        return false;
    } else {
        errcpwd.innerText = "";
    }

    if (phone.value == "") {
        errphone.innerText = "Kindly Enter your Phone Number";
        phone.focus();
        return false;
    } else if (regexPhone.test(phone.value) === false) {
        errphone.innerText = "Phone no. must be valid";
        phone.innerText = "";
        phone.focus();
        return false;
    } else {
        errphone.innerText = "";
    }

    validate.innerText = "Regex Validation Success"
    checkbtn.focus();
    return false;
}
