function arrayRotation(arr, number) {
    const rotatedArr = number % arr.length
    const rotatedArray = arr.slice(rotatedArr).concat(arr.slice(0, rotatedArr));

    console.log(rotatedArray.join(" "));
}

