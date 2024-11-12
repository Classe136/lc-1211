"use strict";
console.clear();
const animals = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
];

const persona = {
  nome: "Gianfranco",
  surname: "Rossi",
  peso: 80,
  altezza: 1.8,
  indirizzo: {
    via: "blabla",
    civico: 34,
    citta: "Palermo",
  },
  coloriPreferiti: ["red", "blue"],
  printFullName: function () {
    console.log(this.nome + " " + this.surname);
  },
};

//console.log(persona.printFullName());

const persona2 = {
  nome: "Eleonora",
  surname: "Cappellesso",
  peso: 50,
  altezza: 1.7,
  indirizzo: {
    via: "blabla",
    civico: 34,
    citta: "Treviso",
  },
  coloriPreferiti: ["pink", "green"],
  printFullName: function () {
    console.log(this);
    const pluto = () => {
      console.log(this);
    };
    pluto();
    console.log(this.nome + " " + this.surname);
  },
};
//console.log(persona.printFullName());
//console.log(persona2.printFullName());

//console.log(persona.altezza);

persona.peso = 60;
// persona["peso"] = 70;
// persona["peso-forma"];

// console.log(persona);

// const key = "peso";

// console.log(persona[key]);

// for (let key in persona) {
//   console.log("key =", prop, "valore=", persona[key]);
// }

// console.log(persona.indirizzo);
// console.log(persona.coloriPreferiti[0]);

const persone = [
  {
    nome: "Gianfranco",
    peso: 80,
    altezza: 1.8,
    indirizzo: {
      via: "blabla",
      civico: 34,
      citta: "Palermo",
    },
    coloriPreferiti: ["red", "blue"],
  },
  {
    nome: "Eleonora",
    peso: 50,
    altezza: 1.7,
    indirizzo: {
      via: "blabla",
      civico: 34,
      citta: "Treviso",
    },
    coloriPreferiti: ["pink", "green"],
  },
];

// console.log(persone[1].coloriPreferiti[1]);

// const pippo = () => {
//   console.log(this);
// };

// pippo();

/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.


**Snack2**
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

**Snack 3 (Bonus)**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
>


*/

const biciclette = [
  {
    nome: "Focus",
    peso: 20,
  },
  {
    nome: "Eleglide",
    peso: 21,
  },
  {
    nome: "Graziella",
    peso: 18,
  },
  {
    nome: "Bmx",
    peso: 22,
  },
];

let biciLeggera = biciclette[0];
for (let i = 0; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}
console.log(biciLeggera);

const main = document.querySelector("main");

const template = `
<div className="card">
<h4 class="card-title">${biciLeggera.nome}</h4>
<div>Il peso della bici è: ${biciLeggera.peso}</div>
</div>
`;
main.innerHTML += template;
