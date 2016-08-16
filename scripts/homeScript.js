var hrEmail="hr@cronj.com";
var hrPass="hrcronj";
var WrongEmailPassword="Wrong Email OR Password!";
var InvalidEmail="Not an email! Please insert a valid email."
var UnknownError="Something went wrong !";
function validateUser() {
	console.log("validate");
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;	
	if(!userMail.includes("@")){
		alert(InvalidEmail);
		return false;
	}
	if(userMail==hrEmail && userPass==hrPass) {
			//alert("Logged In!");
			console.log("Hr logging in..");
			try{
			if(sessionStorage.totalUsers == undefined){
				sessionStorage.totalUsers=0;
			}}catch(e){
				alert(UnknownError);
				return false;
			}
			sessionStorage.currentUser=hrEmail;
			//alert("total users are : " + sessionStorage.totalUsers);	
			return loggedInHR();
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
					return false;
				}
			}
			alert(WrongEmailPassword);
		}else{
			alert(WrongEmailPassword);
		}	
	}
}
function loggedInHR(){
	sessionStorage.setItem("beforeHrHome","x5x5x5x");
	window.location='hrHome.html';
	return false;	
}