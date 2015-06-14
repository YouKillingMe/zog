if (!localStorage.sigall) {
	localStorage.sigall= 20;
}
function sigCounter() { 
  if (typeof(Storage) !== "undefined") {
       localStorage.sigall--;
        document.getElementById("result").innerHTML = "Осталось " + localStorage.sigall + " сиг";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}