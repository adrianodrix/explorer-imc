export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper h2'),
    btnClose: document.querySelector('.modal-wrapper .close'),
    open: () => Modal.wrapper.classList.add('open'),
    close: () => Modal.wrapper.classList.remove('open'),
    displayMessage: message => {
        Modal.message.innerText = message
        Modal.open()
    }
}

Modal.btnClose.onclick = (e) => Modal.close()

window.addEventListener('keydown', e => {
  if (e.key == 'Escape') {
    Modal.close()
  }
})
