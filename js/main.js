'use strict';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function disappeared (){
 document.getElementById('memory').innerHTML = '';
}

function timerUserNum(){
    
    for(let i = 0; i < 5; i++){
        let userArray= Number(prompt('Inserisci i numeri che hai appena visto'));
        userNum.push(userArray);
    }
}

setTimeout(disappeared, 5000);
setTimeout(timerUserNum, 7000);

let myNum= [];
let userNum= [];
const numInjected= document.getElementById('memory');
let user;
for(let i = 0; i < 5; i++){
    
    let myArray= getRndInteger(1, 5);
    myNum.push(myArray);
}
console.log(myNum);


numInjected.innerText = myNum;

