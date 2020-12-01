console.log('This is PostMaster By Utsav');

//Utility function
//1. utility function to get DOM element from string
function getElementFromString(string){
	let div = document.createElement('div');
	div.innerHTML = string
	return div.firstElementChild;
}

// initialize number of parameters
let addedparamCount =0;

//hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

//if the user clicks params, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', ()=>{
document.getElementById('requestJsonBox').style.display = 'none'
parametersBox.style.display = 'block';
})

//if the user clicks json, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
	document.getElementById('requestJsonBox').style.display = 'block'
	document.getElementById('parametersBox').style.display = 'none'
	document.getElementById('params').style.display = 'none'
})

// if user clicks on plus button add more parameters

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', ()=>{
	let params = document.getElementById('params');
	let string = ` <div class="form-row my-2">
                <label for="url" class="col-sm-2 col-form-label">Parameters</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${addedparamCount+2}" placeholder="Enter Parameter key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${addedparamCount+2}" placeholder="Enter Parameter value">
                </div>
                <button class="btn btn-primary deleteParam" class="btn btn-primary"> - </button>
            </div>`
     //convert the element string to DOM mode
     let paramElement = getElementFromString(string);
     params.appendChild(paramElement)
     // add an event listener to remove the parameter on clicking
     let deleteParam = document.getElementsByClassName('deleteParam');
     for(item of deleteParam){
     	item.addEventListener('click', (e)=>{
     		e.target.parentElement.remove();
     	})
     }
     addedparamCount++;
})

// if thee user clicks the submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
	// show Please wait in the response box 
	document.getElementById('responsePrism').innerHTML = "Fetching response..."

	//fetch all the values the user has entered
	let url = document.getElementById('url').value;
	let requestType = document.querySelector("input[name='requestType']:checked").value;
	let contentType = document.querySelector("input[name='contentType']:checked").value;

	//If user has used params option collect all the parameters
	if(contentType=='params'){
		data = {};
		for(i=0; i<addedparamCount+1; i++){
			if(document.getElementById('parameterKey'+(i+1))!=undefined) {
			let key = document.getElementById('parameterKey'+(i+1)).value;
			let value = document.getElementById('parameterValue'+(i+1)).value;
			data[key] = value;
		}
		
		}
		data = JSON.stringify(data)
	}
	else{
		data = document.getElementById('requestJsontext').value
	}
	//log all the values for ddebugging
	console.log(url);
	console.log(requestType);
	console.log(contentType);
	console.log(data);

	// if the request type is post invoke fetch api 
	if(requestType == 'GET'){
		fetch(url, {
			method:'GET',
		})
		.then(response=> response.text())
		.then((text)=>{
			 // document.getElementById('responseJsontext').value = text
			 document.getElementById('responsePrism').innerHTML = text;
			 Prism.highlightAll();
		});

	}
	else{
		fetch(url, {
			method:'POST',
			body:data,
			 headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
		})
		.then(response=> response.text())
		.then((text)=>{
			 // document.getElementById('responseJsontext').value = text
			 document.getElementById('responsePrism').innerHTML = text
			 Prism.highlightAll();
		});

	}
})





