alert("Working")


let passenger = {
    name: 'John',
    mentalHealth: 10,
}

let musics = ["Anissa - Wejdene", "The Passenger - Iggy pop", "Back in black - AC/DC", "99 Luftballoons - Nena", "When I grow up - Confetti"]

let trip = {
    radio : 1,
    redLights : 30,
    taxiChanges : 0,
}


while(trip['redLights'] > 0 && passenger['mentalHealth'] > 0) {

    //
    trip['redLights'] -= 1

    //Get a random music form the music list
    let numMusic = Math.floor(Math.random() * 5)  //Random number between 0 and 4 to choose the music
    
    console.log(musics[numMusic])
    
    if (musics[numMusic] == "Anissa - Wejdene") {
        //Mental health update
        passenger['mentalHealth'] -= 1
    
        //Taxi changes
        trip['taxiChanges'] += 1
    } 

}

if (trip['redLights'] <= 0) {
    console.log("John reached home with " + trip['taxiChanges'] + " taxi changes.")
} else {
    console.log("Explosion !")
}