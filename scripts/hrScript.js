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
		document.getElementById("usercommentmail").value="email";
		document.getElementById("usercomment").value="comment please!";
	}else{
		alert("User does not exist!");
	}
}
