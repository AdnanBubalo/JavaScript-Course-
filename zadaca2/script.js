
function Unos(osoba) {

    let unosJMBG, unosIme, unosPrezime;

    do {
        unosJMBG = prompt("Unesite JMBG (13 brojeva): ");
        if(!ProvjeriJMBG(unosJMBG))
            alert("Greska u unosu JNBG");
    } while(!ProvjeriJMBG(unosJMBG))
    osoba.JMBG = unosJMBG;

    do {
        unosIme = prompt("Unesite ime (min 3 znaka i bez brojeva): ");
        if(!ProvjeriImePrezime(unosIme))
            alert("Greska u unosu imena!");
    } while(!ProvjeriImePrezime(unosIme))
    osoba.Ime = unosIme;
    
    do {
        unosPrezime = prompt("Unesite prezime (min 3 znaka i bez brojeva): ");
        if(!ProvjeriImePrezime(unosPrezime))
            alert("Greska u unosu prezimena!");
    } while(!ProvjeriImePrezime(unosPrezime))
    osoba.Prezime = unosPrezime;
}

function ProvjeriJMBG(jmbg) {
    if(jmbg.length != 13 || !parseInt(jmbg))
        return 0;
    return 1;
}

function ProvjeriImePrezime(ime) {
    if(ime.length < 3)
        return 0;
    for(let i in ime)
        if(!isNaN(parseInt(ime[i])))
            return 0;
    return 1;
}

let osoba = {};

Unos(osoba);

console.log(osoba);