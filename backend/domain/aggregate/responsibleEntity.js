import {InvalidArgumentError} from '../errors/invalidArgumentError';

export default class ResponsibleEntity {
  id;
  contact;
  name;

  constructor(id, contact, name) {
    this.id = id;
    this.contact = contact;
    this.name = name;

    this.validateEntity();
  }

  validateEntity() {
    this.validateId(this.id);
  }

  validateId(id) {
    if (!id || typeof id !== 'number') {
      throw new InvalidArgumentError(
        'id argument cannot be null and must be a number',
      );
    }
  }

  validateContact(contact) {
    if (!contact) {
      throw new InvalidArgumentError('contact argument cannot be null');
    }
  }

  validateName(name) {
    if (!name) {
      throw new InvalidArgumentError('name argument cannot be null');
    }
  }
}
