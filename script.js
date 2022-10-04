/*
const body = document.querySelector("body");


//console.log ("Hej");
//Lagra elementet i en variabel, 
//i detta fall heading, så vi har det och kan jobba med det.  
//med "document.create.." har vi skapat en h1:a, 
//inte hämtat. (Hämta gör vi med getElementById/Class)
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

*/
//skapat 3 användare i en constant som heter objPeople


const loggInKnapp = document.querySelector (".logIn")
const loggUtKnapp = document.querySelector (".logOut")
const rubrik = document.querySelector ("h1")
const fot = document.querySelector ("footer")
const paragraf = document.createElement ("p")
const loginForm = document.querySelector (".loginForm")



const users = [

    {
        username: "sara",
        password: "11111"
    },

    {
        username: "wilma",
        password: "22222"
    },

    {
        username: "sam",
        password: "33333"
    }

];
localStorage.setItem("myList", JSON.stringify(users));
const ListFromStorage = JSON.parse (localStorage.getItem)
localStorage.setItem("username", input.value);


//Skapar en funktion som heter getInfo()
//Funktionen hämtar den inmatade informationen från Id i html.
function getInfo () {
    const username = document.getElementById ("username").value
    const password = document.getElementById ("password").value

    for (i = 0; i < users.length; i++) {
        if (username == users [i].username && password == users [i].password){
            rubrik.innerHTML = "Välkommen " + username;
            loggInKnapp.style.display = "none";
            loggUtKnapp.style.display = "block";
            loginForm.style.display = "none";
            paragraf.style.display = "none";
            
        } else {
            paragraf.innerHTML = "Du har angett fel användarnamn eller lösenord";
            fot.appendChild(paragraf);
        }
    }

}

function leave () {

    const username = document.getElementById ("username").value
    rubrik.innerHTML = "Hej då " + username;
    loggInKnapp.style.display = "block";
    loggUtKnapp.style.display = "none";
    loginForm.style.display = "block";
    paragraf.style.display = "none";
}

console.log ()
