const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

//1

const[p1, p2] = pays;
console.log(p1, p2);

const [p11, ...reste] = pays;
console.log(p11, reste);

reste [0] = "tunisie";
console.log(reste);   //change japon par tunisie
console.log(pays);   //reste est une copie de pays, donc pays reste inchangé 

const p22= pays.map(p => p);
p22[0] = "Tunisie";
console.log(p22);
console.log(pays); 

//2

const personne = [{
    nom: "Ahmed",
    ville: "Bizerte",
    age: 33

}, {
    nom: "Samir",
    ville: "Tunis",
    age: 25
}, {
    nom: "Leila",
    ville: "Sousse",
    age: 28
}];

const {nom:identifiant} = personne[0];
console.log(identifiant);

const nom = personne.map(({nom}) => nom);
console.log(nom);

const nomage = personne.map(({nom,age}) => ({nom, age}));
console.log(nomage);