console.log("this is clock");

function updateClock(){
	let currentTime = new Date();
	let currentHours = currentTime.getHours(); 
	let currentMinutes = currentTime.getMinutes();
	let currentSeconds = currentTime.getSeconds();
	let currentDate = currentTime.getDate();
	let currentMonth = currentTime.getMonth();
	let currentYear = currentTime.getFullYear()
	let currentDay = currentTime.getDay();
	currentMinutes = (currentMinutes < 10 ? "0":"") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0":"") + currentSeconds;
	currentHours = (currentHours>12)? currentHours - 12 : currentHours;
	currentHours = (currentHours==0)? 12 : currentHours;
	let timeOfDay = (currentHours<12) ? "AM" : "PM";
	let day = ""
	switch(currentDay){
		case 0:
		day = "Sun";
		break;
		case 1:
		day = "Mon";
		break;
		case 2:
		day = "Tue";
		break;
		case 3:
		day = "Wed";
		break;
		case 4:
		day = "Thu";
		break;
		case 5:
		day = "Fri";
		break;
		case 6:
		day = "Sat";
		break;
	}
	currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + " "+ timeOfDay;
	dateStr = currentDate + " - "+  currentMonth + " - " + currentYear;
	document.getElementById('clock').innerHTML = currentTimeStr;
	document.getElementById('todaysDate').innerHTML = `${dateStr} <br> ${day}`;
}























































































