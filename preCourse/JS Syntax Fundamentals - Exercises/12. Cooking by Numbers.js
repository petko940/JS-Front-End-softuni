function cooking(number, ...operations) {
    let result = Number(number);

    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                result = result / 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result = result + 1;
                break;
            case 'bake':
                result = result * 3;
                break;
            case 'fillet':
                result = result * 0.8;
                break;
        }
        console.log(result);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
