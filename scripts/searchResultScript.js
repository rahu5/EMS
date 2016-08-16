window.onload  =  function () {
	try{
	if(sessionStorage.beforeSearchResult != "x5x5x5x"){
		window.location='home.html';
		console.log("Direct access not allowed : ");
		return;
	}}catch(e){
		window.location='home.html';
		console.log("Direct access not allowed : ");
		return;
	}
	var result = sessionStorage.getItem('searchResultByComma');
	var emails = result.split(",");
	if(result==""){
		var pTag=document.createElement("p");
		var insideText=document.createTextNode("Sorry! No match found.");
		pTag.appendChild(insideText);
		document.getElementById('resultblock').appendChild(pTag);
		return;
	}
	for(var i=0;i<emails.length;i++){
		var pTag=document.createElement("p");
		var insideText=document.createTextNode(emails[i]);
		pTag.appendChild(insideText);
		var resultBlock = document.getElementById('resultblock');
		resultBlock.appendChild(pTag);
	}
}
function hrGoBack(){
	window.location='hrHome.html';
}