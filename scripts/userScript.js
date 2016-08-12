window.onload = function() {
	try{
		if(sessionStorage.beforeUserHome != "x5x5x5x"){
			window.location='home.html';
			console.log("Direct access not allowed : " + document.referrer);
			return;
		}	
		var current=sessionStorage.currentUser;
		console.log(current);
		document.getElementById('profilemail').innerHTML=current;
		document.getElementById('profilepass').innerHTML=sessionStorage.getItem(current);
		console.log(sessionStorage.getItem(current));
		document.getElementById('profilecomment').innerHTML=sessionStorage.getItem(current+"Com");
	}catch(e){
		window.location='home.html';
		console.log("Direct access not allowed : " + document.referrer);
		return;
	}	
}
function logOutUser(){
	sessionStorage.currentUser="loggedOut";
	sessionStorage.beforeUserHome='0';
	window.location='home.html';
	console.log("User logged Out!");
}				