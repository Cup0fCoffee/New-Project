function Scene(){
  this.name = name;
  this.text;
  this.choice1;
  this.choice2;
  this.outcome1;
  this.outcome2;
}


Scene1 = new Scene("����.");
Scene1.text = "����. ������ �� ����������. �� ������ ���������� �������� �� ������.";
Scene1.choice1 = "����� ������.";
Scene1.choice2 = "���������� �����.";

Scene2 = new Scene("� ������.");
Scene2.text = "������ ����������� � �����. �� ������ ������ �������.";
Scene2.choice1 = "����� ������.";
Scene2.choice2 = "����������� � ������.";

Scene3 = new Scene("�������� ����.");
Scene3.text = "� ���� ��������, �� �� ������ ������. ��������� ����.";
Scene3.choice1 = "������ � ������, ���� ����� ���������.";
Scene3.choice2 = "������ �� �������.";

Final1 = new Scene("������.");
Final1.text = "�� ������ ������. �� ��������� ��� �� ������ � ��������� �� ��������. ������.";

Final2 = new Scene("���������");
Final2.text = "�� �� ������ ������. ��������� �� ������. ��������� ����� �������� ����.";

Final3 = new Scene("������ �� ��������.");
Final3.text = "������� � ������, ��� ����� ���������. ����� �� ������ �� ����������, �� �� ��� ���������.";

Final4 = new Scene("���������.");
Final4.text = "������ �� �������. ������������� ����� ������ �� ������� � �������, ��� ����� ���� �������.";


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
