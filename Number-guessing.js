//x è il numero che random assegna e l'utente deve trovare!
var randomNumber = Math.floor((Math.random() * 100)+1);
console.log(randomNumber);
var input=0 ;


while ( input != randomNumber) {


  input = prompt("inserisci un numero!!");
  console.log(input);

  if ((input < 0)||(input > 100)) {
    alert("Attenzione, Numero sbagliato, devi sceglerie un num fra 0 e 100");

  }

   else if( input < randomNumber) {
  alert("Devi inserire un numero più grande ");


  }
  else if(input > randomNumber) {
    alert("Devi inserire un numero più piccolo");


}
}
document.write("Complimenti numero =" + input);
