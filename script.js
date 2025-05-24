function makeBubble(){

var clutter="";


for(var i=1; i<=168; i++){

var random= Math.floor(Math.random()*10);

clutter+=` <div class="bubble"> ${random}</div>`;

}


document.querySelector("#panelbottom").innerHTML=clutter;

}

makeBubble();


var timer=60;

function runTimer(){


var timerinterval=setInterval(function(){

if(timer>0){

document.querySelector("#timervalue").textContent=timer;

timer--;


}

else{
clearInterval(timerinterval);
document.querySelector("#panelbottom").innerHTML=`<h1>Game over!</h1>`;
}




},1000);



}

runTimer();

var hitrandom=0;
function getNewHit(){

hitrandom=Math.floor(Math.random()*10);
document.querySelector("#hitvalue").textContent=hitrandom;

}

getNewHit();


var score=0;

function IncreaseScore(){


document.querySelector("#scorevalue").textContent=score;
score+=10;


}

IncreaseScore();



document.querySelector("#panelbottom").addEventListener("click", function(event){

var clickednumber= Number(event.target.textContent);
if(clickednumber=== hitrandom){
IncreaseScore();
makeBubble();
getNewHit();
}

});

