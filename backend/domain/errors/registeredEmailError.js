export default class RegisteredEmailError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
