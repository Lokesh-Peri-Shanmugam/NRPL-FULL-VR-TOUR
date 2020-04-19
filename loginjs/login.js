/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



var objPeople = [
	{ // Object @ 0 index
		username: "NRPL",
		password: "nrplvrtour"
	},
	{ // Object @ 1 index
		username: "admin",
		password: "loniticsstudios"
	},

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			location.replace("https://lokesh-peri-shanmugam.github.io/NRPL-FULL-VR-TOUR/nrp;vrtour.htm");
			// stop the function if this is found to be true
			return
		}
	}
	alert("Incorrect Password");
	console.log("incorrect username or password")
}
