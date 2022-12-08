import {InvalidArgumentError} from '../errors/invalidArgumentError';

export default class AdoptionRegistrationEntity {
  id;
  responsible;
  image;
  animal;
  localization;

  constructor(responsible, image, animal, localization) {
    this.responsible = responsible;
    this.image = image;
    this.animal = animal;
    this.localization = localization;

    this.validateEntity();
  }

  updateImage(image) {
    this.validateImage(image);
    this.image = image;
  }

  updateLocalization(localization) {
    this.validateLocalization(localization);
    this.localization = localization;
  }

  validateEntity() {
    this.validateResponsible(this.responsible);
    this.validateImage(this.image);
    this.validateAnimal(this.animal);
    this.validateLocalization(this.localization);
  }

  validateResponsible(responsible) {
    if (!responsible) {
      throw new InvalidArgumentError('responsible argument cannot be null');
    }
  }

  validateImage(image) {
    if (!image) {
      throw new InvalidArgumentError('image argument cannot be null');
    }
  }

  validateAnimal(animal) {
    if (!animal) {
      throw new InvalidArgumentError('animal argument cannot be null');
    }
  }

  validateLocalization(localization) {
    if (!localization) {
      throw new InvalidArgumentError('localization argument cannot be null');
    }
  }
}
