window.addEventListener('load', function(evt){
	console.log("Script.js loaded");
	init();
	
});


function init(){
	
	
	console.log("In Init()");
	loadAllProperties();
	document.addForm.add.addEventListener('click', addProperty);
	document.form.del.addEventListener('click', de)
	
	
}


function loadAllProperties(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/type/properties')
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let properties = JSON.parse(xhr.responseText);
				displayProperties(properties);
			}
		}
		else {
			displayError("Error Creating property"+ xhr.status + " " + xhr.statusText);

		}
			
	};
	
	
	xhr.send();
}


function displayError(message){
	let datDiv = document.getElementsByName('detail')
	
	datDiv.textContent= message;
}




function displayProperties(props){
	
	let table = document.getElementById('table1')
	
	
	let tbody = document.getElementById('proprows');
	
	
	
	for(let v of props){
		let tr = document.createElement('tr');
		tr.setAttribute('data-toggle', 'collapse');
		tr.setAttribute('data-target', '#accordion'+v.id);
		tr.className='';
		
		tr.setAttribute('aria-control','accordion'+v.id)
		
		
		let id = document.createElement('td');
		id.textContent = v.id;
		let address = document.createElement('td');
		address.textContent = v.propertyAddress;
		let renta = document.createElement('td');
		renta.textContent = v.rentalAmount
		let lease = document.createElement('td');
		lease.textContent = v.leaseStatus;
		
		
		tr.appendChild(id)
		tr.appendChild(address)
		tr.appendChild(renta)
		tr.appendChild(lease)
		tbody.appendChild(tr);
		
		let tr2 = document.createElement('tr');
		let td2 = document.createElement('td');
		td2.colSpan=4;
		let div = document.createElement('div');
		div.id="accordion"+v.id;
		div.className="collapse show";
		
		
		let p1 = document.createElement('li')
		p1.textContent = v.note
		
		let p2 = document.createElement('li');
		p2.textContent = v.purchaseAmount;
		
		let formd= document.createElement('form')
		formd.id="form";
		
		let hiddeninput = document.createElement('input');
		hiddeninput.type="hidden";
		hiddeninput.id = "see"+v.id
		hiddeninput.name='pId';
		hiddeninput.value=v.id
		hiddeninput.className='delete'
		
		let deletebutton = document.createElement('button')
		deletebutton.className="btn btn-danger fa-solid fa-trash";
		deletebutton.name="del"
		deletebutton.type="submit"
		formd.appendChild(hiddeninput);
		formd.appendChild(deletebutton)
		
		
		 
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(formd);
		
		td2.appendChild(div);
		tr2.appendChild(td2);
		
		
		
		tbody.appendChild(tr2);
		
		
	
		}
		
		
		
	};
  	






function addProperty(evt){
	
	evt.preventDefault();
	let form = document.addForm;
	
	let newProperty = {
		propertyAddress: form.propertyAddress.value,
		rentalAmount: form.rentalAmount.value,
		purchaseDate: form.purchaseDate.value,
		purchaseAmount: form.purchaseAmount.value,
		note: form.note.value,
		leaseStatus: form.leaseStatus.value
	};
	console.log(newProperty)
	
	sendNewProp(newProperty);
};

		
	
function sendNewProp(sendNewProp){
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'api/types/1/properties')
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let prop = JSON.parse(xhr.responseText);
				loadAllProperties();
				displayProperties(prop);
				
				
			}
			else {
				displayError("Error Creating Property"+ xhr.status + " " + xhr.statusText);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json"); 
	xhr.send(JSON.stringify(sendNewProp));
	
}


function deleteProp(filmId){
	let xhr = XMLHttpRequest();
	xhr.open('DELETE',`api/types/1/properties/${filmId}`);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let prop = JSON.parse(xhr.responseText);
				
			}
			else {
				displayError("Error Deleting Property"+ xhr.status + " " + xhr.statusText);
			}
		}
	};
	
	xhr.send();
}


function de(evt){
	evt.preventDefault();
	console.log(evt)
	let form = document.getElementById('see'+ e.target.id)
	
	deleteProp(form)
	
	console.log(form)
}


	
	
	



const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidenav');
const sidenavCloseEl = $('.sidenav__close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Open the side nav on click
menuIconEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidenavCloseEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');
});








