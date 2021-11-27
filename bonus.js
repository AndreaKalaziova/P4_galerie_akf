/*
Úkol:
=====
Tvoříš galerii obrázků. Seznam obrázků máš uložený v poli obrazky[].
Z celé galerie je vidět vždy jen jeden obrázek.
Na stránce jsou tlačítka "Předchozí" a "Další"- při stisknutí tlačítka
zobraz předchozí/následující obrázek (nahraď zdroj "src" obrázku
jménem nového obrázku).

Na stránce je také prvek <div id="pocitadlo", do kterého vždy vypiš,
název a pořadí obrázku, na kterém se nacházíš. Např. "ovce.jpg - 3 / 5".
Mysli na to, že člověk a JavaScript přemýšlí o "prvním" obrázku
každý trochu jinak :)


Bonusový úkol:
==============
Doplň logiku, která zajistí, že po poslední fotce následuje znovu
ta první a před první fotkou je znovu ta poslední. Tzn. galerii lze
procházet v kruhu "dokola".

Tlačítka předchozí/následující nahraď malým náhledem dalšího/
předcházejícího obrázku. Všechny tři obrázky (velký aktuální a malý
předchozí/následující se samozřejmě budou měnit adekvátně tomu, jak procházíš
galerií.
*/


let obrazky = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg'
];
let fotka = document.querySelector("#foto");
let popisek = document.querySelector("#pocitadlo");
let sipkaL = document.querySelector(".sipka__vlevo");
let sipkaP = document.querySelector(".sipka__vpravo");
let p = 0;

zobrazFoto();

sipkaP.addEventListener("click", fotoVpred)
sipkaL.addEventListener("click", fotoZpet)

function zobrazFoto() {
    fotka.src = "obrazky/" + obrazky[p];
    popisek.textContent = obrazky[p] + " - " + p + " / " + obrazky.length;
    nahled();
}

function fotoVpred() {
    p++;
    if (p == obrazky.length) {
        p = 0;
    }
    zobrazFoto();
}

function fotoZpet() {
    p--;
    if (p < 0) {
        p = 5;
    }
    zobrazFoto();
}

function nahled() {
    sipkaP.src = "obrazky/" + obrazky[p + 1];
    sipkaL.src = "obrazky/" + obrazky[p - 1];
    sipkaP.style.width = "150px"
    sipkaP.style.borderRadius = "0%"
    sipkaL.style.width = "150px"
    sipkaL.style.borderRadius = "0%"
    if (p == obrazky.length - 1) {
        sipkaP.src = "obrazky/" + obrazky[0];;
    }
    if (p == 0) {
        sipkaL.src = "obrazky/" + obrazky[obrazky.length - 1];
    }
}