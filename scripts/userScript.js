window.onload = function() {
	try{
		if(sessionStorage.getItem('beforeUserHome') != 'x5x5x5x'){
			redirectToPage('home.html');
			return;
		}
	}catch(e){
		redirectToPage('home.html');
		return;
	}		
	var current=sessionStorage.currentUser;
	document.getElementById('profilemail').innerHTML=current;
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
	redirectToPage('home.html');
}
function changePass(){
	var newPass=document.getElementById("newpassword").value;
	var oldPass=document.getElementById("oldpassword").value;
	if(oldPass==sessionStorage.getItem(sessionStorage.currentUser)){
		sessionStorage.setItem(sessionStorage.currentUser,newPass);
		alert("Password changed to : " + newPass);
		document.getElementById("newpassword").value="";
		document.getElementById("oldpassword").value="";
	}else{
		alert("Old Password is wrong.")
		document.getElementById("newpassword").value="";
		document.getElementById("oldpassword").value="";
	}
	return false;
}	
function redirectToPage(pageTitle){
	window.location=pageTitle;
}			