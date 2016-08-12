var hrEmail="hr@cronj.com";
var hrPass="hrcronj";
function validateUser() {
	console.log("validate");
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;	
	if(!userMail.includes("@")){
		alert("Not an email! Please insert a valid email.");
		return;
	}
	if(userMail==hrEmail && userPass==hrPass) {
			//alert("Logged In!");
			console.log("Hr logging in..");
			try{
			if(sessionStorage.totalUsers == undefined){
				sessionStorage.totalUsers=0;
			}}catch(e){
				alert("Something went wrong !");
				return;
			}
			sessionStorage.currentUser=hrEmail;
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
			alert("Wrong Email OR Password!");
		}else{
			alert("Wrong Email OR Password!");
		}	
	}
}
function loggedInHR(){
	sessionStorage.setItem("beforeHrHome","x5x5x5x");
	window.location='hrHome.html';	
}