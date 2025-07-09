//dichiaro le variabili che andrò a modificare
const button = document.getElementById(`button`)
const lampOff = document.getElementById(`lampOff`)
const lampOn = document.getElementById(`lampOn`)

//definisco la funzione del bottone
button.addEventListener(`click`, function() {
  if (button.innerHTML.includes(`ON`)) {
    button.innerHTML = `OFF`
  }
    else {button.innerHTML = `ON`}
}
)
