let a = 10
let b = 5

let operator = "-"

console.log(calculator(a, b, operator))

function calculator(x, y, op){
    switch(op){
        case "+":
            return(x+y)
        case "-":
            return(x-y)
        case "*":
            return(x*y)
        case "/":
            return(x/y)
        default:
            return("invalid")
    }
}