const hrEmail="hr@cronj.com";
const hrPass="hrcronj";
const WrongEmailPassword="Wrong Email OR Password!";
const InvalidEmail="Not an email! Please insert a valid email."
const UnknownError="Something went wrong !";
function validateUser() {
	console.log("validate");
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;	
	if(!userMail.includes("@")){
		alert(InvalidEmail);
		return false;
	}
	if(userMail==hrEmail && userPass==hrPass) {
			return logInHR();
	}
	else{
		if(sessionStorage.totalUsers){
			return logInUser(userMail,userPass);
		}else{
			return alert(WrongEmailPassword);
		}	
	}
}
function logInHR(){
	console.log("Hr logging in..");
	try{
		if(sessionStorage.totalUsers == undefined){
			sessionStorage.totalUsers=0;
		}
	}catch(e){
		alert(UnknownError);
		return false;
	}
	sessionStorage.currentUser=hrEmail;		
	sessionStorage.setItem("beforeHrHome","x5x5x5x");
	redirectToPage('hrHome.html');
	return false;	
}
function redirectToPage(pageTitle){
	window.location=pageTitle;
}
function logInUser(userMail,userPass){
	var total=sessionStorage.totalUsers;
	console.log("searching within " + total + " Users");
	for(var i=1;i<=total;i++){
		if(sessionStorage.getItem(i)==userMail && sessionStorage.getItem(userMail)==userPass){
			sessionStorage.currentUser=userMail;
			sessionStorage.setItem("beforeUserHome",'x5x5x5x');
			redirectToPage('userHome.html');
			return false;
		}
	}
	return alert(WrongEmailPassword);
}