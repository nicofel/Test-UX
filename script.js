var text = document.getElementsByClassName("hello")[0]; /* kallar på min klass som heter hello */
var myText = "Hej klassen!"; /* en text string med klassen myText som är Hej Klassen */
var myName = "Hi, I'm Nicolina Feldt"; /* en text string med klassen myName som är Hi I'm Nicolina Feldt */

function changeTheText() { /* Byt text om */ 
    if (text.innerHTML == myText) { /* Om texten är Hej klassen så byter den till Hi im nicolina feldt */
    text.innerHTML = myName; 
    } else {
    text.innerHTML = myText; /* Om det står Hi im nicolina så byter den till hej klassen */
        }
    }

    text.addEventListener("click", changeTheText); /* När jag clickar på mitt namn så byter den fram och tillbaka */

/* Switchen går igenom alla expressions en gång. Jämför GetDay (0-6 där 0 är söndag och 6 är lördag) med alla cases om den hittar en match så kör den det caset. Använder lokal tid */

    let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Have a nice " + day + "! 😀"; /* Skriver ut Today is och dagen som matchar caset */