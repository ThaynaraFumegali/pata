import CryptoJS from 'crypto-js';

export default class EncryptionService {
  constructor() {}

  encrypt(password) {
    const algorithm = CryptoJS.algo.SHA512.create();
    algorithm.update(password, CryptoJS.enc.Utf8);
    const salt = 'AlgumaChaveAleatoriaASerImplementada';
    algorithm.update(salt, CryptoJS.enc.Utf8);
    const hash = algorithm.finalize().toString(CryptoJS.enc.Hex);
    return {
      salt,
      hash,
    };
  }

  //   encrypt(password) {
  //     const salt = this.generateSalt();
  //     const hash = createHmac('sha512', salt);
  //     hash.update(password);
  //     return {
  //       salt,
  //       hash: hash.digest(),
  //     };
  //   }

  //   decrypt(password, saltHash, storedHash) {
  //     const hash = createHmac('sha512', saltHash);
  //     hash.update(password);
  //     const createdHash = hash.digest();

  //     return createdHash.toString('hex') === storedHash.toString('hex');
  //   }

  //   generateSalt() {
  //     return randomBytes(16);
  //   }
}
