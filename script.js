const body = document.querySelector("body");


//console.log ("Hej");
/*Lagra elementet i en variabel, 
i detta fall heading, så vi har det och kan jobba med det.*/  
/*med "document.create.." har vi skapat en h1:a, 
inte hämtat. (Hämta gör vi med getElementById/Class)*/
const heading = document.createElement("h1");
//console.log (heading);
// consol.log skriver ut det nya elementet i konsollen via index.html. 
//Bara som en liten kontroll att det fungerar!
//Resultatet blir 2 taggar, <h1></h1>.


//För att stoppa in något innanför taggarna så skriver man såhär:
//InnerText ersätter texten som ev. står i taggen från början.
heading.innerText = "Hallå, jag är en heading *rubrik*!!!!!";
//Vi vill lägga denna texten i "body". 
//För att göra det, hämtar vi hem vårt body-element och lagrar det.
//Vi lägger den övers på sidan.

//Nu vill vi lägga våran skapade h1:a i våran body.
body.appendChild(heading)//lägg till ett barn till bodyn.


//Här gör vi samma sak som innan men utan massa komentarer runt. ;)
const paragraph = document.createElement("p");
paragraph.innerText = "Hej jag är en paragraf!!!!!";
body.appendChild(paragraph);
//Nu har vi skapat en h1-tagg och en p-tagg med hjälp av endast js.

//Nu ska vi göra en lista
const list = document.createElement("ul");
//Alltså på samma sätt som ovan.

