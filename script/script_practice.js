window.onload = function(){

	
	var el = document.getElementById('time');
	function clock(){
		var mins = new Date().getMinutes();
		var hrs = new Date().getHours();
		var days = new Date().getDay();
		var mons = new Date().getMonth();
		var yrs = new Date().getFullYear();
		el.textContent = yrs + '/' + mons + '/' + days + ' ' + hrs + ':' + mins;
	}
	setInterval(clock, 1000);



	var btn = document.getElementById('click');

	btn.addEventListener('click', function() {
		var bg = document.getElementById('jumbo');
		bg.style.backgroundColor = 'black';
	});

}

