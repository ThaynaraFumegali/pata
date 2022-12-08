export default class LoginService {
  userService;
  encryptionService;

  constructor(userService, encryptionService) {
    this.userService = userService;
    this.encryptionService = encryptionService;
  }

  async canAccess(userLoginInput) {
    if (!userLoginInput) {
      return false;
    }
    const userEntity = await this.userService.getToLogin(userLoginInput.email);
    if (!userEntity) {
      return false;
    }
    const {saltHash, storedHash} = userEntity;
    return this.encryptionService.decrypt(
      userLoginInput.password,
      saltHash,
      storedHash,
    );
  }
}
