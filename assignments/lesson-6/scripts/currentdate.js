var cdate = new Date();
var cdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var cmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "november", "December"];
var cdates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
//var currentdays = cdays[cdays.getDay()];
//var currentmonth = cmonth[cdate.getMonth()];
//var currentdates = cdates[cdates.getDate()];
var currentdays = cdays[cdays.getDay()] + ", " + cdates +" " + cmonth[cmonth.getMonth()] + " " + cdate.getFullYear();

document.getElementById("currentDate").innerHTML=currentdays; 




//+ ", " + currentmonth + " " + currentdates + " " + cdate.getFullYear();