// Task One

let userCity = prompt("Enter your city name");

if(userCity === 'Karachi' || userCity === 'karachi'){
    alert("WECLOME TO THE CITY OF LIFE")
}else if(userCity === 'karachi' || userCity === 'KARACHI'){
    alert("WECLOME TO THE CITY OF LIFE")
}else{
    alert("Not understanding")
}

// Task 2 

let userGender = prompt("Enter the user gender")

if(userGender === 'male' || userGender === 'Male'){
    alert('Good Morning Sir')
}else if(userGender === 'female'  || userGender === 'Female'){
    alert('Good Morning Maam')
}

// Task 3

signal_value = prompt("Enter the signal name")

if(signal_value === 'Red' || signal_value === 'RED' || signal_value === 'red'){

    document.getElementById('demo').innerHTML = signal_value;
    document.getElementById('demoone').innerHTML = 'Must Stop';

}else if(signal_value === 'Green' || signal_value === 'GREEN' || signal_value === 'green'){

    document.getElementById('demo').innerHTML = signal_value;
    document.getElementById('demoone').innerHTML = 'You can Go now';

}else if(signal_value === 'Yellow' || signal_value === 'YELLOW' || signal_value === 'yellow'){

    document.getElementById('demo').innerHTML = signal_value;
    document.getElementById('demoone').innerHTML = 'Ready to go';

}

// Task 4

let carFuel = +prompt("Enter the remaining fuel")

if(carFuel < 0.25){
    alert('Please refill the fuel in your car')
}


// Task 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    
    if("car" < "cat"){
        alert("car is smaller than cat");
        }
        
// Task 6

let subjectOneMarks = +prompt("Enter the marks one");
let subjectTwoMarks = +prompt("Enter the marks two");
let subjectThreeMarks = +prompt("Enter the marks three");

let totalMarks = 300;

let obtMarksTotal = (subjectOneMarks+subjectTwoMarks+subjectThreeMarks)/totalMarks;

let percentageCalc = obtMarksTotal*100;

console.log(percentageCalc)

if(percentageCalc === 80 || percentageCalc > 80){
    document.getElementById('remarkse').innerHTML = "Excellent"
}else if(percentageCalc >= 70 || percentageCalc === 70 ){
    document.getElementById('remarksg').innerHTML = "Good"
}else if(percentageCalc >= 60 || percentageCalc === 60){
    document.getElementById('remarksl').innerHTML = "You need improvement"
}else if(percentageCalc < 60){
    document.getElementById('remarksf').innerHTML = "Fail"
}

// Task 7

let secretNumber = 20;

let userGuessNumber =  +prompt("Enter the user Guess Number");

if(userGuessNumber === 20){
    alert('Bingo')
}else if(userGuessNumber === 21 || userGuessNumber === 19){
    alert('Close enough to the correct answer')
}else(
    alert('You loose')
)

// Task 8

let userDigit = +prompt("Enter your digit");

if(userDigit % 3 === 0){
    alert('It is divisible by 3')
}else{
    alert('The digit you given is not divieded by 3')
}


// Task 9

let userNumber = +prompt("Enter the number you want")

if(userNumber % 2 == 0){
    alert('It is even number')
}else{
    alert('It is odd number')
}

// Task 10 

let TempValue = +prompt("Enter the temperature")

if(TempValue > 40){
    alert('It is too hot outside.')
}else if(TempValue > 30 && TempValue < 40){
    alert('The Weather today is Normal.')
}else if(TempValue > 20 && TempValue < 30){
    alert('Today’s Weather is cool.')
}else if(TempValue > 10 && TempValue < 20){
    alert('OMG! Today’s weather is so Cool.')
}

// Task 11

let firstNum = +prompt("Enter the first digit");
let secondNum = +prompt("Enter the second digit");
let enterOperator = prompt("Enter the operator");

let result = '';

if(enterOperator === '+'){
    result = firstNum + secondNum;
    alert(result)
}else if(enterOperator === '-'){
    result = firstNum - secondNum;
    alert(result)
}else if(enterOperator === '*'){
    result = firstNum * secondNum;
    alert(result)
}else if(enterOperator === '/'){
    result = firstNum / secondNum;
    alert(result)
}else if(enterOperator === '%'){
    result = firstNum % secondNum;
    alert(result)
}else{
   alert("Wrong Operator")
}