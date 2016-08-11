window.onload  =  function () {
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