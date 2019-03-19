"use strict"
// Variable liées au DOM
let mass = document.getElementById('mass'),
    distance = document.getElementById('distance'),
    temp = document.getElementById('temp'),
    inputUnit = document.getElementById('input_unit_select'),
    outputUnit = document.getElementById('output_unit_select'),
    btnConfirm = document.getElementById('button_convert'),    
    btnReset = document.getElementById('button_reset'),
    resume = document.getElementById('resume'),
    error = document.getElementById('error');


// Variables d'unités de mesure CLD

let massUnits = unite_masse_libelle.split("|");
let distanceUnits = unite_longueur_libelle.split("|");
let tempUnits = unite_temperature_libelle.split("|");
// let massUnits = ["Milligramme", "Gramme", "Kilogramme", "Tonne"];
//let tempUnits = ["Celcius", "Kelvin", "Fahrenheit"];
//let distanceUnits = ["Millimètre", "Centimètre", "Mètre", "Kilomètre", "Année Lumière"];


function displayUnit(unit) {
    // TODO recuperer liste des unites disponibles    

    //A chaque clic sur un choix de type d'unité, la liste doit s'effacer
    removeOption(inputUnit)
    removeOption(outputUnit)

    // Ensuite on créé les balises pour chaque éléments des balises sélect d'entrée et de sortie
    createOptionTag(unit, inputUnit)
    createOptionTag(unit, outputUnit)
}

// fonction qui enlève les éléments de la liste déroulante
function removeOption(select) {
    for (let i in select) {
        select.remove(i)
    }
}

// Fonction qui crée des balises <option> dans le menu déroulant sélect
function createOptionTag(elt, target) {
    for (let i = 0; i < elt.length; i++) {
        let tagOption = document.createElement('option');
        let tag = target.appendChild(tagOption);
        tag.value = elt[i];
        tag.textContent = elt[i];
    }
}

// TODO fonction d'ajout de type de mesure
function addAConvertingChoice(attributeId, attributeOnclick, attributeValue) {
    // ajouter un bouton
    let parentDiv = document.getElementById('buttons_type')
    let buttonToAdd = document.createElement('button')
    parentDiv.appendChild(buttonToAdd)
    buttonToAdd.setAttribute('id', attributeId)
    buttonToAdd.setAttribute('onclick', attributeOnclick)
    buttonToAdd.textContent = attributeValue
    // ajouter les propriétés au click
}
// test d'ajout de bouton
//addAConvertingChoice('volume', "displayUnit(massUnits)", 'Volume')

// Fonction qui résume les éléments demandés dans la balise resume
function showSelectedInput(e) {
    e.preventDefault()
    // recupérer les données input/ decimales/ valeur/output
    let value = document.getElementById("input_number_area").value
    let dec = document.getElementById("input_decimal_area").value
    let degrees = ((inputUnit.value == 'Celcius') || (inputUnit.value == 'Fahrenheit') || (inputUnit.value == 'Kelvin'))
    //les afficher dans la balise #resume
    let msg = `Voici la converion de ${value} ${(degrees)? 'degrés ' : ''}${inputUnit.value}${((value<2)||(degrees))? '' : 's'}  en ${(degrees)? 'degrés ' : ''}${outputUnit.value} avec ${dec} chiffre${(dec>1)? 's' : ''} après la virgule.`

    resume.textContent = msg
}

// Fonction pour réinitailiser les champs de donnés et les différents messages
function resetFields () {
    // on vide la liste des options
    removeOption(inputUnit)
    removeOption(outputUnit)
    // on efface le message de résumé
    resume.textContent = ''
    // on efface les messages d'erreur
    error.textContent = ''
}

btnConfirm.addEventListener('click', showSelectedInput);
btnReset.addEventListener('click', resetFields);


