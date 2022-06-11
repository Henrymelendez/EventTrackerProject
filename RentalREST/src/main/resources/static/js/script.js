window.addEventListener('load', function(evt){
	console.log("Script.js loaded");
	init();
	
});


function init(){
	
	
	console.log("In Init()");
	loadAllProperties();
	
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
			/// TODOO
		}
			
	};
	
	
	xhr.send();
}





function displayProperties(props){

	let tbody = document.getElementById('proprows');

	
	props.forEach(function(v,i,a){
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		let addressTD = document.createElement('td');
		let rentalAmountTd = document.createElement('td');
		let leaseTd = document.createElement('td');
		
		rentalAmountTd.textContent = v.rentalAmount;
		td.textContent = v.id;
		addressTD.textContent = v.propertyAddress;
		leaseTd.textContent = v.leaseStatus;
		tr.appendChild(td);
		tr.appendChild(addressTD);
		tr.appendChild(rentalAmountTd);
		tr.appendChild(leaseTd);
		tbody.appendChild(tr);
	});
	

};


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








