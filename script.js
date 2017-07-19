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
Scene3.choice1 = "������ � ������, \n ���� ����� ���������.";
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


document.getElementById("buttonL").onclick = function () {
  currentScene = currentScene.outcome1;
  changeScene();
};

document.getElementById("buttonR").onclick = function () {
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
