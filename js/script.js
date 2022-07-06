const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

function getFuel(){	
	document.getElementById("fuel").innerHTML = "66,770 liquid hydrogen";
}

function getThrottle(){	
	document.getElementById("throttle").innerHTML = "10 ms/1";
}
function getSpeed(){	
	document.getElementById("speed").innerHTML = "39935 Kmh/1";
}
function getAcce(){	
	document.getElementById("acce").innerHTML = "10Ms/2";
}


function getGravity(){	
	document.getElementById("gravity").innerHTML = "6 ms/2";
}
function getDistance(){	
	document.getElementById("distance").innerHTML = "3600Km";
}
function getAtmos(){	
	document.getElementById("atmos").innerHTML = "Clear";
}

function getFood(){	
	document.getElementById("food").innerHTML = "100,000 Ton";
}
function getWater(){	
	document.getElementById("water").innerHTML = "20,000,000 Gallons";
}



function convertGravity(){	
	document.getElementById("gravityconv").innerHTML = "6ms/2";
}
function convertMiles(){	
	document.getElementById("mileconvert").innerHTML = "20000Miles";
}
