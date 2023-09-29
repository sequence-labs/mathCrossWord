const { getRandomInt, roundToTwoDecimals, getRandomOperation } = require('./helperFunctions');

/**
 * Generates a simple mathematical equation with two operands and one operation.
 * 
 * @returns {Object} An object containing the full equation, the equation with one hidden operand, and the solution.
 */
function generateEasyEquation() {
    const operations = ["+", "-"];
    const operation = operations[getRandomInt(0, 1)];
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);

    // Ensure subtraction results in positive numbers
    if (operation === "-" && b > a) {
        [a, b] = [b, a];
    }

    const equation = `${a} ${operation} ${b}`;
    const solution = roundToTwoDecimals(eval(equation));

    // Hide either the first or the third element (an operand)
    const hideIdx = [0, 2][getRandomInt(0, 1)];
    const hiddenEquation = equation.split(" ");
    hiddenEquation[hideIdx] = "_";

    return { equation, hiddenEquation: hiddenEquation.join(" "), solution };
}

/**
 * Generates a mathematical equation with three operands and two operations.
 * 
 * @returns {Object} An object containing the full equation, the equation with two hidden elements, and the solution.
 */
function generateMediumEquation() {
    const operations = ["+", "-", "*", "/"];
    const usedOps = {};

    const op1 = getRandomOperation(operations, usedOps);
    const op2 = getRandomOperation(operations, usedOps);

    let a = getRandomInt(1, 50);
    let b = getRandomInt(1, 50);
    let c = getRandomInt(1, 50);

    // Handle special cases for division and subtraction
    if (op1 === "/" && b === 0) b = getRandomInt(1, 50);
    if (op1 === "-" && b > a) [a, b] = [b, a];
    if (op2 === "/" && c === 0) c = getRandomInt(1, 50);

    const equation = `${a} ${op1} ${b} ${op2} ${c}`;
    const solution = roundToTwoDecimals(eval(equation));

    // Hide two elements (either operands or operations)
    const hideIndices = [getRandomInt(0, 4), getRandomInt(0, 4)];
    const hiddenEquation = equation.split(" ");
    for (const idx of hideIndices) {
        hiddenEquation[idx] = "_";
    }

    return { equation, hiddenEquation: hiddenEquation.join(" "), solution };
}

/**
 * Generates a complex mathematical equation with four operands and three operations.
 * 
 * @returns {Object} An object containing the full equation, the equation with three hidden elements, and the solution.
 */
function generateHardEquation() {
    const operations = ["+", "-", "*", "/"];
    const usedOps = {};

    const op1 = getRandomOperation(operations, usedOps);
    const op2 = getRandomOperation(operations, usedOps);
    const op3 = getRandomOperation(operations, usedOps);

    let a = getRandomInt(1, 100);
    let b = getRandomInt(1, 100);
    let c = getRandomInt(1, 100);
    let d = getRandomInt(1, 100);

    // Handle special cases for division and subtraction
    if (op1 === "/" && b === 0) b = getRandomInt(1, 100);
    if (op1 === "-" && b > a) [a, b] = [b, a];
    if (op2 === "/" && c === 0) c = getRandomInt(1, 100);
    if (op3 === "/" && d === 0) d = getRandomInt(1, 100);

    const equation = `${a} ${op1} ${b} ${op2} ${c} ${op3} ${d}`;
    const solution = roundToTwoDecimals(eval(equation));

    // Hide three elements (either operands or operations)
    const hideIndices = [getRandomInt(0, 6), getRandomInt(0, 6), getRandomInt(0, 6)];
    const hiddenEquation = equation.split(" ");
    for (const idx of hideIndices) {
        hiddenEquation[idx] = "_";
    }

    return { equation, hiddenEquation: hiddenEquation.join(" "), solution };
}

// Test the functions
console.log(generateHardEquation());
console.log(generateMediumEquation());
console.log(generateEasyEquation());
