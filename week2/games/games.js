const myGames = [
    { title: 'Scythe,', type: 'board game.', numberOfPlayers: ' one to five people.' , rating: ' 5 stars! ' , shortDescription: 'In this game, players represent one of five factions trying to earn their fortunes and claim land in post–World War I Eastern Europe. ' },
    { title: 'Small World,', type: 'board game.', numberOfPlayers: ' two to five people.' , rating: ' 5 stars! ' , shortDescription: 'The game is a lot like Risk, but you are in Middle-earth. ' },
    { title: 'Wavelength,', type: 'board game.', numberOfPlayers: ' two to twelve people.' , rating: ' 5 stars! ' , shortDescription: 'In this communication game, interesting—or at least extremely funny—conversations about how your friends view the world - NYT Wirecutter. ' },
];

const response = window.prompt("I have 3 games in my collection. Pick a number between 0 and 2 and I'll tell you about that game" + myGames [Number]);
 
console.log("You selected " + myGames[response].title + " which is a " + myGames[response].type + " It can be played with " + myGames[response].numberOfPlayers + " " + myGames[response].shortDescription + "I give it" + myGames[response].rating);