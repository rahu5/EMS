var loggedInUser;
var loggedInUserId;
const TabColorNormal="#aabbcc";
const TabColorSelected="#3973ac";
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
	var noComment=true;
	for(var i=1;i<=sessionStorage.totalUsers;i++){
		var usersObj=JSON.parse(sessionStorage.getItem("uid" + i));
		if(usersObj.email==current){
			loggedInUser=usersObj;
			loggedInUserId="uid" + i;
		}
	}
	document.getElementById("navtoprofile").style.background=TabColorSelected;
	document.getElementById('profilename').innerHTML=loggedInUser.name;
	document.getElementById('profilemobile').innerHTML=loggedInUser.mobile;
	for(var i=0;i<loggedInUser.comment.length;i++){
		var childComments=document.createElement("p").appendChild(document.createTextNode(loggedInUser.comment[i]));
		document.getElementById('profilecomment').appendChild(childComments);
		document.getElementById('profilecomment').appendChild(document.createElement("br"));
		noComment=false;
	}
	if(noComment){
		var childComments=document.createElement("p").appendChild(document.createTextNode("No comments yet!"));
		document.getElementById('profilecomment').appendChild(childComments);
		document.getElementById('profilecomment').appendChild(document.createElement("br"));
	}
	return;
}
function showTab(option,clicked){
	hideAllTabs();
	resetAllTabColor();
	setTabColor(clicked);
	document.getElementById(option).style.display="block";
	document.getElementById(option).style.visibility="visible";
}
function hideAllTabs(){
	var tabs=["userprofile","userpassword"];
	for(var i=0;i<2;i++){
		document.getElementById(tabs[i]).style.display="none";
		document.getElementById(tabs[i]).style.visibility="hidden";
	}
}
function resetAllTabColor(){
	document.getElementById("navtoprofile").style.background=TabColorNormal;
	document.getElementById("navtopassword").style.background=TabColorNormal;
}
function setTabColor(tabClicked){
	document.getElementById(tabClicked).style.background=TabColorSelected;
}
function logOutUser(){
	sessionStorage.currentUser="loggedOut";
	sessionStorage.beforeUserHome='0';
	redirectToPage('home.html');
}
function changePass(){
	var newPass=document.getElementById("newpassword").value;
	var oldPass=document.getElementById("oldpassword").value;
	if(oldPass==loggedInUser.pass){
		loggedInUser.pass=newPass;
		sessionStorage.setItem(loggedInUserId,JSON.stringify(loggedInUser));
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