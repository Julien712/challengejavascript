// changement des couleurs background et texte 

var colorWell

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.addEventListener("input", updateFirst, false);
    colorText.addEventListener("change", updateAll, false);
}

function updateFirst(color) {
    document.body.style.background = color.target.value;
}

function updateAll(color) {
    document.body.style.color = color.target.value;
}

// Vérification ou de validation des données du formulaire avec JS

document.getElementById("email").addEventListener("change", function (e) {
    console.log("L\'email est : " + e.target.value)
});

document.getElementById("nameproduit").addEventListener("change", function (e) {
    console.log("Le nom est : " + e.target.value)
});

document.getElementById("categorie").addEventListener("change", function (e) {
    console.log("Categorie choisie : " + e.target.value);
});


document.getElementById("description").addEventListener("change", function (e) {
    console.log("Description du produit : " + e.target.value)
});

document.getElementById("prix").addEventListener("change", function (e) {
    console.log("Prix du produit : " + e.target.value)
});

document.getElementById("don").addEventListener("change", function (e) {
    console.log("Faire un don : " + e.target.checked);
});

document.getElementById('don').onchange = function() {
    document.getElementById('prix').disabled = this.checked;
};

document.getElementById("autocomplete").addEventListener("change", function (e) {
    console.log("L'adresse du produit : " + e.target.value)
});

function popUp() {
    var txt;
    var r = confirm("Le produit a bien été enregistré");
}