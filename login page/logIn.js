let emailEl = document.getElementById("email");

let passwordEl = document.getElementById("password");

let loginBtnEl = document.getElementById("login_btn");


function logIn() {

    var fetchData = localStorage.getItem("userData");

    var userDataArr = JSON.parse(fetchData);

    for (var i = 0; i < userDataArr.length; i++) {
        // console.log(userDataArr[i]);

        if (emailEl.value == userDataArr[i].userEmail) {

            document.getElementById("email_error").style.visibility = "hidden";

            if (passwordEl.value == userDataArr[i].userPassword) {

                document.getElementById("password_error").style.visibility = "hidden";

                location = "https://www.google.com/";

            }
            else {
                document.getElementById("password_error").style.visibility = "visible";

                passwordEl.value = "";
            };
        }
        else {
            document.getElementById("email_error").style.visibility = "visible";
        };

    };

    // if (fetchData) {
    //     console.log(fetchData);
    // }
    // else {
    //     console.log("kch ni hai");
    // };
};