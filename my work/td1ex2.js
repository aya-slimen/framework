const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];

//1
const resConf = reservations.filter(res => 
    res.statut == "Confirmée");
console.log(resConf);

//2
const resClients = reservations.map(res =>
    res.client);
console.log(resClients);

//3
const resNum = reservations.find(res =>
    res.numero === 103);
console.log(resNum);

//4
const resMontantTotal = resConf.reduce((total, res) =>
    total + res.montant, 0);
console.log(resMontantTotal);

//5
const toutesResConf = reservations.every(res =>
    res.statut === "Confirmée");
console.log(toutesResConf);

//6
const resClVoy = reservations.map(res => ({
    client: res.client,
    voyage: res.destination}));
console.log(resClVoy);