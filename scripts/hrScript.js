function addNewEmp() {
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;
	var lastCount=parseInt(sessionStorage.totalUsers);
	sessionStorage.setItem(lastCount+1,userMail);
	sessionStorage.setItem(userMail,userPass);
	sessionStorage.setItem('totalUsers',lastCount+1);
	console.log("total users : " + (lastCount+1));
	document.getElementById("totalusers").innerHTML=lastCount+1;
}
function hrLogOut(){
	window.location='home.html';
}