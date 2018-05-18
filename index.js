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
		let nodes = document.getElementsByClassName('node');
		for(let node of nodes) {
			node.style.width = '30px';
		}
		let top = 135;
		let left = 135;
		yellow.style.top = top + 55;
        yellow.style.left = left + 55;
		pink.style.top = top + 55;
        pink.style.left = left - 55;
		green.style.top = top - 55;
        green.style.left = left - 55;
		blue.style.top = top - 55;
        blue.style.left = left + 55;
	}
	
	function rotateContainer() { 
		rotate = rotate + 360;
		container.style.transform = `rotate(${rotate}deg)`;
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
		setTimeout(rotateContainer,500);
		setTimeout(shrinkDivs,1300);
		setTimeout(growDivs,1600);
        setTimeout(makeBar,2200);
	}
	
	function makeBar() {
        yellow.style.transformOrigin = "15px 15px";
        yellow.style.transform = `rotate(-110deg)`;
        yellow.style.width = `${parseInt(getComputedStyle(yellow).width) + 140}px`;
        pink.style.transformOrigin = "15px 15px";
        pink.style.transform = `rotate(-20deg)`;
        pink.style.width = `${parseInt(getComputedStyle(pink).width) + 140}px`;
        green.style.transformOrigin = "15px 15px";
        green.style.transform = `rotate(70deg)`;
        green.style.width = `${parseInt(getComputedStyle(green).width) + 140}px`;
        blue.style.transformOrigin = "15px 15px";
        blue.style.transform = `rotate(160deg)`;
        blue.style.width = `${parseInt(getComputedStyle(blue).width) + 140}px`;
	}
	
	let container = document.getElementById("container");
	let yellow,pink,green,blue, rotate = 360;
	makeDivs();
	animateLogo();
	setInterval(animateLogo,3200);
	
})();