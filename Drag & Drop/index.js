console.log('test');
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox')

// event listeners for draggable img box
imgBox.addEventListener('dragstart', (e)=>{
	console.log('drag started');
	e.target.className += ' hold'  // hold class will create a border around the holded image
	setTimeout(()=>{
		e.target.className = ' hide'  // after 0 time hide the current image
	},0)
});
imgBox.addEventListener('dragend', (e)=>{
	console.log('drag ended');
	e.target.className = 'imgBox';
});


for(whiteBox of whiteBoxes){
	whiteBox.addEventListener('dragover', (e)=>{
		e.preventDefault();
		console.log('dragover');

	})
	whiteBox.addEventListener('dragenter', (e)=>{
		console.log('dragenter');
		e.target.className += ' dashed' 
		
	})
	whiteBox.addEventListener('dragleave', (e)=>{
		console.log('dragleave');
		e.target.className = 'whiteBox'


		
	})
	whiteBox.addEventListener('drop', (e)=>{
		console.log('drop');
		e.target.append(imgBox);
		
	})
}








