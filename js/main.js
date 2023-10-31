import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, IMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = e => AlertError.close()
inputWeight.oninput = e => AlertError.close()

form.onsubmit = (e) => {
    e.preventDefault()

    const weight = Number(inputWeight.value) 
    const height = Number(inputHeight.value)

    if(notNumber(weight)) {
        AlertError.open()
        inputWeight.select()
        return;
    }

    if(notNumber(height)) {
        AlertError.open()
        inputHeight.select()
        return;
    }

    AlertError.close()

    const imc = IMC(weight, height)
    console.log('imc', imc)

    Modal.displayMessage(`Your IMC is ${imc}`)
}
