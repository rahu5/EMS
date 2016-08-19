const HR_EMAIL="hr@cronj.com";
const HR_PASS="hrcronj";
const WRONG_EMAIL_PASSWORD="Wrong Email OR Password!";
const INVALID_EMAIL="Not an email! Please insert a valid email.";
const UNKNOWN_ERROR="Something went wrong !";

function validateUser() {
	var userEmail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;
	if(!testEmail(userEmail)){
		alert("Please enter a valid E-Mail");
		document.getElementById("usermail").focus();
		return false;
	}
	if(userEmail==HR_EMAIL && userPass==HR_PASS) {
			return logInHR();
	}
	else{
		if(sessionStorage.totalUsers){
			return logInUser(userEmail,userPass);
		}else{
			return alert(WRONG_EMAIL_PASSWORD);
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
		alert(UNKNOWN_ERROR);
		return false;
	}
	sessionStorage.currentUser=HR_EMAIL;		
	sessionStorage.setItem("beforeHrHome","x5x5x5x");
	redirectToPage('hrHome.html');
	return false;	
}

function redirectToPage(pageTitle){
	window.location=pageTitle;
}

function logInUser(userEmail,userPass){
	var total=sessionStorage.totalUsers;
	console.log("searching within " + total + " Users");
	for(var i=1;i<=total;i++){
		var usersObj=JSON.parse(sessionStorage.getItem("uid" + i));
		if(usersObj.email==userEmail && usersObj.pass==userPass){
			sessionStorage.currentUser=userEmail;
			sessionStorage.setItem("beforeUserHome",'x5x5x5x');
			redirectToPage('userHome.html');
			return false;
		}
	}
	return alert(WRONG_EMAIL_PASSWORD);
}
function testEmail(email){
	if(!email.includes('@'))
		return false;
	var part=email.split('@');
	if(part.length>2)
		return false;
	var regEx=new RegExp("[^a-zA-Z0-9._]");
	if(regEx.test(part[0]))
		return false;
	if(regEx.test(part[1]))
		return false;
	return true;
}