console.log('test');
//Array of objects which contains information about the candidates
const data =[
	{
		name:"Rohan Das",
		age:18,
		city:"kolkata",
		languages:"python",
		framework:"Django",
		image:'https://randomuser.me/api/portraits/med/men/51.jpg'
	},
	{
		name:"Shubham Sharma",
		age:28,
		city:"Banglore",
		languages:"javascriprt",
		framework:"angular",
		image:'https://randomuser.me/api/portraits/med/men/52.jpg'
	},
	{
		name:"Camilla Cabelo",
		age:18,
		city:"kolkata",
		languages:"python",
		framework:"Django",
		image:'https://randomuser.me/api/portraits/med/women/57.jpg'
	},
	{
		name:"Ash Rai",
		age:45,
		city:"Mumbai",
		languages:"python",
		framework:"Flask",
		image:'https://randomuser.me/api/portraits/med/women/78.jpg'
	},
	{
		name:"Rohit Sharma",
		age:35,
		city:"Jharkhand",
		languages:"Go",
		framework:"Go framework",
		image:'https://randomuser.me/api/portraits/med/men/61.jpg'
	}
];
//Cv iterator
function cvIterator(profiles){
	let nextIndex = 0;
	return {
		next: function(){
			return nextIndex<profiles.length ? 
			{value: profiles[nextIndex++], done:false} : {done:true}
		}
	};
}
const candidates = cvIterator(data);
nextCV();
//button listener 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV(){
	const currentCandidate = candidates.next().value;
 	let image = document.getElementById('image');
 	let profile = document.getElementById('profile');
 	if(currentCandidate!=undefined){
 	image.innerHTML = `<img src='${currentCandidate.image}'>`
 	profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">${currentCandidate.age} years old</li>
  <li class="list-group-item">lives in ${currentCandidate.city}</li>
  <li class="list-group-item"> Primarily works on ${currentCandidate.languages}</li>
  <li class="list-group-item"> uses ${currentCandidate.framework}</li>
</ul>`
}else{
	alert("End of applications")
	window.location.reload();
}

}


























































































