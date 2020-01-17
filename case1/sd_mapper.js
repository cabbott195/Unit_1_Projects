"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Colby Abbott
   Date:   1/16/20
*/

  
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();


document.getElementById("timeStamp").innerHTML = timeStr;


var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();


var mapNum = ((2*thisMonth + thisHour)%24);


var imgStr = "<img src='sd_sky" + mapNum + ".png'>"; 


document.getElementById("planisphere").insertAdjacentHTML("afterBegin", imgStr);

