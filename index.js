(function() {
	
	function makeDivs() {
        yellow = document.createElement('div');
        yellow.className = "node";
        yellow.id = "yellow";
		blue = document.createElement('div');
        blue.className = "node";
        blue.id = "blue"
		green = document.createElement('div');
        green.className = "node";
        green.id = "green";
		pink = document.createElement('div');
        pink.className = "node";
        pink.id = "pink";
		container.append(blue);
		container.append(yellow);
		container.append(pink);
		container.append(green);
	}
	
	function splitDivs() {
        let top = parseInt(getComputedStyle(yellow).top);
        let left = parseInt(getComputedStyle(yellow).left);
        let size = '30px';
		yellow.style.top = top + 55;
        yellow.style.left = left + 55;
        yellow.style.height = size;
        yellow.style.width = size;
		pink.style.top = top + 55;
        pink.style.left = left - 55;
        pink.style.height = size;
        pink.style.width = size;
		green.style.top = top - 55;
        green.style.left = left - 55;
        green.style.height = size;
        green.style.width = size;
		blue.style.top = top - 55;
        blue.style.left = left + 55;
        blue.style.height = size;
        blue.style.width = size;
	}
	
	function rotateContainer() { 
		container.style.transform = `rotate(360deg)`;
	}
	
	function shrinkDivs() {
		yellow.style.top = parseInt(getComputedStyle(yellow).top) - 30;
		yellow.style.left = parseInt(getComputedStyle(yellow).left) - 30;
		pink.style.top = parseInt(getComputedStyle(pink).top) - 30;
		pink.style.left = parseInt(getComputedStyle(pink).left) + 30;
		green.style.top = parseInt(getComputedStyle(green).top) + 30;
		green.style.left = parseInt(getComputedStyle(green).left) + 30;
		blue.style.top = parseInt(getComputedStyle(blue).top) + 30;
		blue.style.left = parseInt(getComputedStyle(blue).left) - 30;
	}
	
	function growDivs() {
		yellow.style.top = parseInt(getComputedStyle(yellow).top) + 30;
		yellow.style.left = parseInt(getComputedStyle(yellow).left) + 30;
		pink.style.top = parseInt(getComputedStyle(pink).top) + 30;
		pink.style.left = parseInt(getComputedStyle(pink).left) - 30;
		green.style.top = parseInt(getComputedStyle(green).top) - 30;
		green.style.left = parseInt(getComputedStyle(green).left) - 30;
		blue.style.top = parseInt(getComputedStyle(blue).top) - 30;
		blue.style.left = parseInt(getComputedStyle(blue).left) + 30;
	}
	
	function animateLogo() {
		splitDivs();
		setTimeout(rotateContainer,700);
		setTimeout(shrinkDivs,1500);
		setTimeout(growDivs,2000);
        setTimeout(makeBar,2500);
	}
	
	function makeBar() {
        yellow.style.transformOrigin = "15px 15px";
        yellow.style.transform = `rotate(-110deg)`;
        yellow.style.width = `${parseInt(getComputedStyle(yellow).width) + 140}px`;
        pink.style.transformOrigin = "15px 15px";
        pink.style.transform = `rotate(-20deg)`;
        pink.style.width = `${parseInt(getComputedStyle(yellow).width) + 140}px`;
        green.style.transformOrigin = "15px 15px";
        green.style.transform = `rotate(70deg)`;
        green.style.width = `${parseInt(getComputedStyle(yellow).width) + 140}px`;
        blue.style.transformOrigin = "15px 15px";
        blue.style.transform = `rotate(160deg)`;
        blue.style.width = `${parseInt(getComputedStyle(yellow).width) + 140}px`;
	}
	
	let container = document.getElementById("container");
	let yellow,pink,green,blue;
	makeDivs();
	setInterval(animateLogo,3200);
	
})();