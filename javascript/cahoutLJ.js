document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();

/** AGENT NUMBER */
const agentNumber = document.getElementById ("agent-number").value;
console.log(agentNumber);

/**cash out amount */
const cashOutAmount = getInputValueByID("cashout-amount");
console.log(cashOutAmount);

/** 5 digit pin */
const cashOutPin = getInputValueByID("cashout-pin");
console.log(cashOutPin);

    /**AVAILABLE BALANCE */
    const availableBalance = getInputTextByID("available-balance");
    console.log(availableBalance);

if(availableBalance<cashOutAmount){
    alert("Invalid Cash Out Amount Entered");
    return;
}

if(agentNumber.length === 8){
    console.log("Valid: Agent Number");

    if(cashOutPin === 12345){
        console.log("Valid Pin");

        const sum = availableBalance - cashOutAmount;
        console.log(sum);
        document.getElementById("available-balance").innerText = sum;

    }else{
        alert("INVALID AGENT PIN")
    }
}
else{
    alert("INVALID: Agent Number")
}

})