const heartRain = ()=>{
	const heart = document.createElement('div');
	heart.classList.add('heart');

	heart.style.left = Math.random()*100 +'vw';
	heart.style.animationDuration=Math.random()*5+"s";
	
	heart.innerText="💗";
	document.body.appendChild(heart)
	}
	
	setInterval(heartRain, 300)

	setTimeout(()=>{
		heart.remove('heart');

	},5000)

