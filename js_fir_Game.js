player_1name = localStorage.getItem("player1");
player_2name = localStorage.getItem("player2");

var playerscore1= 0;
var playerscore2= 0;

document.getElementById("player2").innerHTML=player_1name + ":";
document.getElementById("player2").innerHTML=player_2name + ":";

document.getElementById("name1").innerHTML=playerscore1;
document.getElementById("name2").innerHTML=playerscore2;

document.getElementById("Q").innerHTML="Question turn : " + player1;
document.getElementById("A").innerHTML="Answer turn : " + player2;

function oncccklgh() {
    nuber1 = document.getElementById("number1").value;
    nuber2 = document.getElementById("number2").value;

    question_number = "<h1 id='qln'>"+nuber1+ "X"+nuber2+"</h1>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Send</button>";
    row =  question_sword + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

}