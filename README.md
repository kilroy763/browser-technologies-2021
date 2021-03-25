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

### index pagina
Hier komt de gebruiker op binnen, hier krijgt de student een formulier te zien waar hij/zij zijn studentnummer en naam moet invoeren.
![Schets 1](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/schets1.jpg?raw=true)

### Overzichtspagina 
Hier ziet de student alle vakken van de minor, de student moet alle vakken langs om de enquete in te vullen. Tot slot kan hij op de submit knop drukken.
![Schets 2](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/schets2.jpg?raw=true)

### Detailpagina
Hier is de daadwerkelijke enquete te zien die de student moet invullen.
![Schets 3](https://github.com/kilroy763/browser-technologies-2021/blob/master/docs/img/schets3.jpg?raw=true)

### Use case, Enquete over de minor Web Development
> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

#### Vereisten voor de Enquete

- Studentgegevens (naam + nummer) verplicht
- Per vak 
	- naam
	- docent(en)
	- weken waarin je het vak deed
	- beoordeling op schaal 1-10 van
	- lesstof (hoe moeilijk is het)
	- uitleg (hoe duidelijk is het uitgelegd)
	- eigen inzicht (hoe goed snap je het)
	
- Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Core functionaliteit
De gebruiker moet een enquete kunnen invullen over de minor web development. Krijgt die hem niet af? Dan kan hij later verder gaan.

### Link demo:
https://btmaxmulder.herokuapp.com/

### Browsers die ik ga testen
* Safari
* Iphone Safari
* Google Chrome
* Android Chrome
* Firefox
* Android Firefox

### Twee enhancements
De twee enhancements die ik gekozen heb zijn de volgende. 
Form Validatie. Ik ga het inlog formulier voor de student via form validatie checken of die goed is ongevuld. Met HTML kan je hem invullen, sla je elementen over dan wordt door de required tag toch aangetoont dat het niet goed is. Met CSS krijg je te zien dat hij goed is door de groene balk eronder en met JS krijg je een popup als die niet goed is ingevuld.

Form in steps


#### Dag 1 (Woensdag 17-03)
De eerste dag heb ik in de ochtend wat schetsen gemaakt. Hierdoor had ik direct een idee met wat ik ging maken. Hierna heb ik een NodeJS / Express omgeving opgezet, basis HTML toegevoegd en gekeken naar de forms. Ik wilde namenlijk met de formulieren het zo maken dat de data wordt opgeslagen in een JSON bestand. Dit was alleen nog niet gelukt
