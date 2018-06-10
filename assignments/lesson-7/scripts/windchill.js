function calculatewindChill(){


var speedmph = document.getElementById('mphinput').value;
var airtemp = document.getElementById('airtempinput').value;


var s = parseFloat(speedmph);
var t = parseFloat(airtemp);


var chilly =  35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16) 


var digits = 2;
var power = Math.pow(10, digits);
chilly = Math.round(chilly * power) / power;


document.getElementById('chilly').innerHTML = chilly;
}

