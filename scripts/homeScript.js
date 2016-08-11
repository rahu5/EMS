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
			sessionStorage.totalUsers=0;
			loggedInHR();
	}
	else{
		if(sessionStorage.totalUsers){
			var total=sessionStorage.totalUsers;
			for(var i=1;i<=total;i++){
				if(sessionStorage.getItem(i)==userMail && sessionStorage.getItem(userMail)==userPass){
					sessionStorage.currentUser=userMail;
					window.location='userHome.html';
				}
			}

		}else{
			alert("Wrong Email and password!");
		}	
	}
}
function loggedInHR(){
	window.location='hrHome.html';	
}