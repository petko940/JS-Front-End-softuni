function extractAndConvertToUppercase(input) {
    const words = input.match(/\w+/g); 
    const uppercaseWords = words.map(word => word.toUpperCase()); 

    const result = uppercaseWords.join(', '); 
    return result;
}