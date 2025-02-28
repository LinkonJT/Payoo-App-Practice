function getInputValueByID(id){

    const value = document.getElementById(id).value
    const convertedValue = parseInt(value);
    return convertedValue;

}


function getInputTextByID(id){

    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;

}