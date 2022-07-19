num1= "";
num2= "";
answer= "";
question= "";
player1score= 0;
player2score= 0;
player1name= localStorage.getItem("Player 1 name");
player2name= localStorage.getItem("Player 2 name");
document.getElementById("p1name").innerHTML= player1name + ":";
document.getElementById("p2name").innerHTML= player2name + ":";
document.getElementById("questionp").innerHTML= "Question Turn- " + player1name;
document.getElementById("answerp").innerHTML= "Answer Turn- " + player2name;
questionturn= player1name;
answerturn= player2name;

function send() {
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;
    answer= parseInt(num1) * parseInt(num2);
    console.log(answer);
    question= document.getElementById("question").innerHTML= "Question: " + num1 + " x " + num2 + "=";
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
}

function check() {
    playeranswer= document.getElementById("answer").value;
    if(playeranswer == answer) {
        if(answerturn == "Player 1 name") {
            player1score= player1score + 10;
            document.getElementById("p1score").innerHTML= player1score;
        }
        else {
            player2score= player2score + 10;
            document.getElementById("p2score").innerHTML= player2score;
        }
    }
    if(questionturn == "Player 1 name") {
        questionturn= "Player 2 name";
        document.getElementById("questionp").innerHTML= "Question Turn- " + player2name;
    }
    else {
        questionturn= "Player 1 name";
        document.getElementById("questionp").innerHTML= "Question Turn- " + player1name;
    }
    if(questionturn == "Player 1 name") {
        answerturn= "Player 2 name";
        document.getElementById("answerp").innerHTML= "Answer Turn- " + player2name;
    }
    else {
        answerturn= "Player 1 name";
        document.getElementById("answerp").innerHTML= "Answer Turn- " + player1name;
    }
}