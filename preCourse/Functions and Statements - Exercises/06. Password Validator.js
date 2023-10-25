function passwordValidator(password) {
    let result = [];
    if (password.length < 6 || password.length > 10) {
        result.push("Password must be between 6 and 10 characters")
    }
    if (/[^a-zA-Z0-9]+/.test(password)) {
        result.push("Password must consist only of letters and digits")
    }
    let countNumbers = 0;
    for (let i = 0; i < password.length; i++) {
        if (/[0-9]/.test(password[i])) {
            countNumbers++;
        }
    }
    if (countNumbers < 2) {
        result.push("Password must have at least 2 digits")
    }

    if (result.length > 0) {
        return result.join('\n')
    }
    else {
        return "Password is valid"
    }
}

