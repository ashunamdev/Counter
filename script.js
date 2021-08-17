var counter = document.querySelector(".counter"); 
 var followers = document.querySelector(".followers"); 

let count = 0;

setInterval(() => {
   if (count < 1000) {
    count++;
    counter.innerText = count;
   }
},1); 


setTimeout(() => {
    followers.innerText = "Followers on Instagram!";
}, 4000);


var welcome = document.querySelector(".welcome");

let numCount = 0;

setInterval(() => {
    if (numCount < 1000 ) {
        numCount++;
        welcome.innerText = numCount;
    }
    
}, 1);


var welcome = document.querySelector(".welcome");

setTimeout(() => {
    welcome.innerText = "Boom the timer is ended.This is just a component which can be used in any website to show number in increasing order to a defined number 	";
}, 4000);