import * as SQLite from "expo-sqlite";

export const createOrOpenDatabase = (name) => {
  console.log("Open or create database")
  return SQLite.openDatabaseAsync(name);
}

export const initTables = async (database) => {
  await database.runAsync(`CREATE TABLE IF NOT EXISTS gifts (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL);`);
  await database.execAsync(`INSERT INTO gifts (id,name) VALUES (0,$name1);
    INSERT INTO gifts (id,name) VALUES (1,$name2);
    INSERT INTO gifts (id,name) VALUES (2,$name);`)
  const allRows = await database.getAllAsync('SELECT * FROM gifts');
  return allRows !== null && allRows.length > 0;
}
