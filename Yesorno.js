let number = Math.floor(Math.random() * (10 - 1));
function rundNum() {
let result;
if (number < 5) {
    result= "YES";
} else {
    result ="NO";
}
return result;


};

let textChange = function (){

document.getElementById("magicH1").innerHTML = 'Your answer is' + " " + rundNum('result');


};
window.onload = function () {
let btnSend = document.querySelector('button');
let message =document.querySelector('#message');

btnSend.addEventListener('click', ( ) =>{
btnSend.innerText = "Your answer is ready";

setTimeout(() =>{
btnSend.style.display = 'none';
message.innerText = "You shall only ask one question at a time. Good Buy for now!";
}, 3000);

});}
