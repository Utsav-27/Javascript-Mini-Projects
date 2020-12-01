// get the modal element
var modal = document.getElementById('simpleModal');
// get the open modal button
var modalBtn = document.getElementById('modalBtn');
//get the close button
var closeBtn = document.getElementById('closeBtn');

// listen for a click
modalBtn.addEventListener('click', openModal);
//listen for close button
closeBtn.addEventListener('click', closeModal);
// listen for window click
window.addEventListener('click', clickOutside);

// functions open modal
function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}
function clickOutside(e){
	if(e.target == modal)
	{
		modal.style.display = 'none';
	}
}