import AdoptionRegistrationEntity from '../aggregate/adoptionRegistrationEntity';
import ResponsibleEntity from '../aggregate/responsibleEntity';
import AnimaValueObject from '../aggregate/valueObject/animalValueObject';
import ImageValueObject from '../aggregate/valueObject/imageValueObject';
import LocalizationValueObject from '../aggregate/valueObject/localizationValueObject';

export default class AdoptionRegistrationService {
  imageService;
  adoptionRegistrationFactory;

  constructor(imageService, adoptionRegistrationRepositoy) {
    this.imageService = imageService;
    this.adoptionRegistrationRepositoy = adoptionRegistrationRepositoy;
  }

  add(adoptionRegistrationInput) {
    const responsibleEntity = new ResponsibleEntity(
      adoptionRegistrationInput.userId,
      null,
    );
    const base64Image = this.imageService.imageToBase64(
      adoptionRegistrationInput.bufferImage,
    );
    const imageValueObject = new ImageValueObject(base64Image);
    const animalValueObject = new AnimaValueObject(
      adoptionRegistrationInput.race,
      adoptionRegistrationInput.size,
    );
    const localizationValueObject = new LocalizationValueObject(
      adoptionRegistrationInput.city,
      adoptionRegistrationInput.state,
    );
    const adoptionRegistrationEntity = new AdoptionRegistrationEntity(
      responsibleEntity,
      imageValueObject,
      animalValueObject,
      localizationValueObject,
    );

    console.log('Tudo certo');

    return this.adoptionRegistrationRepositoy.add(adoptionRegistrationEntity);
  }

  getByIdentifier(id) {
    return this.adoptionRegistrationRepositoy.getById(id);
  }

  getByLocalization(localizationInput) {
    return this.adoptionRegistrationRepositoy.getByStateAndCity(
      localizationInput.state,
      localizationInput.city,
    );
  }
}
