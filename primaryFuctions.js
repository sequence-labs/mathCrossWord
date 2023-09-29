function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateEasyEquation() {
    const operations = ["+", "-"];
    const operation = operations[getRandomInt(0, 1)];
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);

    if (operation === "-" && b > a) {
        [a, b] = [b, a];  // Swap to ensure positive result
    }

    const equation = `${a} ${operation} ${b}`;
    const solution = eval(equation);

    const hideIdx = [0, 2][getRandomInt(0, 1)];  // Either 0 or 2 to hide numbers
    const hiddenEquation = equation.split(" ");
    hiddenEquation[hideIdx] = "_";

    return {equation, hiddenEquation: hiddenEquation.join(" "), solution};
}

function generateMediumEquation() {
    const operations = ["+", "-", "*", "/"];
    const op1 = operations[getRandomInt(0, 3)];
    const op2 = operations[getRandomInt(0, 3)];

    let a = getRandomInt(1, 50);
    let b = getRandomInt(1, 50);
    let c = getRandomInt(1, 50);

    if (op1 === "/" && b === 0) b = getRandomInt(1, 50);
    if (op1 === "-" && b > a) [a, b] = [b, a];
    if (op2 === "/" && c === 0) c = getRandomInt(1, 50);

    const equation = `${a} ${op1} ${b} ${op2} ${c}`;
    const solution = eval(equation);

    const hideIndices = [getRandomInt(0, 4), getRandomInt(0, 4)];  // Hiding numbers or operations
    const hiddenEquation = equation.split(" ");
    for (const idx of hideIndices) {
        hiddenEquation[idx] = "_";
    }

    return {equation, hiddenEquation: hiddenEquation.join(" "), solution};
}

function generateHardEquation() {
    const operations = ["+", "-", "*", "/"];
    const op1 = operations[getRandomInt(0, 3)];
    const op2 = operations[getRandomInt(0, 3)];
    const op3 = operations[getRandomInt(0, 3)];

    let a = getRandomInt(1, 100);
    let b = getRandomInt(1, 100);
    let c = getRandomInt(1, 100);
    let d = getRandomInt(1, 100);

    if (op1 === "/" && b === 0) b = getRandomInt(1, 100);
    if (op1 === "-" && b > a) [a, b] = [b, a];
    if (op2 === "/" && c === 0) c = getRandomInt(1, 100);
    if (op3 === "/" && d === 0) d = getRandomInt(1, 100);

    const equation = `${a} ${op1} ${b} ${op2} ${c} ${op3} ${d}`;
    const solution = eval(equation);

    const hideIndices = [getRandomInt(0, 6), getRandomInt(0, 6), getRandomInt(0, 6)];  // Hiding numbers or operations
    const hiddenEquation = equation.split(" ");
    for (const idx of hideIndices) {
        hiddenEquation[idx] = "_";
    }

    return {equation, hiddenEquation: hiddenEquation.join(" "), solution};
}


console.log(generateHardEquation());
console.log(generateMediumEquation());
console.log(generateEasyEquation());