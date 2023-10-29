class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isLucky(){
        return this.luck > Math.random()
    }
    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attaqué ' + pokemon.name + ' pour ' + damage + ' de dégâts! Il lui reste ' + pokemon.hp + ' points de vie.')
        } else {
            console.log(this.name  + ' a raté son attaque !')
        }
    }
}
let torterra = new Pokemon("Torterra", 200, 130, 130, 0.7)
let tortank = new Pokemon("Tortank", 160, 150, 120, 0.7)

while (tortank.hp > 0 && torterra.hp > 0) {

    torterra.attackPokemon(tortank)

    if (tortank.hp < 0){
        console.log("Tortank est mort")
        break
    }

    tortank.attackPokemon(torterra)

    if (torterra.hp < 0){
        console.log("Torterra est mort")
        break
    }
}