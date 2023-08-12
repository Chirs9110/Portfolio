//Kijelöések
function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}



function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.lenagth; i++) {
        elemLista[i].checked = false;
    }
}

//Kijelölés megfordítása
kiJeloles.addEventListener("click", deAktivaloFolyamat);
function deAktivaloFolyamat() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if (elemLista[i].checked == true) {
            elemLista[i].checked = false;
        }
        else {
            elemLista[i].checked = true;
        }

    }
}


//Táblázat csíkozás
csikozasKiBe.addEventListener("click", () => {
    let leIras = document.querySelector("#szovegResz");
    let tabla = document.querySelector("table");
    tabla.classList.toggle("table-striped");
    active = !active
    if (active) {
        tabla.classList.add('active')
        leIras.innerHTML = 'Táblázat Sor Kiemelés OFF'
    } else {
        tabla.classList.remove('active')
        leIras.innerHTML = 'Táblázat Sor Kiemelés ON'
    }
})

const tablaObjektum = document.querySelector("table");
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const foCim = document.querySelector('#foCim');
const userForm = document.querySelector('#userForm');
const cimkeAdatok = document.querySelectorAll("label");
const adatFeltoltes = document.querySelector('#formEllenorzes');
const kapcsoloTabla = document.querySelector('#kapcsoloTabla');
const tablaKapcsolok = document.querySelectorAll('span');
const tesztSorGomb = document.querySelector('#tesztSor');
const tesztSorKiGomb = document.querySelector('#tesztSorKi')
let paragraf = document.querySelector('.paragraf');

//Dark-mode - Light-mode 

function darkMode() {

    tablaObjektum.classList.remove("table-light");
    tablaObjektum.classList.add("table-dark");

    h1.classList.remove("text-dark");
    h1.classList.add("text-light");

    h2.classList.remove("text-dark");
    h2.classList.add("text-light");

    h3.classList.remove("text-dark");
    h3.classList.add("text-light");

    foCim.style.backgroundColor = "black"

    userForm.classList.remove("bg-light");
    userForm.classList.add("bg-dark");

    document.body.style.backgroundImage = "linear-gradient(to right, black, gray, black)";

    for (let i = 0; i < cimkeAdatok.length; i++) {
        cimkeAdatok[i].classList.remove("text-dark");
        cimkeAdatok[i].classList.add("text-light");
    }
    adatFeltoltes.classList.remove("btn-success");
    adatFeltoltes.classList.add("btn-outline-success");

    kapcsoloTabla.classList.remove("bg-light");
    kapcsoloTabla.classList.add("bg-dark");

    for (let i = 0; i < tablaKapcsolok.length; i++) {
        tablaKapcsolok[i].classList.remove("text-dark");
        tablaKapcsolok[i].classList.add("text-light");
    }

    tesztSorGomb.classList.remove("btn-success");
    tesztSorGomb.classList.add("btn-outline-success");

    tesztSorKiGomb.classList.remove("btn-danger");
    tesztSorKiGomb.classList.add("btn-outline-danger");

    paragraf.classList.remove("text-dark");
    paragraf.classList.add("text-light");

}

function lightMode() {

    tablaObjektum.classList.remove("table-dark");
    tablaObjektum.classList.add("table-light");

    h1.classList.add("text-dark");
    h1.classList.remove("text-light");

    h2.classList.add("text-dark");
    h2.classList.remove("text-light");

    h3.classList.add("text-dark");
    h3.classList.remove("text-light");

    foCim.style.backgroundColor = "white"

    userForm.classList.add("bg-light");
    userForm.classList.remove("bg-dark");

    document.body.style.backgroundImage = "linear-gradient(to right, white, gray, white)";

    for (let i = 0; i < cimkeAdatok.length; i++) {
        cimkeAdatok[i].classList.add("text-dark");
        cimkeAdatok[i].classList.remove("text-light");
    }
    adatFeltoltes.classList.add("btn-success");
    adatFeltoltes.classList.remove("btn-outline-success");

    kapcsoloTabla.classList.add("bg-light");
    kapcsoloTabla.classList.remove("bg-dark");

    for (let i = 0; i < tablaKapcsolok.length; i++) {
        tablaKapcsolok[i].classList.add("text-dark");
        tablaKapcsolok[i].classList.remove("text-light");
    }

    tesztSorGomb.classList.add("btn-success");
    tesztSorGomb.classList.remove("btn-outline-success");

    tesztSorKiGomb.classList.add("btn-danger");
    tesztSorKiGomb.classList.remove("btn-outline-danger");

    paragraf.classList.add("text-dark");
    paragraf.classList.remove("text-light");

}


//Dark mode - Light mode kapcsoló

let active = false;
function toggle() {
    let toggle = document.querySelector('.toggle')
    let text = document.querySelector('.text')
    active = !active
    if (active) {
        darkMode();
        toggle.classList.add('active')
        text.innerHTML = 'Dark Mode OFF'
    } else {
        lightMode();
        toggle.classList.remove('active')
        text.innerHTML = 'Dark Mode ON'
    }
}




//Tesztelésre
tesztSor.addEventListener("click", TesztsorBeszuras);
function TesztsorBeszuras() {
    let sor = tablaObjektum.insertRow();

    let vezNevCella = sor.insertCell();
    let kerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    vezNevCella.innerHTML = "<b>Vezetéknév Teszt</b>";
    kerNevCella.innerHTML = "<b>Keresztnév Teszt</b>";
    emailCella.innerHTML = "<b>E-mail teszt</b>";
    telefonCella.innerHTML = "<b>Mobil Teszt</b>";
    beosztasCella.innerHTML = "<b>Beosztás Teszt</b>";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";

}

tesztSorKi.addEventListener("click", TesztsorTorles);
function TesztsorTorles() {
    tablaObjektum.deleteRow(7);
}


//Regisztráció
function ujRegisztracio() {
    let sor = tablaObjektum.insertRow();
    let vezNevCella = sor.insertCell();
    let kerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    vezNevCella.innerHTML = document.querySelector("#vezNev").value;
    kerNevCella.innerHTML = document.querySelector("#kerNev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beosztas").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}



//Validálási minta
function vezNevCheck() {
    let nevMinta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
    let ertek = document.querySelector("#vezNev").value;
    if (nevMinta.test(ertek) == true) {
        return true;
    }
    return false;
}

function kerNevCheck() {
    let nevMinta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
    let ertek = document.querySelector("#kerNev").value;
    if (nevMinta.test(ertek) == true) {
        return true;
    }
    return false;
}

function emailCheck() {
    let emailMinta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    let ertek = document.querySelector("#email").value;
    if (emailMinta.test(ertek) == true) {
        return true;
    }
    return false;
}

function telCheck() {
    let telMinta = /([0-9]{3})-([0-9]{4})$/;
    let ertek = document.querySelector("#tel").value;
    if (telMinta.test(ertek) == true) {
        return true;
    }
    return false;
}

formEllenorzes.addEventListener("click", feltoltoMuvelet);
function feltoltoMuvelet() {
    if (vezNevCheck() == true && kerNevCheck() == true && emailCheck() == true && telCheck() == true) {
        show_alert(); ujRegisztracio();
    }
    else {


        if (vezNevCheck() == false) {
            xdialog.alert('⛔️' + '<br><br>' + 'Sikertelen Adatfeltöltés a következő miatt:' + '<br><br>' + 'Nem megfelelő vezetéknév');


        }
        if (kerNevCheck() == false) {
            xdialog.alert('⛔️' + '<br><br>' + 'Sikertelen Adatfeltöltés a következő miatt:' + '<br><br>' + 'Nem megfelelő keresztnév');

        }
        if (emailCheck() == false) {
            xdialog.alert('⛔️' + '<br><br>' + 'Sikertelen Adatfeltöltés a következő miatt:' + '<br><br>' + ' Nem megfelelő e-mail cím');

        }
        if (telCheck() == false) {
            xdialog.alert('⛔️' + '<br><br>' + 'Sikertelen Adatfeltöltés a következő miatt:' + '<br><br>' + 'Nem megfelelő telefonszám');

        }
    }
}
tel.addEventListener("input", kotojelBeilleszto);
function kotojelBeilleszto() {
    let telefonMezo = document.querySelector("#tel").value;
    if (telefonMezo.length == 3) {
        document.querySelector("#tel").value = telefonMezo + "-";
    }
}

function show_alert() {
    xdialog.alert("Sikeres feltöltés! ✅");
}
