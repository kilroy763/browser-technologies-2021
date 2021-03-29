# Browser Technologies @cmda-minor-web 20-21
//Robuuste, toegankelijke websites ontwerpen en maken …

Één van de mooiste principes van het web is dat iedereen met een computer en een browser het web kan gebruik. Het web is voor iedereen. Het is geen gecontroleerde (programmeer) omgeving, je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in je browser ziet. Er zijn technische beperkingen, zoals afmetingen van de browser, grootte van het apparaat, manier van interactie, kwaliteit van de hardware, kwaliteit van het netwerk en er zijn mensen, allemaal verschillende mensen ...

In het vak Browser Technologies gaan we onderzoeken wat Progressive Enhancement is en hoe je dit kan toepassen om goede, robuuste, toegankelijke websites te maken. Voor iedereen. Het web is voor iedereen, in dit vak leer je hoe je daarvoor kan zorgen.


## Opdracht 1 🛹 NPM install Progressive- enhancement 
Op de Woensdag heb ik samen met mijn clubje, c1 (Jordy, Lars, Guus en ik) gekeken naar progressive enhancement. We hebben naar een goed metafoor om PE uit te leggen, hiervoor hebben wij het bouwen van een huis gebruikt. Hierna hebben we aan de hand van illustraties van een gebouwd huis PE uitgelegd.
De site is hier te zien: https://web-technologies.netlify.app/




## Opdracht 2 💔 Breek het Web
Op de donderdag ben ik aan de slag gegaan met het breken van het web. Ik heb 2 functies uitgekozen die ik zal onderzoeken en ga kijken wat er gebeurt als je de functies uit zet. De functies die ik gekozen heb zijn:

Het javascript volledig uitzetten
Muis/trackpad werkt niet Dit ga ik testen op de Formule 1 website. Ik wil hierdoor kijken of een groot bedrijf zoals Liberty Media (Formule 1) hun website wel goed in elkaar heeft zitten voor verschillende user cases. Dit is wel mijn verwachting in ieder geval.
De uitwerking hiervan is [hier](https://github.com/kilroy763/browser-technologies-2021/wiki/Opdracht-2-%F0%9F%92%94-Breek-het-Web)
 te zien

## De eindopdracht ✨ Progressive Enhanced Browser Technologie
Voor de eindopdracht heb ik gekozen om een enquete over de minor Web Development te maken. Hiervoor heb ik eerst wat schetsen gemaakt zodat ik een idee had voor wat ik ging bouwen, ook heb ik de functional/reliable, usable en pleasurable laag bepaald.

### Disclaminer
Mijn project kan best wat overeen komen met die van Rick Groot. Ik heb de server side code (wat mocht volgens de docenten) gekopieerd van Rick. Doordat het formulier gekoppeld is aan de server kant van de server is die erbij gekomen. Verders is de website volledig op eigen basis gemaakt, inclusief het design. Rick heeft mij verders wel nog geholpen met het toepassen van localstorage.  [Bekijk hier Rick zijn Repository](https://github.com/RickGroot/browser-technologies-2021)

### Link demo:
https://btmaxmulder.herokuapp.com/

### Wireflow
Ik heb een wireflow voor de pagina gemaakt zodat ik vooraf goed voor mij had wat ik ging bouwen. Hierdoor was ik ook niet onnodig veel tijd kwijt voor het ontwerp.  
#### index pagina
Hier komt de gebruiker op binnen, hier krijgt de student een formulier te zien waar hij/zij zijn studentnummer en naam moet invoeren.
![Schets 1](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/loginschets.jpg?raw=true)

#### Overzichtspagina 
Hier ziet de student alle vakken van de minor, de student moet alle vakken langs om de enquete in te vullen. Tot slot kan hij op de submit knop drukken.
![Schets 2](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/overviewschets.jpg?raw=true)

#### Detailpagina
Hier is de daadwerkelijke enquete te zien die de student moet invullen.
![Schets 3](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/enqueteschets.jpg?raw=true)

### Core functionaliteit
De gebruiker moet een enquete kunnen invullen over de minor web development. Krijgt die hem niet af? Dan kan hij later verder gaan.

### De vier lagen
Ik heb mijn app ook in de vier lagen opgebouwd, hier zal ik toelichten wat voor impact dat heeft op mijn enquete.
#### Functional/Reliable
De functional/reliable laag is de laag die alleen HTML bevat. De website ziet er niet mooi uit maar is functioneel. Je kan alle functies uitvoeren en zelfs zonder toetsenbord de website gebruiken. De eerste laag is toegankelijk en functioneel maar niet mooi.

#### Usable
De usable laag is iets mooier, nu krijgen alle HTML elementen styles. Het werkt exact hetzelfde als de functional laag alleen ziet het er iets beter uit. Ook in de formulier zijn wat handige functies toegepast die aantonen of je het formulier correct hebt ingevuld.

#### Pleasurable
De pleasurable laag bevat elementen die leuk zijn maar niet direct nodig. Zo heb ik form validatie toegevoegd die het formulier checkt of die goed is ingevuld, is die dat niet? Dan krijgt de gebruiker een popup. Ook heb ik de enquete in stappen opgedeeld. Zodra de gebruiker een radio button checked wordt de volgende vraag getoond. 

### Twee enhancements
De twee enhancements die ik gekozen heb zijn de volgende. 

#### Form Validatie. 
Ik ga het inlog formulier voor de student via form validatie checken of die goed is ongevuld. Met HTML kan je hem invullen, sla je elementen over dan wordt door de required tag toch aangetoont dat het niet goed is. Met CSS krijg je te zien dat hij goed is door de groene balk eronder en met JS krijg je een popup als die niet goed is ingevuld.

#### Form in steps
Het formulier heb ik ook ge enhancend. Ik heb het zo gemaakt dat hij in HTMl netjes in te vullen is, in CSS ook maar dan iets mooier eruit ziet en met JS wordt het in stapjes ingevuld. Met JS wordt er na elke ingevulde radio button een volgende vraag getoond.


### Browsers die ik ga testen
* Firefox
* Google Chrome
* Iphone Safari
* Android Chrome
* Android Firefox

##### Firefox
Firefox werkte vrijwel direct goed. Ik had alleen een probleem met de submit buttons. Doordat ik geen value had meegegeven stond er "submit query". Dit heb ik verholpen door een value toe te voegen. Verders viel mij op dat op FireFox de kleuren veel veller zijn en eigenlijk ook mooier.
![Kleur verschil](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/differenceChromeFirefox.png?raw=true)

#### Google Chrome
Google Chrome werkte perfect. Dit komt doordat ik hier in begonnen ben omdat dit mijn vaste browser is.

#### Iphone Safari
Op de Iphone werkte de website is eerste instantie niet perfect. Bij het overzichtspagina van de enquetes was geen margin tussen de blokken te zien. Bij nader inzien kwam dit doordat Gap niet ondersteunt wordt door Safari. Dit heb ik verholpen door de volgende code:
```
@supports (gap: 3em){ 
    .enquete > a > section{
        margin: 2em;
    }
};
```
Verders werkte het goed op de iphone. Mij viel op dat de knoppen zelf een disabled stijl toegepast krijgen zonder dat ik die heb gedefineerd in de CSS.

#### Android Chrome
Android Chrome werkte nagenoeg direct ook perfect. Ik denk dat dit komt doordat hij al op Google Chrome perfect werkte.

#### Android Firefox
Android Firefox had hetzelfde probleem als Iphone Safari met Gap. Dit had ik dus op dezelfde manier verholpen. Verders had FireFox hetzelfde probleem op de telefoon als op de website met de query. Dit was ook verholpen door middel van een value toe te voegen.
![Submit button](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/submit2.png?raw=true)

### Test verslag
Coming soon
