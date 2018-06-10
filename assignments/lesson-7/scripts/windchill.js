function calculatewindchill(){


var speedmph = document.getElementById('mphInput').value;
var airtemp = document.getElementById('airtempInput').value;




var spd = parseFloat(speedmph);
var tmp = parseFloat(airtemp);


var chilly =  35.74 + 0.6215 * tmp - 35.75 * Math.pow(spd, 0.16) + 0.4275 * tmp * Math.pow(spd, 0.16) 


var digits = 2;
var power = Math.pow(10, digits);
chilly = Math.round(chilly * power) / power;


document.getElementById('chilly').innerHTML = chilly;
}

