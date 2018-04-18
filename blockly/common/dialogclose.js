window.onload = function(){
		
	setTimeout(function(){
	var dialog = document.querySelector("#dialog") ;
        var dialogShadow = document.querySelector("#dialogShadow") ;
	/*var container = document.createElement("div");
	//container.style.position = "relative" ;
	dialog.parentNode.insertBefore(container, dialog);
	container.append(dialog)
	var buttonclose = document.createElement("div");
	buttonclose.innerHTML = "<img src=\"../media/delete.png\"/>"
	buttonclose.style.width = "10px";
	buttonclose.style.height = "10px";
	buttonclose.style.position = "absolute";
	buttonclose.style.marginRight = "-10px";
	buttonclose.style.marginTop = "-10px";
	buttonclose.click = function(){
		dialog.style.visibility = hidden ;
		dialog.html="" ;
	}
	container.appendChild(buttonclose) ;
	*/

	dialog.addEventListener("click", function(){
		dialog.style.visibility = "hidden" ;                
		dialog.html="" ;
                dialogShadow.style.visibility = "hidden" ;                
		dialogShadow.html="" ;		
	}) ;
	document.onkeydown = function(evt) {
	        evt = evt || window.event;
		if( evt.keyCode != 27 )
			return true ;
		dialog.style.visibility = "hidden" ;                
		dialog.html="" ;
                dialogShadow.style.visibility = "hidden" ;                
		dialogShadow.html="" ;		
	} ;        


	},1000) ;
}
