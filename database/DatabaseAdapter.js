import * as SQLite from "expo-sqlite";

export const createOrOpenDatabase = (name) => {
  return SQLite.openDatabaseAsync(name);
};

export const initTables = async (database) => {
  await database.execAsync(`CREATE TABLE IF NOT EXISTS lists
                            (
                                id
                                INTEGER
                                PRIMARY
                                KEY
                                AUTOINCREMENT,
                                favorite
                                INTEGER,
                                headline
                                TEXT,
                                description
                                TEXT,
                                image
                                TEXT,
                                event_date
                                TEXT,
                                event
                                TEXT,
                                gifts
                                TEXT
                            );`);
};

export const addList = async (database,
    favorite,
    headline,
    description,
    image,
    event_date,
    event,
    gifts
) => {

  try {
    await database.runAsync(
        `INSERT INTO lists (favorite, headline, description, image, event_date,
                            event, gifts)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [favorite, headline, description, image, event_date, event, gifts]
    );

  } catch (error) {
  }
};

export const getLists = async (database) => {
  try {
    const rows = await database.getAllAsync('SELECT * FROM lists') || [];
    let lists = []
    rows.map(item => (lists.push({
      ...item,
      favorite: Boolean(item.favorite), // convert 0/1 to true/false
      gifts: item.gifts ? JSON.parse(item.gifts) : [], // parse JSON string to array
    })));

    return lists;
  } catch (error) {
    console.error('Error fetching lists:', error);
    return [];
  }
};
