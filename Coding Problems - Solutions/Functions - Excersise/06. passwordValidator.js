function passwordValidator(password) {

    let passwordLength = password.length;
    let isSymbol = false;
    let digitsCounter = 0;

    for (let index = 0; index < passwordLength; index++) {
        let currentElement = password[index].charCodeAt();

        let isDigit = currentElement >= 48 && currentElement <= 57;
        let isSmallLetter = currentElement >= 97 && currentElement <= 122;
        let isBigLetter = currentElement >= 65 && currentElement <= 90

        if (isDigit) {
            digitsCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }

    }

    if (passwordLength < 6 || passwordLength > 10) {
        console.log('Password must be between 6 and 10 characters');
    }


    if (isSymbol) {
        console.log('Password must consist only of letters and digits');

    }

    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if (digitsCounter >= 2 && !isSymbol && passwordLength >= 6 && passwordLength <= 10) {
        console.log('Password is valid');
    }
}

passwordValidator('world122');