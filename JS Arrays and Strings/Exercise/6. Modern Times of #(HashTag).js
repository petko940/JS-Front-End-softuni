function findAndPrintSpecialWords(input) {
    const specialWords = input.match(/#(\w+)/g);
  
    if (specialWords) {
      const validSpecialWords = specialWords.filter(word => /^[a-zA-Z]+$/.test(word.slice(1)));
  
      validSpecialWords.forEach(word => {
        console.log(word.slice(1));
      });
    }
  }