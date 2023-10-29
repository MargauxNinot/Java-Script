let prenoms=[
    "Kevin",
    "Joseph",
    "Courtney",
    "Tyler",
    "Mintos",
]
let caracteristiques=[
    ["hacker", [0.3,0.6,0.1]],
    ["archer", [0.4,0.5,0.1]],
    ["epeiste", [0.3,0.5,0.2]],
    ["mage", [0.1,0.5,0.4]],
    ["gunner", [0.2,0.5,0.3]]
]
let index1=[0,1,2,3,4]
function randomName(array) { // renvoie un index alléatoire dans index1 et le supprime de index1
    let randomIndex = Math.floor(Math.random() * array.length)
    let ind = index1[randomIndex]
    index1.splice(randomIndex,1)
    return ind
}
let index2=[0,1,2,3,4]
function randomCara(array) { // renvoie un index alléatoire dans index2 et le supprime de index2
    let randomIndex = Math.floor(Math.random() * array.length)
    let ind = index2[randomIndex]
    index2.splice(randomIndex,1)
    return ind
}
class tueur{
    constructor(prenom="Michel", hp=100){
        this.prenom = prenom
        this.hp = hp
    }
}
class survivant{
    constructor(prenom = prenoms[randomName(index1)], caracteristique = caracteristiques[randomCara(index2)]){
        this.prenom = prenom
        this.caracteristique = caracteristique
    }
    tueur_atk(){ // renvoie les dégats infligés par le survivant
        let proba = Math.random()
        let somme = this.caracteristique[1][0]+this.caracteristique[1][2]
        // vérifie si la proba est supérieure à la somme 
        if (proba>=somme){ 
            return 10
        }
        if (this.caracteristique[1][0]>this.caracteristique[1][2]){
            // vérifie si la proba est entre la plus petite caractéristique et la somme
            if (proba>=this.caracteristique[1][2] && proba<=somme){
                return 0
            }
            // vérifie si la proba est plus petite que la plus petite caractéristique
            if (proba<=this.caracteristique[1][2]){
                return 15
            }
        }else{
            // vérifie si la proba est entre la plus petite caractéristique et la somme
            if (proba<=this.caracteristique[1][2] && proba<=somme){
                return 0
            }
            // vérifie si la proba est plus petite que la plus petite caractéristique
            if (proba>=this.caracteristique[1][2]){
                return 15
            }
        }
    }
}
let Michel = new tueur
var survivant1 = new survivant
var survivant2 = new survivant
var survivant3 = new survivant
var survivant4 = new survivant
var survivant5 = new survivant
let morts = []
let survivants = [survivant1,survivant2,survivant3,survivant4,survivant5,]

function tueur_atk(surv) {
    for(let i=0;i<morts.length;i++) { // vérifie si le joueur attaqué est déjà mort
        if (morts[i]==surv.prenom){
            return null
        }
    }
    //vérifie si le survivant est tué, ou esquive, ou meurt en combattant
    var atk = surv.tueur_atk()
    if (atk == 0){
        morts.push(surv.prenom)
        console.log(" Michel à tué "+surv.prenom)
        return null
    } if (atk == 10){
        Michel.hp -= 10
        console.log(surv.prenom+" à esquivé et inflige 10 dmg")
        return null
    } if (atk == 15){
        Michel.hp -= 15
        morts.push(surv.prenom)
        console.log(surv.prenom+" inflige 15 dmg mais est mort(e) au combat")
        return null
    }
}
function Michel_mort(){ // vérifie si quand Jason meurt tout le monde à survécu
    if(morts.length>0){
        console.log(" Michel is dead les survivants ont gagné mais "+ morts + " sont morts :c ")
    }
    else{
        console.log(" Michel is dead :c ")
    }
}
while (Michel.hp > 0 && morts.length != 5) { // boucle qui continue tant que Michel ou les surviants soient morts
    for (i=0; i<survivants.length;i++){
        tueur_atk(survivants[i])
        if (morts.length==5){
            console.log(" Les survivants ont perdu ")
            break
        }
        if (Michel.hp<=0){
            Michel_mort()
            break
        }
    }
}