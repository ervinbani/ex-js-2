var wordlist = ['ervin', 'fabio', 'alelaus', 'aleleita', 'davide', 'samuel', 'federico', 'loana', 'aleb'];
var p = 0;
var newword=nulla;
var casualword = wordlist[Math.floor(Math.random()*wordlist.length)];
alert(casualword);

alert("lunghezza della parola =");
alert(casualword.length);
function showcar(casualword){
   var casual = Math.floor( (Math.random() * casualword.length) );
   return casualword.charAt(casual);
}



while((newword != casualword))&&(p<7) {
  var newword=prompt("inserisci una parola ");
  if(newword==casualword){
    alert("hai vinto");
  }
  else if(newword != casualword){
    p=++;
    if((newword != casualword)&&(p==2||p==4||p==6)){
      showcar(casualword);
      alert("Inserisci un altra parola")
    }
    else{
      alert("hai perso");
    }

  }
}
