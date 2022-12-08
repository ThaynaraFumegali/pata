import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

export default class SqliteContext {
  // sqlite;

  // constructor() {
  //   this.sqlite = require('sqlite3').verbose();
  // }

  constructor() {}

  createDatabase() {
    // return new Promise((resolve, reject) => {
    //   const database = new this.sqlite.Database(
    //     './infrastructure/database/relational/sqlite/pata.sqlite',
    //     error => {
    //       if (error) {
    //         reject(error);;
    //       }
    //     },
    //   );;

    //   resolve(database);;
    // });;

    return openDatabase({
      name: 'pata.db',
      location: 'default',
    });
  }

  // // closeDatabase(database) {
  // //   return new Promise((resolve, reject) => {
  // //     database.close(error => {
  // //       if (error) {
  // //         reject(error);;
  // //       }
  // //       resolve();;
  // //     });;
  // //   });;
  // // }

  // run(database, sql, params) {
  //   // return new Promise((resolve, reject) => {
  //   //   database.run(sql, params, error => {
  //   //     if (error) {
  //   //       reject(error);
  //   //     }
  //   //     resolve();
  //   //   });
  //   // });

  //   return database.executeSql(sql, params);
  // }

  run(database, sql, params) {
    return database.executeSql(sql, params);
  }

  get(database, sql, params) {
    // return new Promise((resolve, reject) => {
    //   database.get(sql, params, (error, row) => {
    //     if (error) {
    //       reject(error);
    //     }
    //     resolve(row);
    //   });
    // });

    return database.executeSql(sql, params);
  }

  // getAll(database, sql, params) {
  //   // return new Promise((resolve, reject) => {
  //   //   database.all(sql, params, (error, rows) => {
  //   //     if (error) {
  //   //       reject(error);
  //   //     }

  //   //     resolve(rows);
  //   //   });
  //   // });

  //   return database.executeSql(sql, params);
  // }
}
