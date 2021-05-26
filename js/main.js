import {Patients, Doctor, Diagnostique, Tarifs, Lieux} from'./classe.js';

// LIEUX
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
let optimus = new Patients("Optimus","unsave", 150);
let sonGoku = new Patients("Son Goku,", "404");
let patient4 = new Patients("Patient4");
let patient5 = new Patients("Patient5");

let lira = new Doctor("Dr Lira",0,[]);

salleAttente.push(marcus.nom, optimus.nom, sonGoku.nom, patient4.nom, patient5.nom);
marcus.goTo();
console.log(`dans la salle d'attente il y a ${salleAttente.indexOf()} persones`);


lira.patienIn(lira.cabinet, salleAttente);
console.log(lira.cabinet);
console.log(salleAttente);
lira.patientOut(lira.cabinet,);
console.log(lira.cabinet);
lira.diagnostique(0);
lira.diagnostique(3);
