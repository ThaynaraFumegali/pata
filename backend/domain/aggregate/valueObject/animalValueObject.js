import {InvalidArgumentError} from '../../errors/invalidArgumentError';

import {ESizeType} from '../../enums/sizeType';

export default class AnimaValueObject {
  race;
  size;

  constructor(race, size) {
    this.race = race;
    this.size = size;
    this.validateValueObject();
  }

  validateValueObject() {
    this.validateRace(this.race);
    this.validateSize(this.size);
  }

  validateRace(race) {
    if (!race || race === '') {
      throw new InvalidArgumentError('race argument cannot be null or empty');
    }
  }

  validateSize(size) {
    const values = Object.values(ESizeType);
    if (!size || !values.includes(size)) {
      throw new InvalidArgumentError(
        `size argument cannot be null and must have one of the following values: ${values.join(
          ', ',
        )}`,
      );
    }
  }
}
