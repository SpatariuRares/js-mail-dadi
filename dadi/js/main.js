var numero_giocatore = Math.floor(Math.random() * 6) +1;
var numero_pc = Math.floor(Math.random() * 6) +1;

if (numero_giocatore>numero_pc){
    document.getElementById("message").innerHTML="hai fatto " + numero_giocatore +" il pc ha fatto " + numero_pc+" hai vinto"
}else if (numero_giocatore<numero_pc){
    document.getElementById("message").innerHTML="hai fatto " + numero_giocatore +" il pc ha fatto " + numero_pc+" hai perso"
}else{
    document.getElementById("message").innerHTML="hai fatto " + numero_giocatore +" il pc ha fatto " + numero_pc+" hai parregiato"
}