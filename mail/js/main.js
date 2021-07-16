var emails = ["spatariurares@gmail.com","sararares12@gmail.com"];
var user_email = prompt("insert a emails");
for (var i = 0; i < emails.length && user_email!=emails[i];i++) {}
if(i!=emails.length){
    document.getElementById("message").innerHTML="entra";
}
else{
    document.getElementById("message").innerHTML="via da qui";
}
