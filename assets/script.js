//dichiaro le variabili che andrò a modificare
const button = document.getElementById(`button`)
const lampOff = document.getElementById(`lampOff`)
const lampOn = document.getElementById(`lampOn`)

//definisco la funzione del bottone
button.addEventListener(`click`, function() {
  if (button.innerHTML.includes(`ON`)) {
    button.innerHTML = `OFF`
    //aggiungo lo switch di immagini
    lampOff.classList.add(`d-none`)
    lampOn.classList.remove(`d-none`)
  }
    else {
      button.innerHTML = `ON`
      lampOff.classList.remove(`d-none`)
      lampOn.classList.add(`d-none`)
    }
}
)
