alert("Working")

let serialkiller = {
    name : 'Jason',
    hp : 100
}

let names = ['Will', 'Alex', 'Bill', 'Ben', 'Axel.le', 'Charlie', 'River', 'Blue', 'Emilie', 'Kamille', 'Myka', 'Roxane']
let charact = ['Nerd', 'sportive', 'gay', 'british', 'bookworm', 'maths scientist', 'farmer', 'student', 'ecologist', 'dealer']
let killed = []
let survivors = []
let proba = []
let dead = 0

class Survivor {
    constructor(name, features, die, attack, attackDie) {
        this.name = name
        this.features = features
        this.die = die
        this.attack = attack
        this.attackDie = attackDie
    }

    getDetails(){
        console.log(this.name + " " + this.features)
    }
    
    attackKiller(killer, proba) {

        //console.log(proba)
        
        if (proba == this.die) {
            dead = 1
            console.log("Jason killed " + this.name + " " + this.features)
            killed.push(this.name + " " + this.features)
        }
        if (proba == this.attack) {
            console.log(this.name + " " + this.features + " dodged and inflicted 10 damages")
            killer['hp'] -= 10
            dead = 0
        }
        if (proba == this.attackDie) {
            dead = 1
            console.log(this.name + " " + this.features + " inflicted 15 damages and died")
            killed.push(this.name + " " + this.features)
            killer['hp'] -= 15
            
        }
    }
}

function alea(lst) {
    
    //console.log("alea used")
    let temp = Math.floor(Math.random() * lst.length)
    
    //console.log(lst[temp])
    return lst[temp]
}

function createSurvivor() {
    //console.log("create used")
    let nameAlea = alea(names) //Random name
    //console.log(nameAlea)
    let charactAlea = alea(charact) //Random feature
    //console.log(charactAlea)
    let probaDie = Math.random()
    //console.log(probaDie)
    let probaAttack = Math.random()
    //console.log(probaAttack)
    let probaAttackDie = Math.random()
    //console.log(probaAttackDie)

    /*if(survivors.length > 0) {
        for(i = 0 ; i < survivors.length ; i++) {
            if (survivors[i] == nameAlea + " " + charactAlea) {
                charactAlea = alea(charact)
                i = 0
            }
        }
    }*/
    
    //Avoid doubles
    while (probaAttack == probaDie){
        //document.write("<p>probaAttack == probaDie</p>")
        probaAttack = Math.random()
    }
    while (probaAttackDie == probaDie || probaAttackDie == probaAttack){
        //document.write("<p>probaAttackDie == probaDie</p>")
        probaAttackDie = Math.random()
    }
    proba.push(probaDie, probaAttack, probaAttackDie)
    //document.write("<p>proba = " + proba + "</p>")
    //proba.forEach((probas) => {
      //  console.log(probas)
    //})
   // proba.push(probaDie, probaAttack, probaAttackDie)
    let x = new Survivor(nameAlea, charactAlea, probaDie, probaAttack, probaAttackDie)
    survivors.push(x)
}

//Initialise survivors
for (k = 0 ; k < 5 ; k++) {
    //console.log("new survivor created")
    createSurvivor()
    /*survivors.forEach((survivor) => {
        console.log(survivor)
    })*/
}
/*proba.forEach((probas) => {
    console.log(probas)
})*/

console.log("Jason the serial killer, found new target tonight. Five inocent people just living their life peacefully.")
console.log("He traped them in a place with only one exit... The one they came in by... Before attacking them, he locked the heavy door...")
console.log("The figth was violent...")

while (serialkiller['hp'] > 0 && survivors.length > 0) {
    //document.write("<p>serialkillerhp = " + serialkiller['hp'] + "</p>")

    console.log("Jason has " + serialkiller['hp'] + " life points left")

    //Jason picks a new victim
    let number = null
    if (survivors.length > 1) {
        number = Math.floor(Math.random() * survivors.length)
        } else {
            number = 0
        }
    //console.log(number)
    let victime = survivors[number]
    //console.log(victime)

    //Fight
    let probab = [proba[number * 3], proba[(number * 3) + 1], proba[(number * 3) + 2]]
    /*probab.forEach((prob) => {
        console.log(prob)
    })*/

    victime.attackKiller(serialkiller, alea(probab))

    if (dead == 1) {
        //killed.push(victime)
        survivors.splice(survivors.indexOf(victime), 1)
        proba.splice(number * 3, 3)
    }
    /*console.log(survivors.length)
    survivors.forEach((survivor) => {
        console.log(survivor)
    })*/
    
}

if (serialkiller['hp'] <= 0) {
    console.log("Jason is dead ! ")
    if (survivors.length == 0) {
        console.log("But nobody survived... Let commemorate the brave heros who fought and delivered us from Jason. R.I.P :")
        for (i = 0 ; i < killed.length ; i++) {
            console.log(killed[i])
        }
    } else {
        console.log("Praise our heros who delivered us from !")
        survivors.forEach((survivor) => {
            survivor.getDetails
        })
        console.log("And commemorate their comrades who died fighting... R.I.P :")
        for (i = 0 ; i < killed.length ; i++) {
            console.log(killed[i])
        }
    }
} else {
    console.log("The news today are heartbreaking again... Jason's reign of terror did new victims this night... : ")
    for (i = 0 ; i < killed.length ; i++) {
        console.log(killed[i])
    }
    console.log("The police says they died fighting... May they rest in peace...")
}






