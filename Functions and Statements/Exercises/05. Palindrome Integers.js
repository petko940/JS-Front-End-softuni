function palindromeIntegers(arr) {
    function isPalindrome(str) {
        let reversed = str.split('').reverse().join('');
        return str === reversed;
    }

    for (const x of arr) {
        console.log(isPalindrome(x.toString()));
    }
}

