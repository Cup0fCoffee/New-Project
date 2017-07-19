function Scene(){
  this.name = name;
  this.text;
  this.choice1;
  this.choice2;
  this.outcome1;
  this.outcome2;
}


Scene1 = new Scene("Утро.");
Scene1.text = "Утро. Звонок от начальника. Он просит немедленно приехать на работу.";
Scene1.choice1 = "Взять трубку.";
Scene1.choice2 = "Продолжить спать.";

Scene2 = new Scene("В машине.");
Scene2.text = "Лениво собираешься и едешь. По дороге звонит телефон.";
Scene2.choice1 = "Взять трубку.";
Scene2.choice2 = "Перезвонить в оффисе.";

Scene3 = new Scene("Остаёшься дома.");
Scene3.text = "У тебя выходной, ты не берешь трубку. Остаешься дома.";
Scene3.choice1 = "Узнать у коллег, чего хотел начальник.";
Scene3.choice2 = "Никому не звонить.";

Final1 = new Scene("Смерть.");
Final1.text = "Ты берешь трубку. Не замечаешь яму на дороге и вылетаешь на встречку. Смерть.";

Final2 = new Scene("Повышение");
Final2.text = "Ты не берешь трубку. Доезжаешь до работы. Начальник решил повысить тебя.";

Final3 = new Scene("Ничего не меняется.");
Final3.text = "Узнаешь у коллег, что хотел начальник. Идешь на работу за повышением, но он уже передумал.";

Final4 = new Scene("Понижение.");
Final4.text = "Никому не звонишь. Возвращаешься через неделю из отпуска и узнаешь, что скоро тебя понизят.";


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
