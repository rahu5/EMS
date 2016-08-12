window.onload  =  function () {
	try{
	if(sessionStorage.beforeSearchResult != "x5x5x5x"){
		window.location='home.html';
		console.log("Direct access not allowed : " + document.referrer);
		return;
	}}catch(e){
		window.location='home.html';
		console.log("Direct access not allowed : " + document.referrer);
		return;
	}
	var result = sessionStorage.getItem('searchResultByComma');
	var emails = result.split(",");
	for(var i=0;i<emails.length;i++){
		var pTag=document.createElement("p");
		var insideText=document.createTextNode(emails[i]);
		pTag.appendChild(insideText);
		var resultBlock = document.getElementById('resultblock');
		resultBlock.appendChild(pTag);
	}
}