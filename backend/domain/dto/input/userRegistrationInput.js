export default class UserRegistrationInput {
  email;
  password;
  firstName;
  lastName;
  ddd;
  number;

  constructor(email, password, firstName, lastName, ddd, number) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.ddd = ddd;
    this.number = number;
  }
}
