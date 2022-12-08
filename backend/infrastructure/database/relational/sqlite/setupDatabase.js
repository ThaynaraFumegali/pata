export default class SetupDatabase {
  context;

  constructor(context) {
    this.context = context;
  }

  async setup() {
    const database = await this.context.createDatabase();
    database.serialize(() => {
      this.createUserTable(database);
      this.createAdoptionRegistrationTable(database);
    });
    return this.context.closeDatabase(database);
  }

  async createUserTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS [User] (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Email TEXT,
            SaltHash TEXT,
            StoredHash TEXT,
            Name_FirstName TEXT,
            Name_LastName TEXT,
            Contact_Ddd TEXT,
            Contact_Number TEXT
        )`;
    const database = await this.context.createDatabase();
    return this.context.run(database, sql, []);
  }

  async createAdoptionRegistrationTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS [AdoptionRegistration] (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Responsible_Id INTEGER,
            Image_Base64Image TEXT,
            Localization_City TEXT,
            Localization_State TEXT,
            Animal_Race TEXT,
            Animal_Size Text,
            FOREIGN KEY (Responsible_Id) REFERENCES User (Id)
        )`;
    const database = await this.context.createDatabase();
    return this.context.run(database, sql, []);
  }
}
