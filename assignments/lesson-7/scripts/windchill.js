/*windchill*/
/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 */

function calculatewindhill(){

//get number of both beginging and ending odemeter
var speedmph = document.getElementById('mphinput').value;
var airtemp = document.getElementById('airtempinput').value;

//convert what the user typed into a number.
var s = parseFloat(speedmph);
var t = parseFloat(airtemp);

//figure out windchill
var chilly =  35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16) 

//round 2 digits
var digits = 2;
var power = Math.pow(10, digits);
chilly = Math.round(chilly * power) / power;

//Display 
document.getElementById('chill').innerHTML = chilly;
}

