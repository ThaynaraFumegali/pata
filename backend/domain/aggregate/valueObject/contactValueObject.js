import InvalidArgumentError from '../../errors/invalidArgumentError';

export default class ContactValueObject {
  constructor(ddd, number) {
    this.ddd = ddd;
    this.number = number;

    this.validateValueObject();
  }

  validateValueObject() {
    this.validateDdd(this.ddd);
    this.validateNumber(this.number);
  }

  validateDdd(ddd) {
    if (!ddd || ddd.length !== 2 || typeof parseInt(ddd, 10) !== 'number') {
      throw new InvalidArgumentError(
        'the ddd argument cannot be null and must have 2 digits',
      );
    }
  }

  validateNumber(number) {
    if (
      !number ||
      this.number.length !== 9 ||
      typeof parseInt(number, 10) !== 'number'
    ) {
      throw new InvalidArgumentError(
        'the number argument cannot be null and must have 9 digits',
      );
    }
  }
}
