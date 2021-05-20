// Crear un objeto llamado personaje de su anime o serie favorita
// *Agregar al menos 5 propiedades
// *Agregar al menos un objeto anidado
// *Sacar 3 propiedades del objeto por medio del método destructuring
// *Pintar en la página cada elemento del objeto a modo de indicador
// *Tomar captura del código, del resultado en la página y de la consola del navegador
// *Subir documento con extensión .pdf a la asignación en Moodle
const serie = {
    
    capitulos: "291" ,
    Razas: {
        R1:"Raza de Freezer",
        R2: "Namekianos",
        R3: "Majin" ,
        R4: "Saiyajins"
    },
    Poder: {
        Pw1: "120,000,00",
        Pw2: "35000",
        Pw3: "1,195,000,000,000",
        Pw4: "15,000 en base hasta 2,000,000,000,000"
    },
    extras: {
        extra1: "Los namekianos poseen las esferas del dragon",
        extra2: "Goku casi siempre salva a todos",
        extra3: "Goku y Vegeta crean a Vegito y Gogeta"
    }
}
// parte 1
document.querySelector("#capitulos").innerHTML = serie.capitulos;
document.querySelector("#Razas1").innerHTML = serie.Razas.R1;
document.querySelector("#Razas2").innerHTML = serie.Razas.R2;
document.querySelector("#Razas3").innerHTML = serie.Razas.R3;
document.querySelector("#Razas4").innerHTML = serie.Razas.R4;
// parte 2
document.querySelector("#Pw1").innerHTML = serie.Poder.Pw1;
document.querySelector("#Pw2").innerHTML = serie.Poder.Pw2;
document.querySelector("#Pw3").innerHTML = serie.Poder.Pw3;
document.querySelector("#Pw4").innerHTML = serie.Poder.Pw4;
// 
document.querySelector("#extra1").innerHTML = serie.extras.extra1;
document.querySelector("#extra2").innerHTML = serie.extras.extra2;
document.querySelector("#extra3").innerHTML = serie.extras.extra3;


// document.querySelector(".lap").innerHTML = datoslap;
