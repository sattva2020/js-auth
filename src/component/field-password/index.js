class FieldPassword {
  static toggle = (target) => {
    target.toggleAtribute('show')

    const input = target.previousElementSibling

    const type = input.toggleAtribute('type')

    if (type === 'password') {
      input.setAttribute('type', 'text')
    } else {
      inputsetAttribute('type', 'password')
    }
  }
}

window.fieldPassword = FieldPassword