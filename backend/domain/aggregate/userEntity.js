import InvalidArgumentError from '../errors/invalidArgumentError';

export default class UserEntity {
  id;
  email;
  saltHash;
  storedHash;
  name;
  contact;

  constructor(email, saltHash, storedHash, name, contact) {
    this.email = email;
    this.saltHash = saltHash;
    this.storedHash = storedHash;
    this.name = name;
    this.contact = contact;

    this.validateEntity();
  }

  updateContact(contact) {
    this.validateContact(contact);
    this.contact = contact;
  }

  updatePassword(password) {
    this.validatePassword(password);
    this.password = password;
  }

  validateEntity() {
    UserEntity.validateEmail(this.email);
    this.validateSaltHash(this.saltHash);
    this.validateStoredHash(this.storedHash);
    this.validateName(this.name);
    this.validateContact(this.contact);
  }

  static validateEmail(email) {
    const matched = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    if (!email || !matched) {
      throw new InvalidArgumentError(
        'email argument cannot be null and must be an email',
      );
    }
  }

  validatePassword(password) {
    if (!password || password === '') {
      throw new InvalidArgumentError(
        'password argument cannot be null or empty',
      );
    }
  }

  validateSaltHash(saltHash) {
    if (!saltHash) {
      throw new InvalidArgumentError('saltHash argument cannot be null');
    }
  }

  validateStoredHash(storedHash) {
    if (!storedHash) {
      throw new InvalidArgumentError('storedHash argument cannot be null');
    }
  }

  validateName(name) {
    if (!name) {
      throw new InvalidArgumentError('name argument cannot be null');
    }
  }

  validateContact(contact) {
    if (!contact) {
      throw new InvalidArgumentError('contact argument cannot be null');
    }
  }
}
