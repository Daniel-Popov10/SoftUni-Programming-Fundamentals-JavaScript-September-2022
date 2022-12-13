function correctPassword(arr) {

    let password = (arr[0]);
    let correctPassword = '';
    let currentPassword = '';
    let isPassword = false;
    let isBlocked = false;


    for (let a = password.length - 1; a >= 0; a--) {
        correctPassword += (password[a]);
    }

    for (let i = 1; i < arr.length; i++) {
        currentPassword = (arr[i]);

        if (i >= 4) {
            isBlocked = true;
        }

        if (currentPassword === correctPassword) {
            isPassword = true;
        }

        if (!isPassword) {
            if (isBlocked) {
                console.log(`User ${password} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${password} logged in.`);
            break;
        }


    }

}

correctPassword(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);