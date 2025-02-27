document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {

    event.preventDefault();

    const mobileNumber = document.getElementById("mobile-number").value
    const loginPin = document.getElementById("login-pin").value
    const convertedLoginPin = parseInt(loginPin);

    // console.log(mobileNumber, loginPin)


    if(mobileNumber.length === 11){
        console.log("Mobile Number 11 Digit, OK")

        if(convertedLoginPin === 1234){
            console.log("Login PIN, OK")
        }else{
            console.log("Invalid Login Pin")
        }
    }else{
       console.log("Invalid Mobile Digit") 
    }
  });
