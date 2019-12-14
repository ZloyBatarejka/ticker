const inputForm = document.querySelector(".inputForm")
const ticker = document.querySelector(".ticker")
const birthdayRecevier = document.querySelector(".btn")
if(localStorage.getItem("birthday")){
	formToggler();
	tickerStarter()
} 
birthdayRecevier.addEventListener("click",(event)=>{
	event.preventDefault();
	receiver();
	tickerStarter();
})
function receiver(){
	let birthday = new Date(document.querySelector(".dateInput").value);
	localStorage.setItem("birthday",birthday);
	formToggler()
}
function formToggler(){
	inputForm.classList.toggle("hide");
	ticker.classList.toggle("hide");
}
function tickerStarter(){
	let nullifier = (365*24*60*60*1000)
	setInterval(()=>{
		let age = Date.now() - new Date(localStorage.getItem("birthday"));
		ticker.textContent = (age / nullifier).toFixed(8)
	},100)
}
