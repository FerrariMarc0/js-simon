'use strict';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function disappeared (){
 document.getElementById('memory').innerHTML = '';
}

function timerUserNum(){
    const userNum= [];
    for(let i = 0; i < 5; i++){
        let userArray= Number(prompt('Inserisci i numeri che hai appena visto'));

        if(myNum.includes(userArray) && !userNum.includes(userArray)){
            userNum.push(userArray);
        }

    }
    
    if(userNum.length > 0){
        alert(`Hai indovinato ${myNum.length} numeri: ${userNum}`);
        userNumInjected.innerText = userNum;
        myNumInjected.innerText = myNum;
    }else{
        alert('Ne hai azzeccati...');
    }
    console.log(userNum);
}

setTimeout(disappeared, 3000);
setTimeout(timerUserNum, 4000);

const myNum= [];
const myNumInjected= document.getElementById('memory');
const userNumInjected= document.getElementById('result');

for(let i = 0; i < 5; i++){
    
    let myArray= getRndInteger(1, 100);
    myNum.push(myArray);
    
}
console.log(myNum);
myNumInjected.innerText = myNum;




