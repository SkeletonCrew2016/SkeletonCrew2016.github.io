var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var minuteString;
var greeting;
var morning;

if(hourNow > 17){
	greeting = "You have a clock on your computer.";
}
else if(hourNow > 14){
	greeting = "You have a clock on your computer bonehead.";
}
else if(hourNow > 11){
	greeting = "You have a clock on your computer bonehead.";
}
else if(hourNow > 6){
	greeting = "You have a clock on your computer bonehead.";
}
else if (hourNow > 0){
	greeting = "You have a clock on your computer bonehead.";
}
else
	greeting = "You have a clock on your computer bonehead.";

document.write('<h3>' + greeting + '</h3>');

if(hourNow > 12){
	hourNow = hourNow - 12;
	morning = false;
}
else
	morning = true;

if(minuteNow < 10)
	minuteString = "0"+minuteNow;
else
	minuteString = ""+minuteNow;


document.write('<h2>' + hourNow + ":" + minuteString + " ");
if(morning == true)
	document.write("a.m." + '</h2>');
else
	document.write("p.m."+'</h2>');