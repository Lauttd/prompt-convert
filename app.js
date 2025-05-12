let eleccionUsuario;
let valorArs;
const valorusd = 1300;
historial = [];

function conversion(valorArs){
    return valorArs / valorusd;
}

do{
    eleccionUsuario = parseInt(prompt("Bienvenido! \n 1)Divisa (ARS --> USD) \n 2)Salir"));
    switch (eleccionUsuario){
        case 1: 
        valorArs = parseInt(prompt("ingrese la cantidad de pesos que desea cambiar a USD"));
        conversion(valorArs);
        alert("valor: " + conversion(valorArs).toFixed(2) + " USD");
        historial.push({
            tipo: "divisa:", 
            entrada: valorArs + "ARS",
            salida: conversion(valorArs) + "USD",
            fecha: new Date().toLocaleDateString(2)});
    }
}while (eleccionUsuario != 2){
    console.log(historial);
}

