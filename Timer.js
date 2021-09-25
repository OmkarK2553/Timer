

var destination = new Date("Nov 15, 2021 00:00:00").getTime();
var cont = setInterval(function() {
var current = new Date().getTime();

var diff = destination-current ;

var days = Math.floor(diff/(24*60*60*1000)) ;
var hrs = Math.floor(diff%(24*60*60*1000)/(60*60*1000)) ;
var mins = Math.floor(diff%(60*60*1000)/(60*1000)) ;
var sec = Math.floor(diff%(60*1000)/(1000)) ;

console.log(days)
console.log(hrs)
console.log(mins)
console.log(sec)

document.getElementById("timer").innerHTML = days + " : " + hrs + " : " + mins + " : " + sec
document.getElementById("timer").style.borderTop = "thin solid #D3E0EA";

},1000)