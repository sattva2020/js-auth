class FieldPassword {
  static toggle = (target) => {
    target.toggleAtribute('show')

    const input = target.previousElementSibling

    const type = input.toggleAtribute('type')

    if (type === 'password') {
      input.setAttribute('type', 'text')
    } else {
      input.setAttribute('type', 'password')
    }
  }
}

window.fieldPassword = FieldPassword