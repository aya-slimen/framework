const dble=(a)=>a*2;
console.log(dble(2))
const calcul=(prix,taux)=>prix*taux;
const calcul2=(prix)=>{
    if (prix>100)
        return 0.1*prix
    else 
        return 0.05*prix;
}
const calcul3=(prix)=> prix > 100 ? 0.1*prix : 0.05*prix;
console.log(calcul(100,0.2))
console.log(calcul2(100))
console.log(calcul3(100))