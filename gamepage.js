p1name=localStorage.getItem("player1name");
p2name=localStorage.getItem("player2name");
p1score=0;
p2score=0;
qturn="player1";
aturn="player2";
document.getElementById("p1name").innerHTML=p1name+":";
document.getElementById("p2name").innerHTML=p2name+":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("qturn").innerHTML="Question turn is: "+p1name;
document.getElementById("aturn").innerHTML="Answer turn is: "+p2name;

function sendq(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    document.getElementById("ques").innerHTML=number1+"X"+number2;
    question= "<h3>"+number1+"X"+number2+"</h3>"
    input_box = "<br>answer: <input type='text' id='inputbox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+input_box+check_button;
    document.getElementById("output").innerHTML=row ;
    answer=parseInt(number1)*parseInt(number2);
    console.log(answer);
    if(document.getElementById("inputbox").value==answer){
     

    }

}

