const body 


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
heading.innerText = "Hallå, jag är en h1:a!!!!!"
//Vi vill lägga denna texten i "body" 