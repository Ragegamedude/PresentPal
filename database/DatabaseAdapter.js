import * as SQLite from "expo-sqlite";

export const createOrOpenDatabase = (name) => {
  return SQLite.openDatabaseAsync(name);
}

export const initTables = async (database) => {
  await database.runAsync(`CREATE TABLE IF NOT EXISTS lists
  (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMBER NOT NULL,
    currency NUMBER NOT NULL,
    language TEXT NOT NULL,
    image TEXT NOT NULL,
    link TEXT NOT NULL,
    seller TEXT NOT NULL,
    minAge INTEGER NOT NULL,
    maxAge INTEGER NOT NULL
  );`);
  const tableListsCreated = await database.getAllAsync(`SELECT name FROM sqlite_master WHERE type='table' AND name=?;`, ['lists'],)
  return tableListsCreated !== null && tableListsCreated.length > 0;
}
