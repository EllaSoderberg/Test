var username="";

var openChat = function () {

  if (document.getElementById("chat").style.display=="") {
    document.getElementById("chat").style.display ="block";
  }
  else {
    document.getElementById("chat").style.display ="";


  }
};

var chatlogIn = function () {

  
  document.getElementById("usernameDisplayer").innerHTML=document.getElementById("setUsername").value;
  document.getElementById("hej").style.display ="none";
  document.getElementById("hideBeforeLogIn").style.display ="block";




};
var sendMessage = function () {


  var newMessage  = document.createElement('p');
 
  newMessage.innerHTML = document.getElementById("chatInput").value;
  document.getElementById("chatInput").value="";

  insert= document.getElementsByClassName("messages");
  insert[0].appendChild(newMessage);






}
