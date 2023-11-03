function login(string) {
    let password = string[0]
    let isBlocked = false;
    for (let i = 1; i <= 4; i++) {
        let testPassword = string[i].split('').reverse().join('');

        if (testPassword === password) {
            console.log(`User ${string[0]} logged in.`)
            break
        } else if (i === 4) {
            isBlocked = true;
            break
        } else {
            console.log("Incorrect password. Try again.")
        }
    }

    if (isBlocked) {
        console.log(`User ${string[0]} blocked!`)
    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo','omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])