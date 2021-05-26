class Patients {
    constructor(nom, malades, argent, poche, etatSanté){
        this.nom = nom,
        this.malades = malades,
        this.argent = argent,
        this.poche = poche,
        this.etatSanté = etatSanté,
        
        this.goTo=(patient)=>{
            cabinet.push(this.nom)
            salleAttente.splice(0,1);
            console.log(`${this.nom} est entré au cabinet`)
        }

        this.takeCare=()=>{

        }

        this.paye=(traitement)=>{
            console.log(this.argent -= Tarifs.prix);
            
        }

        
    }
}

class Doctor {
    constructor(nom, argent, cabinet){
        this.nom = nom,
        this.argent = argent,
        this.cabinet = cabinet,
        
        this.diagnostique=(index)=>{
            let indexFinal = index;
            parseInt(indexFinal,10);
            console.log(`Le traitement de monsieur est ${this.tabTraitement[indexFinal]}`);
        }

        this.patienIn =(lieu, patient, salleAttente)=>{
            lieu.push(this.nom);
            console.log(`${this.nom} a fait rentré ${Patients.nom} dans son cabinet`);
            salleAttente.perssonne.splice(salleAttente.perssonne.indexOf(patient),1);
        }
        this.patientOut =(lieu, patient)=>{
            lieu.splice(0,1);
            console.log(`${this.nom} a fait rentré ${patient.nom} dans son cabinet`);
        }

        let tabTraitement = ["ctrl+maj+f", "saveOnFocusChange", "CheckLinkRelation", "Ventoline", "f12+doc" ];
        
        let tabMaladie = ["mal indente", "unsave", "404", "azmatique", "syntaxeError"];

        
    }
}


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

export {Patients, Doctor, Diagnostique, Tarifs, Lieux};
