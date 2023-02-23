function greetings(name){
    var name = prompt("Please, enter your name:");
    console.log("Hi, "+ name+"!");
}

function greatest_number(number_1, number_2){
    var number_1 = prompt("Please, enter the first number:")
    var number_2 = prompt("Please, enter the second number:")
    if (number_1 > number_2){
        console.log(number_1 + " is greater than " + number_2)
    }
    else if (number_2 > number_1){
        console.log(number_2 + " is greater than " + number_1)
    }
    else {
        console.log("Numbers are equal")
    }
    let sum = (number_1 ** 2) + (number_2 ** 2);
    console.log("Sum of squares of " + number_1 + " and " + number_2 + " is " + sum)
}
