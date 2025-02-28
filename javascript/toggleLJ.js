
document.getElementById("cashout-section").style.display = "none";


function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}


//to show the Addmoney section when clicke on the addmoney box
document.getElementById("addmoney-box").addEventListener("click", function(){
    handleToggle("addmoney-section", "block")
    handleToggle("cashout-section", "none")

})

//to show only the Cashout section when clicke on the addmoney box
document.getElementById("cashout-box").addEventListener("click", function(){
    handleToggle("addmoney-section", "none")
    handleToggle("cashout-section", "block")

})