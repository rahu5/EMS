window.onload = function() {
					var current=sessionStorage.currentUser;
					console.log(current);
					document.getElementById('profilemail').innerHTML=current;
					document.getElementById('profilepass').innerHTML=sessionStorage.getItem(current);
					console.log(sessionStorage.getItem(current));
					//add comment
				}