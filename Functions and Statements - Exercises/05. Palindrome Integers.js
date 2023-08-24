function palindrome(numbers) {
    function isPalindrome(num) {
        num = num.toString();
        return num === num.split('').reverse().join('');
    }

    let output = [];
    for (let i = 0; i < numbers.length; i++) {
        const result = isPalindrome(numbers[i]);
        output.push(result);
    }
    return output.join("\n")
}

console.log(palindrome([32, 2, 232, 1010]));