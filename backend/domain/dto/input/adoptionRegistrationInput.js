export default class AdoptionRegistrationInput {
  userId;
  bufferImage;
  race;
  size;
  city;
  state;

  constructor(userId, bufferImage, race, size, city, state) {
    this.userId = userId;
    this.bufferImage = bufferImage;
    this.race = race;
    this.size = size;
    this.city = city;
    this.state = state;
  }
}
