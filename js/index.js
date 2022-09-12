window.onload = function(){
	let tens = "00";
	let seconds = "00";
	const ButtonStartTimer = document.getElementById("button-start");
	const ButtonStopTimer = document.getElementById("button-stop");
	const ButtonResetTimer = document.getElementById("button-reset");
	const appendSec = document.getElementById("seconds");
	const appendTens = document.getElementById("tens");
	let Interval;

	ButtonStartTimer.addEventListener("click",function(){
		clearInterval(Interval);
		Interval = setInterval(startTimer,10);
		ButtonStopTimer.addEventListener("click",function(){
			clearInterval(Interval);
		})
		ButtonResetTimer.addEventListener("click",function(){
			clearInterval(Interval);
			tens = "00";
			seconds = "00";
			appendTens.innerHTML = tens;
			appendSec.innerHTML = seconds;
		})
		function startTimer(){
			tens++;
			if(tens <= 9){
				appendTens.innerHTML = "0" + tens;
			}
			if(tens > 9){
				appendTens.innerHTML = tens;
			}
			if(tens > 99){
				console.log("seconds");
				seconds++;
				appendSec.innerHTML = "0" + seconds;
				tens = 0;
				appendTens.innerHTML = "0" +0;
			}
			if(seconds > 9){
				appendSec.innerHTML = seconds;
			}
		}
	})
}

