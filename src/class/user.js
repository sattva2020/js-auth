class User {
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }

  static #list = []

  constructor({ email, password, role }) {
    this.email = email
    this.password = password
    this.role = User.#convertRole(role)
  }

  static #convertRole = (role) => {
    role = Number(role)

    if (isNaN(role)) {
      role = User.USER_ROLE.USER
    }

    role = Object.values(User.USER_ROLE).includes(role)
      ? role
      : User.USER_ROLE.USER

    return role
  }

  static create(data) {
    const user = new User(data)

    // console.log(user)

    User.#list.push(user)

    // console.log(this.#list)

    return user
  }

  static getByEmail(email) {
    return (
      User.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }
}

module.exports = { User }
