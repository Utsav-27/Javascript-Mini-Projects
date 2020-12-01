const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener('click', setAlarm);
function setAlarm(e){
	e.preventDefault();
	const alarm = document.getElementById('alarm');
	console.log(regex.exec(alarm))
	

	alarmDate = new Date(alarm.value);
	console.log(`Setting alarm for ${alarmDate}`);
	now = new Date();

	let timeToAlarm = alarmDate-now;
	console.log(alarmDate-now);
	if(timeToAlarm>=0){
		setTimeout(()=>{
			alert("Alarm ringing"); // here you can play instead of a alert box
		}, timeToAlarm)
	}

}

