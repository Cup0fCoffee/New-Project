function Scene(){
  this.name = name;
  this.text;
  this.choice1;
  this.choice2;
  this.outcome1;
  this.outcome2;
}


Scene1 = new Scene("Óòðî.");
Scene1.text = "Óòðî. Çâîíîê îò íà÷àëüíèêà. Îí ïðîñèò íåìåäëåííî ïðèåõàòü íà ðàáîòó.";
Scene1.choice1 = "Âçÿòü òðóáêó.";
Scene1.choice2 = "Ïðîäîëæèòü ñïàòü.";

Scene2 = new Scene("Â ìàøèíå.");
Scene2.text = "Ëåíèâî ñîáèðàåøüñÿ è åäåøü. Ïî äîðîãå çâîíèò òåëåôîí.";
Scene2.choice1 = "Âçÿòü òðóáêó.";
Scene2.choice2 = "Ïåðåçâîíèòü â îôôèñå.";

Scene3 = new Scene("Îñòà¸øüñÿ äîìà.");
Scene3.text = "Ó òåáÿ âûõîäíîé, òû íå áåðåøü òðóáêó. Îñòàåøüñÿ äîìà.";
Scene3.choice1 = "Óçíàòü ó êîëëåã, \n ÷åãî õîòåë íà÷àëüíèê.";
Scene3.choice2 = "Íèêîìó íå çâîíèòü.";

Final1 = new Scene("Ñìåðòü.");
Final1.text = "Òû áåðåøü òðóáêó. Íå çàìå÷àåøü ÿìó íà äîðîãå è âûëåòàåøü íà âñòðå÷êó. Ñìåðòü.";

Final2 = new Scene("Ïîâûøåíèå");
Final2.text = "Òû íå áåðåøü òðóáêó. Äîåçæàåøü äî ðàáîòû. Íà÷àëüíèê ðåøèë ïîâûñèòü òåáÿ.";

Final3 = new Scene("Íè÷åãî íå ìåíÿåòñÿ.");
Final3.text = "Óçíàåøü ó êîëëåã, ÷òî õîòåë íà÷àëüíèê. Èäåøü íà ðàáîòó çà ïîâûøåíèåì, íî îí óæå ïåðåäóìàë.";

Final4 = new Scene("Ïîíèæåíèå.");
Final4.text = "Íèêîìó íå çâîíèøü. Âîçâðàùàåøüñÿ ÷åðåç íåäåëþ èç îòïóñêà è óçíàåøü, ÷òî ñêîðî òåáÿ ïîíèçÿò.";


Scene1.outcome1 = Scene2;
Scene1.outcome2 = Scene3;
Scene2.outcome1 = Final1;
Scene2.outcome2 = Final2;
Scene3.outcome1 = Final3;
Scene3.outcome2 = Final4;

/*var allScenes = [Scene1, Scene2, Scene3, Final1, Final2, Final3, Final4];*/

var currentScene;

document.getElementById("MainText").style.display = "none";
document.getElementById("buttonL").style.display = "none";
document.getElementById("buttonR").style.display = "none";


document.getElementById("newGame").onclick = function () {
  currentScene = Scene1;
  document.getElementById("Menu").style.display = "none";
  document.getElementById("MainText").style.display = "block";
  document.getElementById("buttonL").style.display = "initial";
  document.getElementById("buttonR").style.display = "initial";
  document.getElementById("MainText").innerHTML = currentScene.text;
  document.getElementById("buttonL").value = currentScene.choice1;
  document.getElementById("buttonR").value = currentScene.choice2;
};

document.getElementById("continueGame").onclick = function () {
  currentScene = readCookie("cookie");
  document.getElementById("Menu").style.display = "none";
  document.getElementById("MainText").style.display = "block";
  document.getElementById("buttonL").style.display = "initial";
  document.getElementById("buttonR").style.display = "initial";
  document.getElementById("MainText").innerHTML = currentScene.text;
  document.getElementById("buttonL").value = currentScene.choice1;
  document.getElementById("buttonR").value = currentScene.choice2;
}

document.getElementById("buttonL").onclick = function () {
  createCookie("testcookie", "kek", 1);
  alert(readCookie("testcookie"));
  currentScene = currentScene.outcome1;
  changeScene();
};

document.getElementById("buttonR").onclick = function () {
  createCookie("cookie", currentScene.outcome2, 1);
  currentScene = currentScene.outcome2;
  changeScene();
};

function changeScene() {
  document.getElementById("MainText").innerHTML = currentScene.text;
  if (currentScene.outcome1 == null){
    document.getElementById("buttonL").style.display = "none";
    document.getElementById("buttonR").style.display = "none";
    document.getElementById("returnToMenu").style.display = "initial";
  }
  else {
    document.getElementById("buttonL").value = currentScene.choice1;
    document.getElementById("buttonR").value = currentScene.choice2;
  };
};

document.getElementById("returnToMenu").style.display = "none";

document.getElementById("returnToMenu").onclick = function () {
  document.getElementById("MainText").style.display = "none";
  document.getElementById("buttonL").style.display = "none";
  document.getElementById("buttonR").style.display = "none";
  document.getElementById("returnToMenu").style.display = "none";
  document.getElementById("Menu").style.display = "block";
};

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/Users/Maxim/Desktop/New%20Project/basic%20html.html";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
