var player1name = localStorage.getItem("player1");
var player2name = localStorage.getItem("player2");
var answer = 0
var number1 = 0
var number2 = 0
var operation = "*"

document.getElementById("player1name").innerHTML= player1name;
document.getElementById("player2name").innerHTML= player2name;

var player1score = 0
var player2score = 0

document.getElementById("score1").innerHTML= player1score;
document.getElementById("score2").innerHTML= player2score;

document.getElementById("questionturn").innerHTML= "Quizzer -" + player1name;
document.getElementById("answerturn").innerHTML= "Answer Turn -" + player2name;

var questionturn = player1name;
var answerturn = player2name;

if(questionturn == player1name){
    document.getElementById("note").innerHTML= player1name + ": Try typing in two NUMBERS in the first and last text boxes, then an operation in the middle and quiz " + player2name + "." ;
} else{
    document.getElementById("note").innerHTML= player2name + ": Try typing in two NUMBERS in the first and last text boxes, then an operation in the middle and quiz " + player1name + "." ;
}


function Send(){

    number1 = document.getElementById("number1").value;
    number1 = Number(number1)
    number2 = document.getElementById("number2").value;
    number2 = Number(number2)
    operation = document.getElementById("oporation").value;
switch(operation)
{
    case "*":
        answer = number1 * number2;
        break;
        case "+":
            answer = number1 + number2;
            break;
        case "-":
            answer = number1 - number2;
            break;
        case "/":
            if(number2 != 0) {
                answer = number1 / number2;
            } else{
                document.getElementById("output").innerHTML= "<h4>Oops... Error. Can not divide by 0. Point goes to "+answerturn+"</h4>"
            }
            
            break;                    
    default: 
    answer = 0
}
   

    var question = "<h4>"+number1+" * "+number2+" = ?</h4> <br>"
    var input = "<input type'text' id='guess'></input> <br> <br>"
    var btn = "<button class='btn btn-success' onclick='Check()'>Check</button> <br>"

    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("oporation").value = ""
    document.getElementById("output").innerHTML= question+input+btn;
    console.log(answer);
}

function Check(){
    var userinput = document.getElementById("guess").value;

    if(answer == userinput){
        if(answerturn == player1name){
            player1score = player1score + 1
            document.getElementById("score1").innerHTML= player1score;
        }
        if(answerturn == player2name){
            player2score = player2score + 1
            document.getElementById("score2").innerHTML= player2score;
        }

        document.getElementById("output").innerHTML= "<img id='correctimg' style='width: 100px; height: 100px;' src='https://static8.depositphotos.com/1170566/960/i/950/depositphotos_9604781-stock-photo-correct-stamp.jpg'>";

        if(questionturn == player1name){
            questionturn = player2name
        } else {
            questionturn = player1name
        }
            //setTimeout(Disapear(), 10000);
    }
}

    // function Disapear() {
    //     var fadeTarget = document.getElementById("correctimg");
    //     var fadeEffect = setInterval(function () {
    //         if (!fadeTarget.style.opacity) {
    //             fadeTarget.style.opacity = 1;
    //         }
    //         if (fadeTarget.style.opacity > 0) {
    //             fadeTarget.style.opacity -= 0.05;
    //         } else {
    //             clearInterval(fadeEffect);
    //         }
    //     }, 200);

    //     document.getElementById("output").value = " ";
    // }