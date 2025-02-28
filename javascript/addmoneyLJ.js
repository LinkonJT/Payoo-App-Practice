document
  .getElementById("addmoney-btn")
  .addEventListener("click", function (event) {

    event.preventDefault();
    /**SELECT BANK */
    const bankList = document.getElementById("bank-list").value;
    console.log(bankList);

    /**ACCOUNT NUMBER */
    const accountNumber = document.getElementById("account-number").value;
    console.log(accountNumber);

    /**AMOUNT TO ADD */
    const addMoneyAmount = getInputValueByID("addmoney-amount");
    console.log(addMoneyAmount);


    /**PIN NUMBER */
    const loginPin = getInputValueByID ("login-pin");
    console.log(loginPin);

    /**AVAILABLE BALANCE */
    const availableBalance = getInputTextByID("available-balance")
    console.log(availableBalance)

    if(availableBalance<0){
        alert("BALANCE NEEDS TO BE POSITIVE");
        return
    }

    if(accountNumber.length === 11){
        console.log("Valid: A/c number")

        if(loginPin === 1234){
            console.log("Valid: PIN number")

            const sum = availableBalance + addMoneyAmount
            console.log('updated balance:', sum);

            document.getElementById("available-balance").innerText = sum
           

        }else{
            alert("INVALID: PIN number")
        }
    }
    else{
        alert("Invalid: A/c number")

    }


  });
