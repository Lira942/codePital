    // DEBUT DES CLASS 
class Patients {
    constructor(nom, malades, argent, poche, etatSanté){
        this.nom = nom,
        this.malades = malades,
        this.argent = argent,
        this.poche = poche,
        this.etatSanté = etatSanté,
        
        this.goTo=()=>{

        }

        this.takeCare=()=>{

        }

        this.paye=(traitement)=>{
            this.argent -= Tarifs.prix;
        }

        
    }
}

class Doctor {
    constructor(nom, argent, cabinet){
        this.nom = nom,
        this.argent = argent,
        this.cabinet = cabinet,

        this.diagnostique=()=>{

        }
        this.patienIIn =(lieu, patient, salleAttente)=>{
            lieu.push(this.nom);
            console.log(`${this.nom} a fait rentré ${Patients.nom}`)
        }
        this.patientOut = patientOut
    }
}

let lira = new Doctor("Dr Lira",0,[]);

class Diagnostique{
    constructor(maldie, traitement){
        this.maldie = maldie,
        this.traitement = traitement
    }
}

class Tarifs{
    constructor(traitement, prix){
        this.traitement = traitement,
        this.prix = prix
    }
}

class Lieux{
    constructor(nom,patients){
        this.nom = nom,
        this.patients =  patients;
        
    }
}
// FIN DES CLASS

// let ctrl_maj_f = new diagnostique("ctrl+maj+f");
function Lechat(){
    console.log("Miau");
}


let pharmacie = new Lieux("Pharmacie",[]);
let cimetière = new Lieux("Cimetière",[]);
let salleAttente = new Lieux("Salle d'attente",[]);
let cabinet = new Lieux("Cabinet",[]);


// TARIFS
let ctrl_maj_f = new Tarifs("ctrl+maj+f", 60);
let saveOnFocusChange = new Tarifs("saveOnFocusChange", 100);
let CheckLinkRelation = new Tarifs("CheckLinkRelation", 35);
let Ventoline = new Tarifs("Ventoline", 40);
let f12_doc = new Tarifs("f12+doc", 20);

// PATIENTS Marcus
let marcus = new Patients("Marcus", "mal indenté", 50,"",);
let optimus = new Patients("Optimus","unsave","mal", 150);