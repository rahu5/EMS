window.onload  =  function () {
	try{
	if(sessionStorage.beforeSearchResult != "x5x5x5x"){
		redirectToPage('home.html');
		return;
	}}catch(e){
		redirectToPage('home.html');
		return;
	}
	var resultArray = JSON.parse(sessionStorage.getItem('searchResult'));
	if(resultArray.length){
		var pTag=document.createElement("p");
		var insideText=document.createTextNode("Sorry! No match found.");
		pTag.appendChild(insideText);
		document.getElementById('resultblock').appendChild(pTag);
		return;
	}
	var listSize=resultArray.list.length;
	for(var i=0;i<listSize;i++){
		var pTag=document.createElement("p");
		var insideText=document.createTextNode(resultArray.list[i]);
		pTag.appendChild(insideText);
		var resultBlock = document.getElementById('resultblock');
		resultBlock.appendChild(pTag);
	}
}
function hrGoBack(){
	redirectToPage('hrHome.html');
}
function redirectToPage(pageTitle){
	window.location=pageTitle;
}