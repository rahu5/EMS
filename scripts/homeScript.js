var hrEmail="hr@cronj.com";
var hrPass="hrcronj";
function validateUser() {
	console.log("validate");
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;	
	if(userMail==hrEmail && userPass==hrPass) {
			//alert("Logged In!");
			console.log("Hr");
			sessionStorage.currentUser=hrEmail;
			if(sessionStorage.totalUsers == undefined){
				sessionStorage.totalUsers=0;
			}
			//alert("total users are : " + sessionStorage.totalUsers);	
			loggedInHR();
	}
	else{
		if(sessionStorage.totalUsers){
			var total=sessionStorage.totalUsers;
			console.log("searching within " + total + " Users");
			for(var i=1;i<=total;i++){
				if(sessionStorage.getItem(i)==userMail && sessionStorage.getItem(userMail)==userPass){
					sessionStorage.currentUser=userMail;
					sessionStorage.setItem("beforeUserHome",'x5x5x5x');
					window.location='userHome.html';
					return;
				}
			}
			alert("Wrong Email and password!");
		}else{
			alert("Wrong Email and password!");
		}	
	}
}
function loggedInHR(){
	sessionStorage.setItem("beforeHrHome","x5x5x5x");
	window.location='hrHome.html';	
}