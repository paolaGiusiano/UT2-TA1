function calculate(operation, firstOperator, secondOperator){
    switch(operation) {
        case 'add':
            return firstOperator + secondOperator;
        case 'subtract':
            return firstOperator - secondOperator;
        case 'multiply':
            return firstOperator * secondOperator;
        case 'divide':
            return firstOperator / secondOperator;
    }
}

console.log(calculate('add', 2, 3));
console.log(calculate('subtract', 2, 3));
console.log(calculate('multiply', 2, 3));
console.log(calculate('divide', 2, 3));
