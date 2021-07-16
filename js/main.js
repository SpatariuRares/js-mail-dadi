var emails = ["spatariurares@gmail.com","sararares12@gmail.com"];
var user_email = prompt("insert a emails");
var flag =0;
for (var i = 0; i < emails.length;i++) {
    if(user_email==emails[i]){
        flag =1;
    }
}
if(flag==1){
    console.log("entra")
}
else{
    console.log("via da qui");
}
