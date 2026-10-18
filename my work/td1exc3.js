//pt A

const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

//1
const [p1, p2] = pays;
console.log(p1,p2);

//2
const[, ,p3] = pays;
console.log(p3);

//3
const [destinationPrincipale, ...autrePays] = pays;
console.log(destinationPrincipale, autrePays);

//pt B

const voyage = {
destination: "Bali",
prix: 1800,
duree: 10,
transport: "Avion",
hotel: "5 étoiles"
};

//1
const { destination, prix } = voyage;
console.log(destination, prix); 

//2
const { destination: ville } = voyage;
console.log(ville); 
