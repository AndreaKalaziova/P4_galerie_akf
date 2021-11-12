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
    popisek.textContent = obrazky[p] + " - " + p + " / " + obrazky.length
}

function fotoVpred() {
    if (p < obrazky.length - 1) {
        //if ((sipka.getAttribute('src') == "obrazky/sipka-vpravo.svg") && (p < (obrazky.length - 1))) {
        p++;
        zobrazFoto();
    }
}

function fotoZpet() {
    if (p != 0) {
        //if ((sipka.getAttribute('src') == "obrazky/sipka-vlevo.svg") && p != 0) {
        p--;
        zobrazFoto();
    }
}
