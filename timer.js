const finish = new Date();

let startTimeValue = 121;

if(localStorage.getItem("startTimeValue")){
	startTimeValue = localStorage.getItem("startTimeValue");
}
console.log(finish.getTime())
finish.setTime( finish.getTime() + startTimeValue * 10000 ); // через 44 минуты

// console.log(new Date(finish.setTime( finish.getTime() + startTimeValue * 1e4 )))

const outElement = document.getElementById("timer");

const update = () => {
  // const minutes = Math.floor((finish - Date.now()) / 10000);
  outElement.innerText = (startTimeValue > 0)  ?  startTimeValue : "Остава един последен елемент!";
}

update();

console.log(finish);

const timer = setInterval(() => {
	startTimeValue = startTimeValue - 1;
	localStorage.setItem("startTimeValue", startTimeValue);

	update();
}, 10000);