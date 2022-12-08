import UserEntity from '../../domain/aggregate/userEntity';

import ContactValueObject from '../../domain/aggregate/valueObject/contactValueObject';

export default class UserRepository {
  context;

  constructor(context) {
    this.context = context;
  }

  async add(user) {
    const database = await this.context.createDatabase();

    const sql = `
        INSERT INTO User (
            Email,
            SaltHash,
            StoredHash,
            Name_FirstName,
            Name_LastName,
            Contact_Ddd,
            Contact_Number
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )`;

    const params = [
      user.email,
      user.saltHash,
      user.storedHash,
      user.name.firstName,
      user.name.lastName,
      user.contact.ddd,
      user.contact.number,
    ];

    return this.context.run(database, sql, params);
  }

  async getById(id) {
    const sql = `
        SELECT *
        FROM User
        WHERE Id = ?`;

    const params = [id];

    return this.get(sql, params);
  }

  async getByEmail(email) {
    const sql = `
        SELECT *
        FROM User
        WHERE Email = ?`;

    const params = [email];
    return this.get(sql, params);
  }

  async get(sql, params) {
    const database = await this.context.createDatabase();
    const results = await this.context.get(database, sql, params);
    const result = results[0];

    if (result.rows.length === 0) {
      return null;
    }

    const element = result.rows.item(0);
    return this.createUserEntity(element);
  }

  createUserEntity(element) {
    const contactValueObject = new ContactValueObject(
      element.Contact_Ddd,
      element.Contact_Number,
    );
    const userEntity = new UserEntity(
      element.Email,
      element.SaltHash,
      element.StoredHash,
      element.Name_FirstName,
      element.Name_LastName,
      contactValueObject,
    );

    userEntity.id = element.Id;
    return userEntity;
  }
}
