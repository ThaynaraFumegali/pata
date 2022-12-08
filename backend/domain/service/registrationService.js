import UserEntity from '../aggregate/userEntity';
import ContactValueObject from '../aggregate/valueObject/contactValueObject';
import NameValueObject from '../aggregate/valueObject/nameValueObject';
import RegisteredEmailError from '../errors/registeredEmailError';

export default class RegistrationService {
  constructor(userService, encryptionService) {
    this.userService = userService;
    this.encryptionService = encryptionService;
  }

  async register(userRegistrationInput) {
    const email = userRegistrationInput.email;
    UserEntity.validateEmail(email);
    const storedUser = await this.userService.getToLogin(email);

    if (storedUser) {
      throw new RegisteredEmailError(
        `The ${email} email has already been registered`,
      );
    }

    const {salt, hash} = this.encryptionService.encrypt(
      userRegistrationInput.password,
    );
    const nameValueObject = new NameValueObject(
      userRegistrationInput.firstName,
      userRegistrationInput.lastName,
    );
    const contactValueObject = new ContactValueObject(
      userRegistrationInput.ddd,
      userRegistrationInput.number,
    );
    const user = new UserEntity(
      email,
      salt,
      hash,
      nameValueObject,
      contactValueObject,
    );

    await this.userService.add(user);
  }
}
