document.getElementById("myButton").onclick = whoWin;
function whoWin(){
  var player1Score =Math.floor(Math.random()*6+1);
  var player2Score =Math.floor(Math.random()*6+1);
  var randomImg1 ="dice"+player1Score+ ".png";
  var randomImg1Src = "images/"+randomImg1;

  document.getElementsByTagName("img")[0].setAttribute("src",randomImg1Src);

  var randomImg2 ="dice"+player2Score+ ".png";
  var randomImg2Src = "images/"+randomImg2;

  document.getElementsByTagName("img")[1].setAttribute("src",randomImg2Src);


  if (player1Score>player2Score){
    document.getElementsByTagName("h1")[0].innerHTML =" 🚩Player 1 is winner";
  }
  else if(player1Score<player2Score){
    document.getElementsByTagName("h1")[0].innerHTML ="Player 2 is winner 🚩";
  }
  else{
    document.getElementsByTagName("h1")[0].innerHTML ="Draw";
  }
}
