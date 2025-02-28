document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {

    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value
    const loginPin = document.getElementById("login-pin").value
    const convertedLoginPin = parseInt(loginPin);

    // console.log(mobileNumber, loginPin)


    if(accountNumber.length === 11){
        console.log("Account Number 11 Digit, OK")

        if(convertedLoginPin === 1234){
            console.log("Login PIN, OK")
        }else{
            console.log("Invalid Login Pin")
        }
    }else{
       console.log("Invalid Account Digit") 
    }
  });
