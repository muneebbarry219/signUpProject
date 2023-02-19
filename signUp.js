let firstNameEl = document.getElementById("first_name");

let lastNameEl = document.getElementById("last_name");

let emailEl = document.getElementById("email");

let passwordEl = document.getElementById("password");

let confrmPasswordEl = document.getElementById("re_password");

let signUpBtnEl = document.getElementById("signUp_btn");


function clearForm() {
    firstNameEl.value = "";
    lastNameEl.value = "";
    emailEl.value = "";
    passwordEl.value = "";
    confrmPasswordEl.value = "";
};

function getFirstName() {
    if (
        firstNameEl.value.trim().length > 0
    ) {
        document.getElementById("frst_name_error").style.visibility = "hidden";

        return true;
    }
    else {

        document.getElementById("frst_name_error").style.visibility = "visible";
    };
};

function getLastName() {
    if (
        lastNameEl.value.trim().length > 0
    ) {
        document.getElementById("last_name_error").style.visibility = "hidden";

        return true;
    }
    else {
        document.getElementById("last_name_error").style.visibility = "visible";
    };
};

function getEmail() {

    // console.log(emailEl.value);

    // for (var i = 0; i > emailInStr.length; i++) {

    //     console.log(emailInStr[i], typeof emailInStr);
    // };

    if (
        emailEl.value.trim().length > 0
        // emailInStr.charAt([i])
    ) {
        document.getElementById("email_error").style.visibility = "hidden";

        return true;
    }
    else {
        document.getElementById("email_error").style.visibility = "visible";
    };
};

function getPassword() {
    if (passwordEl.value.trim().length > 7) {

        document.getElementById("password_error").style.visibility = "hidden";

        return true;
    }
    else {
        document.getElementById("password_error").style.visibility = "visible";
    };
};

function confirmPassword() {
    if (
        confrmPasswordEl.value == passwordEl.value
    ) {
        document.getElementById("cnfrm_error").style.visibility = "hidden";

        return true;
    }
    else {
        document.getElementById("cnfrm_error").style.visibility = "visible";
    };
};

function signUp() {

    getFirstName();
    getLastName();
    getEmail();
    getPassword();
    confirmPassword();

    if (getFirstName() &&
        getLastName() &&
        getEmail() &&
        getPassword() &&
        confirmPassword()) {

        // alert("ok hogya");

        var fetchData = localStorage.getItem("userData");

        console.log(userData);

        if (fetchData) {
            var dataInJson = JSON.parse(fetchData);

            dataInJson.push(
                {
                    userName: firstNameEl.value + lastNameEl.value,
                    userEmail: emailEl.value,
                    userPassword: passwordEl.value
                }
            );

            dataInStr = JSON.stringify(dataInJson);

            localStorage.setItem("userData", dataInStr);

            //     console.log(dataInStr);

            clearForm();

            location = "./login page/logIn.html"
        }
        else {

            // alert("sorry");

            var userData = [];

            userData.push(
                {
                    userName: firstNameEl.value + lastNameEl.value,
                    userEmail: emailEl.value,
                    userPassword: passwordEl.value
                }
            );

            var dataInStr = JSON.stringify(userData);

            localStorage.setItem("userData", dataInStr);

            clearForm();

            location = "./login page/logIn.html"

            // console.log(userData);
        };

    };

};