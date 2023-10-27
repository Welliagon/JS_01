alert("Working")

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return this.luck > Math.random()
    }

    attackPokemon(defenseur) {
        if (this.isLucky()) {
            let dmg = this.attack - defenseur.defense
            
            defenseur.hp -= dmg
            console.log(this.name + " attaque et inflige " + dmg + " dégâts. Il reste " + defenseur.hp + " hp a " + defenseur.name)
        } else {
            console.log(this.name + " a raté son attaque")
        }
    }

}

let pikachu = new Pokemon("Pikachu", 50, 25, 120, 0.7)
let salameche = new Pokemon("Slameche", 40, 30, 140, 0.8)

while(pikachu.hp > 0 && salameche.hp > 0) {
    pikachu.attackPokemon(salameche)
    if (salameche.hp <= 0) {
        console.log("Salamèche est K.O")
        break;
    }
    salameche.attackPokemon(pikachu)
    if (pikachu.hp <= 0) {
        console.log("Pikachu est K.O")
        break;
    }
}
