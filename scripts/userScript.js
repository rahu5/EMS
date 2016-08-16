window.onload = function() {
	try{
		if(sessionStorage.getItem('beforeUserHome') != 'x5x5x5x'){
			window.location='home.html';
			console.log("Direct access not allowed to user Home: " + sessionStorage.beforeUserHome);
			return;
		}
	}catch(e){
		window.location='home.html';
		console.log("Exception Occured on :  " + e.message);
		return;
	}		
		var current=sessionStorage.currentUser;
		console.log(current);
		document.getElementById('profilemail').innerHTML=current;
		document.getElementById('profilepass').innerHTML=sessionStorage.getItem(current);
		console.log(sessionStorage.getItem(current));
		if(sessionStorage.getItem(current+"Com")){
			var comments=sessionStorage.getItem(current+"Com").split(",");
			for(var i=0;i<comments.length;i++){
				var childComments=document.createElement("p").appendChild(document.createTextNode(comments[i]));
				document.getElementById('profilecomment').appendChild(childComments);
				document.getElementById('profilecomment').appendChild(document.createElement("br"));
			}	
		}else{
			var childComments=document.createElement("p").appendChild(document.createTextNode("No comments yet!"));
			document.getElementById('profilecomment').appendChild(childComments);
			document.getElementById('profilecomment').appendChild(document.createElement("br"));
		}
}
function logOutUser(){
	sessionStorage.currentUser="loggedOut";
	sessionStorage.beforeUserHome='0';
	window.location='home.html';
	console.log("User logged Out!");
}
function changePass(){
	var newPass=document.getElementById("newpassword").value;
	sessionStorage.setItem(sessionStorage.currentUser,newPass);
	document.getElementById('profilepass').innerHTML=newPass;
	alert("Password changed to : " + newPass);
	document.getElementById("newpassword").value="";
	return false;
}				