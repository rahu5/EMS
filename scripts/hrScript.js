window.onload = function (){
	console.log("loading...");
	try{
	if(sessionStorage.getItem("beforeHrHome")==undefined){
		window.location='home.html';
		console.log("Direct access not allowed : " + document.referrer);
		return;
	}}catch(e){
		window.location='home.html';
		console.log("Direct access not allowed : " + document.referrer);
		return;
	}
	console.log("totalusers are : " + sessionStorage.totalUsers);
	document.getElementById("totalusers").innerHTML=sessionStorage.totalUsers;
}

function addNewEmp() {
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;
	var lastCount=parseInt(sessionStorage.totalUsers);
	if(!userMail.includes("@")){
		alert("Not an email! Please insert a valid email.");
		return;
	}
	for(var i=1;i<=lastCount;i++){
		if(sessionStorage.getItem(i)==userMail){
			alert("Dang! This user exist already.");
			return;
		}
	}
	sessionStorage.setItem(lastCount+1,userMail);
	sessionStorage.setItem(userMail,userPass);
	sessionStorage.setItem('totalUsers',lastCount+1);
	console.log("total users : " + (lastCount+1));
	document.getElementById("totalusers").innerHTML=lastCount+1;
	alert("User " + userMail + " added successfully !");
	document.getElementById("usermail").value = '';
	document.getElementById("userpass").value = '';

}
function hrLogOut(){
	window.location='home.html';
	console.log("hr logged Out!")
}
function searchUser(event){
	if(event.key==13 || event.which==13){
		var searchPattern=document.getElementById("searchtext").value;
		var searchResultByComma="";
		var totalusers=parseInt(sessionStorage.totalUsers);
		for(var i=1;i<=totalusers;i++){
			var fetchEmail=sessionStorage.getItem(i);
			if(fetchEmail.includes(searchPattern)){
				if(searchResultByComma=="")
					searchResultByComma=fetchEmail;
				else
					searchResultByComma=searchResultByComma + "," + fetchEmail;
			}	
		}
		sessionStorage.setItem('searchResultByComma',searchResultByComma);
		sessionStorage.setItem('beforeSearchResult','x5x5x5x');
		window.location='searchResult.html';
	}	
}
function makeComment(){
	console.log("Comment :");
	var userMail=document.getElementById("usercommentmail").value;
	var userComment=document.getElementById("usercomment").value;
	var user=sessionStorage.getItem(userMail);
	if(user){
		sessionStorage.setItem(userMail + "Com",userComment);
		console.log(userComment);
		alert("Comment saved!");
		document.getElementById("usercommentmail").value="";
		document.getElementById("usercomment").value="";
	}else{
		alert("User does not exist!");
	}
}
var currentTotalUsers=1;
function navigateHrTo(option){
	console.log(option + "tab clicked.");
	var tabs=["hrblock","searchuser","commentuser"];
	for(var i=0;i<3;i++){
		console.log("hide : " + tabs[i]);
		document.getElementById(tabs[i]).style.display="none";
		document.getElementById(tabs[i]).style.visibility="hidden";	
		console.log("hidden : " + tabs[i]);
	}
	document.getElementById(option).style.display="block";
	document.getElementById(option).style.visibility="visible";
	if(option=="searchuser"){
		var total=parseInt(sessionStorage.totalUsers);
		for(currentTotalUsers;currentTotalUsers<=total;currentTotalUsers++){	
			var newEmp=document.createElement("p").appendChild(document.createTextNode(sessionStorage.getItem(currentTotalUsers)));
			document.getElementById("userlist").appendChild(newEmp);
			document.getElementById("userlist").appendChild(document.createElement("br"));
		}	
	}
}
