const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");


function checkBirthday() {
    const date = birthDate.value;
    const sumOfDate = calculateSumofDate(date);
    if(luckyNumber.value && date != "") {
        if(sumOfDate % Number(luckyNumber.value) === 0 ) {
            message.innerText = "Your birthday is lucky 🥳"
        } else {
            message.innerText = "Your birthday is not lucky 😥"
        }
    }
    else {
        message.innerText = "Both input fields required! 🥺"
    }
   
}

function calculateSumofDate(date) {
    date = date.replaceAll("-", "")
    let sum = 0;
    for(i = 0; i<date.length; i++) {
        sum = sum + Number(date.charAt(i))
    }
    return sum;
}


checkButton.addEventListener("click", checkBirthday)