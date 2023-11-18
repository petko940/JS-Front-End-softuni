function employees(array) {
    output = [];

    for (const employee of array) {
        output.push(`Name: ${employee} -- Personal Number: ${employee.length}`);
    }

    return output.join('\n');
}

