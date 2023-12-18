let CHARACTER_SET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const passwordArea = document.querySelector('#passwordArea');
const passwordSection = document.querySelector(".passwordSection");
const copyButton = document.querySelectorAll('#copy');
const rangeInput = document.querySelector('#number');
const numberOfPw = document.querySelector('#numberOfPw');
const includeSymbols = document.querySelector('#Symbols');
const includeNumbers = document.querySelector('#Nums');
let power = document.querySelector("#power-point");

function generatePasswords() {
    passwordSection.style.display = "block";
}

copyButton.forEach(button => {
    button.disabled = true;
});

function generator(length) {
    let charset = CHARACTER_SET;

    if (includeSymbols.checked) {
        charset += "!@#$%^&*()-_=+[{]}\\|";
    }

    if (includeNumbers.checked) {
        charset += "0123456789";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function updatePasswordLength() {
    const length = rangeInput.value;
    numberOfPw.textContent = length + " characters";
    let password = generator(length);
    passwordArea.textContent = password;
   
    copyButton.forEach(button => {
        button.disabled = false;
    });

    let point = 0;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    if (length >= 8) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(password)) {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];

    let warningMessage = document.createElement('div');
    warningMessage.style.marginTop = '10px'
    passwordArea.appendChild(warningMessage);
    if (length <= 7) {
        warningMessage.style.fontSize = '14px';
        warningMessage.style.color = 'red';
        warningMessage.style.textAlign = 'center';
        warningMessage.textContent = 'You should use at least 8 characters';
    }
}


function copyToClipboard(passwordId) {
    const passwordText = document.getElementById(passwordId).textContent.trim();
    const tempTextArea = document.createElement('textarea');

    tempTextArea.value = passwordText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    const passwordElement = document.getElementById(passwordId);
    passwordElement.innerHTML = '<div style="font-size:25px; text-align: center;">Copied! ✅</div>';
    setTimeout(() => {
        passwordElement.innerHTML = ''; // Reset the content after the timeout
    }, 1500);
}




rangeInput.addEventListener('input', updatePasswordLength);
includeSymbols.addEventListener('change', updatePasswordLength);
includeNumbers.addEventListener('change', updatePasswordLength);
