let numberOne = Number(prompt("Por favor, digite o primeiro número"))
let numberTwo = Number(prompt("Por favor, digite o segundo número"))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = (numberOne / numberTwo).toFixed(2)
let rest = numberOne % numberTwo

function isEven (args) {
    return (args % 2 == 0) ? `${args} é um número par` : `${args} é um número ímpar` 
} 
function isPositive (args) {
    return (args >= 0) ? `e positivo` : `e negativo` 
}
function isEqual (num1, num2) {
    return(num1 === num2) ? `os números informados são iguais` : `os números informados são diferentes`
}

alert(isEqual(numberOne, numberTwo))
alert(`${numberOne} + ${numberTwo} = ${sum}. ${isEven(sum)} ${isPositive(sum)}`)
alert(`${numberOne} - ${numberTwo} = ${subtraction}. ${isEven(subtraction)} ${isPositive(subtraction)}`)
alert(`${numberOne} * ${numberTwo} = ${multiplication}. ${isEven(multiplication)} ${isPositive(multiplication)}`)
alert(`${numberOne} / ${numberTwo} = ${division}. ${isEven(division)} ${division} ${isPositive(division)}`)
alert(`O resto da divisão de ${numberOne} por ${numberTwo} é igual a ${rest}. ${isEven(rest)} ${isPositive(rest)}`)
