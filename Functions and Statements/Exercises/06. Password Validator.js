function passwordValidator(password) {
    let validators = [];
    if (!(password.length >= 6 && password.length <= 10)) {
        validators.push("Password must be between 6 and 10 characters");
    }

    if (!/^[A-Za-z0-9]*$/.test(password)) {
        validators.push("Password must consist only of letters and digits")
    }

    let digitsCount = 0;
    for (let chr of password) {
        if (/[0-9]/.test(chr)) {
            digitsCount++;
        }
    }
    if (digitsCount < 2) {
        validators.push("Password must have at least 2 digits")
    }

    if (validators.length === 0) {
        console.log("Password is valid");
    } else {
        console.log(validators.join("\n"));
    }

}
