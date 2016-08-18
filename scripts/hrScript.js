window.onload = function (){
	console.log("loading...");
	try{
	if(sessionStorage.getItem("beforeHrHome")==undefined){
		return redirectToPage('home.html');
	}}catch(e){
		return redirectToPage('home.html');
	}
	console.log("totalusers are : " + sessionStorage.totalUsers);
	document.getElementById("totalusers").innerHTML=sessionStorage.totalUsers;
	document.getElementById("navhrtoadduser").style.background="#3973ac";
}

function addNewEmp() {
	//make one object user
	var userMail=document.getElementById("usermail").value;
	var userPass=document.getElementById("userpass").value;
	var userName=document.getElementById("username").value;
	var userMobile=document.getElementById("usermobile").value;

	var lastCount=parseInt(sessionStorage.totalUsers);
	if(userAlreadyExist(userMail,lastCount)){
		alert("Dang! This user exists already.");
		return false;
	}
	var obj={email:userMail,pass:userPass,name:userName,mobile:userMobile,comment:[]};
	
	sessionStorage.setItem("uid"+(lastCount+1),JSON.stringify(obj));
	//sessionStorage.setItem(lastCount+1,userMail);
	//sessionStorage.setItem(userMail,userPass);
	
	sessionStorage.setItem('totalUsers',lastCount+1);
	
	console.log("total users : " + (lastCount+1));
	
	document.getElementById("totalusers").innerHTML=lastCount+1;

	document.getElementById("usermail").value = '';
	document.getElementById("userpass").value = '';
	document.getElementById("username").value = '';
	document.getElementById("usermobile").value = '';
	return false;
}
function hrLogOut(){
	return redirectToPage('home.html');
}
function searchUser(event){
	if(event.which==13 || event=='13'){
		var searchPattern=document.getElementById("searchtext").value;
		//var searchResultByComma="";
		/*var searchResult={list:[]};
		var totalusers=parseInt(sessionStorage.totalUsers);
		for(var i=1;i<=totalusers;i++){
			var fetchObj=JSON.parse(sessionStorage.getItem("uid" + i));
			var fetchEmail=fetchObj.email;
			if(fetchEmail.includes(searchPattern)){
				searchResult.list[searchResult.list.length]=fetchEmail;
			}	
		}
		sessionStorage.setItem('searchResult',JSON.stringify(searchResult));
		sessionStorage.setItem('beforeSearchResult','x5x5x5x');
		redirectToPage('searchResult.html');*/
		for(var i=1;i<currentTotalUsers;i++){
			var listItem=document.getElementById('show'+i).innerHTML;
			if(!(listItem.includes(searchPattern))){
				document.getElementById('show'+i).style.display='none';
				document.getElementById('show'+i).style.visibility='hidden';
			}else{
				document.getElementById('show'+i).style.display='block';
				document.getElementById('show'+i).style.visibility='visible';
			}
		}
	}	
}
function makeComment(){
	var userMail=document.getElementById("usercommentmail").value;
	var userComment=document.getElementById("usercomment").value;
	var total=parseInt(sessionStorage.totalUsers);
	var isUserFound=false;
	for(var i=1;i<=total;i++){
		var userObj=JSON.parse(sessionStorage.getItem("uid" + i));
		if(userObj.email==userMail){
			userObj.comment[userObj.comment.length]=userComment;
			isUserFound=true;
			sessionStorage.setItem("uid" + i,JSON.stringify(userObj));
			alert("Comment saved!");
			document.getElementById("usercommentmail").value="";
			document.getElementById("usercomment").value="";
			return false;
		}
	}
	alert("User does not exist!");
	return false;
}
var currentTotalUsers=1;
const TabColorNormal="#aabbcc";
const TabColorSelected="#3973ac";

function navigateHrTo(option,tabClicked){
	
	hideAllTab();	
    resetAllTabColor();
	setTabColor(tabClicked);
	showTab(option);
	updateDataList(option);
	if(option=="commentuser"){
		document.getElementById("commentprofile").style.visibility='hidden';
		document.getElementById("commentprofile").style.display='none';
		document.getElementById("usercommentmail").style.visibility='visible';
	}
	return false;
}

function updateDataList(option){
	if(option=="searchuser" || option=="commentuser"){
		var total=parseInt(sessionStorage.totalUsers);
		for(currentTotalUsers;currentTotalUsers<=total;currentTotalUsers++){
			var userObj=JSON.parse(sessionStorage.getItem("uid" + currentTotalUsers));
			var idL=parseInt(currentTotalUsers);	
			var newEmp=document.createElement("p");
			//newEmp.onclick=function(idL){ commentOn(idL);
			//			};
			newEmp.setAttribute('onclick','commentOn('+idL+')');
			newEmp.setAttribute('id','show' + idL);
			newEmp.appendChild(document.createTextNode(userObj.email));
			document.getElementById("userlist").appendChild(newEmp);
			//document.getElementById("userlist").appendChild(document.createElement("br"));
			newEmp.style.cursor="pointer";
			var newData=document.createElement("option");
			newData.setAttribute("value",userObj.email);
			document.getElementById("datalistComment").appendChild(newData);
		}	
	}
}
function commentOn(id){
	console.log("clicked : " + id);
	var selectedUser=JSON.parse(sessionStorage.getItem("uid" + id));
	document.getElementById("usercommentmail").value=selectedUser.email;
	hideAllTab();
	resetAllTabColor();
	setTabColor("navhrtocomment");
	document.getElementById("commentproflename").innerHTML=selectedUser.name;
	document.getElementById("commentproflemobile").innerHTML=selectedUser.mobile;
	document.getElementById("commentproflemail").innerHTML=selectedUser.email;
	document.getElementById("usercommentmail").style.visibility='hidden';
	showTab("commentuser");
	document.getElementById("commentprofile").style.visibility='visible';
	document.getElementById("commentprofile").style.display='block';
}
function hideAllTab(){
	var tabs=["hrblock","searchuser","commentuser"];
	for(var i=0;i<3;i++){
		document.getElementById(tabs[i]).style.display="none";
		document.getElementById(tabs[i]).style.visibility="hidden";
	}
}
function showTab(option){
	document.getElementById(option).style.display="block";
	document.getElementById(option).style.visibility="visible";
}
function resetAllTabColor(){
	document.getElementById("navhrtoadduser").style.background=TabColorNormal;
	document.getElementById("navhrtosearch").style.background=TabColorNormal;
	document.getElementById("navhrtocomment").style.background=TabColorNormal;	

}
function setTabColor(tabClicked){
	document.getElementById(tabClicked).style.background=TabColorSelected;
}
function redirectToPage(pageTitle){
	window.location=pageTitle;
	return false;
}
function userAlreadyExist(userMail,lastCount){
	for(var i=1;i<=lastCount;i++){
		var userOb=JSON.parse(sessionStorage.getItem("uid"+i));
		if(userOb.email==userMail){
			return true;
		}
	}
	return false;
}