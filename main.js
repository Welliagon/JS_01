alert("Je fonctionne bien")

var texte = "Je fonctionne très bien"

let student = {
    names = 'Vi'
    favoriteFood = 'cupcake'
    city = 'Piltover'
}

let result = 0

let values = Object.values(student)
valeurs.foreach(function (values) {
    result += values.length
})
console.log(result)

if (result % 2 == 0) {
    console.log("pair")
} else {
    console.log("impair")
}

class Guerrier {
    constructor(attack, defense, hp) {
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }

    //obtenir la donnée
    getAttack() {
        console.log(this.attack);
    } 

    getDefense() {
        console.log(this.defense)
    }

    //modifier donnée
    setAttack() {
        this.attack = 50 
    }
}

let matthieu = new Guerrier(10, 10, 50)

matthieu.getAttack


class Mage {

}

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defnese = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        Math.ramdom > 0.5
    }

    attackPokemon(defenseur) {
        if (this.isLucky()) {
            let dmg = this.attack - defenseur.defense
            
            defenseur.hp -= dmg
            console.log("Il reste " + defenseur.hp + "a " + defenseur.name)
        } else {
            console.log("L'attack échoue")
        }
    }

}

let pikachu = new Pokemon("Pikachu", 50, 25, 120, 0.7)
let salameche = new Pokemon("Slameche", 45, 30, 140, 0.5)

while(pikachu.hp > 0 && salameche.hp > 0) {
    pikachu.attackPokemon
    if (salameche.hp <= 0) {
        console.log("Salamèche est K.O")
        break;
    }
    salameche.attackPokemon
    if (pikachu.hp <= 0) {
        console.log("Pikachu est K.O")
        break;
    }
}

// debug

let users = ["Stephanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach((user) => {
    if (countCharacter(user) > 5) {
        console.log("C'est un prénom long de plus de 5 lettres.")
    } else {
        console.log("Ce n'est pas un prénom long.")
    }
})