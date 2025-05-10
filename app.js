const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox  = document.getElementById('lowercase');
const outputOutput = document.getElementById('passwordOutput');
const passwordGenerator = document.getElementById('passwordGenerator');
const numberCheckbox = document.getElementById('numbers');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";

function generatePassword(){
    const length = lengthInput.value;
    let characters = "";
    let password=""

    if(uppercaseCheckbox.checked)  characters+=uppercase;
    if(lowercaseCheckbox.checked)  characters+=lowercase;
    if(numberCheckbox.checked) characters+=numbers;

    for(let i=0 ; i<length;i++){
        const random = Math.floor(Math.random()*characters.length);
         password +=characters[random];
    }
    passwordOutput.value=password;
}

passwordGenerator.addEventListener("click",generatePassword);

