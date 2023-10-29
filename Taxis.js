class Personnage{
    constructor(prenom, sante){
        this.prenom = prenom
        this.sante = sante
    }
}
musiques =[
    "Anissa - Wejdene",
    "Hatsune Miku - Aishite", 
    "Ichiko Aoba - Bouquet", 
    "Shigure Ui - Loli GOD requiem", 
    "Christophe - Aline"
]
class Trajet extends Personnage{
    constructor(radio, feux_rouges, changements){
        super(Personnage.sante)
        this.radio = radio
        this.feux_rouges = feux_rouges
        this.changements = changements
    }
    random_Index(array){
        let randomIndex = Math.floor(Math.random() * array.length)
        return randomIndex
    }
    trajet(personnage){
        while(this.feux_rouges != 0 && personnage.sante != 0){
            this.feux_rouges -= 1
            let musique = this.radio[this.random_Index(this.radio)]
            console.log(musique)
            console.log(this.feux_rouges)
            if (this.feux_rouges == 0){
                console.log("arrivé à destination avec " + this.changements + " changements")
                break
            } 
            if (musique == "Anissa - Wejdene"){
                personnage.sante -= 1
                if (personnage.sante == 0){
                    console.log("explose")
                    break
                } else {
                    this.changements += 1
                }
            }
        }
    }
}
let Kevin = new Personnage("Kevin", 10)
let trajet = new Trajet(musiques, 30, 0)
console.log(trajet.trajet(Kevin))