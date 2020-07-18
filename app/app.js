var datiP = document.getElementById("nomeCognome").value;
// inserire valori al tasto genera
// var pas = document.getElementById("nomePasseggero").innerHTML = datiP;
// console.log(pas);

var datiKm = document.getElementById("km").value;
// inserire valori al tasto genera
// var kmPercorsi = document.getElementById("richiestaKm").innerHTML = datiKm;
// console.log(kmPercorsi);

// var eta = document.getElementById("fascia").value;
// var prezzo = datiKm * 0.21;
// console.log(prezzo);
// if (eta == "maggiorenne") {
//     document.getElementById('offerta').innerHTML = "Offerta Standard";
//
// } else if (eta == "minorenne"){
// document.getElementById('offerta').innerHTML = "Offerta Junior";
// var prezzo = prezzo * 0.4;
// } else if (eta == "over65") {
//     document.getElementById('offerta').innerHTML = "Offerta Over65";
// var prezzo = prezzo * 0.6;
// }
//
// document.getElementById("costoBiglietto").innerHTML = "€" + " " + prezzo;
// inserire valori al tasto genera
// var fasciaE = document.getElementById("fasciaEta").innerHTML = eta;
// console.log(kmPercorsi);






// *******FUNZIONI*********

document.getElementById("aggiungi").addEventListener("click", function(){
    var comp = document.getElementById("out");
    comp.className = "show";
    var pas = document.getElementById("nomePasseggero").innerHTML = datiP;
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("carrozza").innerHTML = x;
    var y = Math.floor((Math.random(300) * 99999) + 1);
    document.getElementById("codiceCp").innerHTML = y;
    var eta = document.getElementById("fascia").value;
    var prezzo = datiKm * 0.21;
    console.log(prezzo);
    if (eta == "maggiorenne") {
    document.getElementById('offerta').innerHTML = "Offerta Standard";

    } else if (eta == "minorenne"){
    document.getElementById('offerta').innerHTML = "Offerta Junior";
    var prezzo = prezzo * 0.4;
    } else if (eta == "over65") {
    document.getElementById('offerta').innerHTML = "Offerta Over65";
    var prezzo = prezzo * 0.6;
    }

    document.getElementById("costoBiglietto").innerHTML = "€" + " " + prezzo.toFixed(2);
    // var kmPercorsi = document.getElementById("richiestaKm").innerHTML = datiKm;
    // var fasciaE = document.getElementById("fasciaEta").innerHTML = eta;

})


document.getElementById("rimuovi").addEventListener("click", function(){
    var comp = document.getElementById("out");
    comp.className = "hidden";


})
