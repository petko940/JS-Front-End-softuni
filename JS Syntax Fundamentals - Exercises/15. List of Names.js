function names(names) {
    names.sort(); 
  
    for (let i = 0; i < names.length - 1; i++) {
      console.log(`${i + 1}.${names[i]}`);
    }
  }

console.log(names(["John", "Bob", "Christina", "Ema"]));
