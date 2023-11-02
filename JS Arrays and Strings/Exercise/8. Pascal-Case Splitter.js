function pascalCaseSplitter(string) {
    const regex = /[A-Z][a-z]*/gm;
    let match = string.match(regex);
    console.log(match.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')