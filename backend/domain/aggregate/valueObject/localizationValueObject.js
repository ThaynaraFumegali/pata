import {InvalidArgumentError} from '../../errors/invalidArgumentError';

export default class LocalizationValueObject {
  city;
  state;

  constructor(city, state) {
    this.city = city;
    this.state = state;

    this.validateValueObject();
  }

  validateValueObject() {
    this.validateCity(this.city);
    this.validateState(this.state);
  }

  validateCity(city) {
    if (!city || city === '') {
      throw new InvalidArgumentError('city argument cannot be null and empty');
    }
  }

  validateState(state) {
    if (!state || state === '') {
      throw new InvalidArgumentError('state argument cannot be null and empty');
    }
  }
}
