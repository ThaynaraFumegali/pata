export default class UserService {
  userRepository;

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async add(userEntity) {
    await this.userRepository.add(userEntity);
  }

  getToLogin(email) {
    return this.userRepository.getByEmail(email);
  }
}
