let myVariable = 123;
const MY_VARIABLE = 123;
let mystring1 ="hello"
let mystring2 = "world";
mystring1 + mystring2 + "1";
function displayGreeting(name, salutation= 'your an asshole') {
    console.log(`${salutation},${name}`);
        const message = `hello, ${name}`;
        console.log(message);
  }
 function createGreetingMessage(name) {
    const message = `Hello, ${name}`; 
    console.log(message) 
 }
createGreetingMessage('rick');
createGreetingMessage('birb');

let seconds= 0;
function displayDone() {
    console.log(seconds + ' second/s has elapsed');
}

setTimeout(displayDone, seconds *1000);


let currentMoney= 200;
let laptopPrice= 500;
let laptopdiscountPrice= laptopPrice - laptopPrice * 0.2; //laptop price at 20 percent off
let difference= laptopdiscountPrice-currentMoney ;
if (currentMoney >= laptopPrice || currentMoney >= laptopdiscountPrice) {
    console.log("getting a new laptop!")}
else {
    console.log("no laptop you still need $" + difference + " to get that shit" );
}
if (!difference <= currentMoney) {
    console.log("your so goddamn broke")
} else {
    console.log("your rich bitch");
}
let firstNumber = 20;
let secondnumber = 10;
let biggestnumber = firstNumber> secondnumber ? firstNumber : secondnumber;