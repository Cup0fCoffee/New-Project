/* all the functions defined */
function showMenu () {
  document.getElementById("Menu").style.display = "block";
  document.getElementById("MainText").style.display = "none";
  document.getElementById("chooseButtons").style.display = "none";
  document.getElementById("returnToMenu").style.display = "none";
  document.getElementById("return").style.display = "none";
};

function showGameZone () {
  document.getElementById("Menu").style.display = "none";
  document.getElementById("MainText").style.display = "block";
  document.getElementById("chooseButtons").style.display = "block";
};

function hideChooseButtons () {
  document.getElementById("chooseButtons").style.display = "none";
};

function changeScene() {
  document.getElementById("MainText").innerHTML = currentScene.text;
  document.getElementById("return").style.display = "initial";
  if (currentScene.outcome1 == null){
    document.getElementById("chooseButtons").style.display = "none";
    document.getElementById("return").style.display = "none";
    document.getElementById("returnToMenu").style.display = "initial";
  }
  else {
    document.getElementById("buttonL").value = currentScene.choice1;
    document.getElementById("buttonR").value = currentScene.choice2;
  };
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

function Scene(name){
  this.name = name;
  this.text;
  this.choice1;
  this.choice2;
  this.outcome1;
  this.outcome2;
};


/* all the buttons defined */
document.getElementById("continueGame").onclick = function () {
  for (i = 0; i < allScenes.length; i++){
    if (allScenes[i].name == readCookie("gameProgress")){
      currentScene = allScenes[i];
      break;
    } else {
      currentScene = Scene1;
    };
  };
  showGameZone();
  changeScene();
};

document.getElementById("newGame").onclick = function () {
  currentScene = Scene1;
  showGameZone();
  changeScene();
};

document.getElementById("buttonL").onclick = function () {
  currentScene = currentScene.outcome1;
  createCookie("gameProgress", currentScene.name, 1)
  changeScene();
};

document.getElementById("buttonR").onclick = function () {
  currentScene = currentScene.outcome2;
  createCookie("gameProgress", currentScene.name, 1)
  changeScene();
};

document.getElementById("returnToMenu").onclick = function () {
  showMenu();
  eraseCookie("gameProgress");
};

document.getElementById("return").onclick = function () {
  showMenu();
};


/* all the variables defined */
Scene1 = new Scene("Scene1");
Scene1.text = "Утро. Звонок от начальника. Он просит немедленно приехать на работу.";
Scene1.choice1 = "Взять трубку.";
Scene1.choice2 = "Продолжить спать.";

Scene2 = new Scene("Scene2");
Scene2.text = "Лениво собираешься и едешь. По дороге звонит телефон.";
Scene2.choice1 = "Взять трубку.";
Scene2.choice2 = "Перезвонить в оффисе.";

Scene3 = new Scene("Scene3");
Scene3.text = "У тебя выходной, ты не берешь трубку. Остаешься дома.";
Scene3.choice1 = "Узнать у коллег, \n чего хотел начальник.";
Scene3.choice2 = "Никому не звонить.";

Final1 = new Scene("Final1");
Final1.text = "Ты берешь трубку. Не замечаешь яму на дороге и вылетаешь на встречку. Смерть.";

Final2 = new Scene("Final2");
Final2.text = "Ты не берешь трубку. Доезжаешь до работы. Начальник решил повысить тебя.";

Final3 = new Scene("Final3");
Final3.text = "Узнаешь у коллег, что хотел начальник. Идешь на работу за повышением, но он уже передумал.";

Final4 = new Scene("Final4");
Final4.text = "Никому не звонишь. Возвращаешься через неделю из отпуска и узнаешь, что скоро тебя понизят.";


Scene1.outcome1 = Scene2;
Scene1.outcome2 = Scene3;
Scene2.outcome1 = Final1;
Scene2.outcome2 = Final2;
Scene3.outcome1 = Final3;
Scene3.outcome2 = Final4;

var allScenes = [Scene1, Scene2, Scene3, Final1, Final2, Final3, Final4];

var currentScene;

/* start */
showMenu();
