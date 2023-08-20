function calculator (num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case operator = '+':
            result = num1 + num2;
            break;
        case operator = '-':
            result = num1 - num2;
            break;
        case operator = '*':
            result = num1 * num2;
            break;
        case operator = '/':
            result = num1 / num2;
            break;
        default :
            console.log('Please enter valid operator');
    }
    return result;
}

console.log(calculator(5,4,'+'));