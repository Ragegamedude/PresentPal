export const initTables = async (database) => {
  await database.execAsync(`CREATE TABLE IF NOT EXISTS lists
                                  (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                   favorite INTEGER,
                                   headline TEXT,
                                   description TEXT,
                                   image TEXT,
                                   event_date TEXT,
                                   event TEXT,
                                   gifts TEXT);`);
};

export const addList = async (database, favorite, headline, description, image, event_date, event, gifts) => {
  await database.runAsync(`INSERT INTO lists (favorite, headline, description, image, event_date, event, gifts)
                            VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [favorite, headline, description, image, event_date, event, gifts]
  );
};

export const deleteList = async (database, id) => {
  await database.runAsync("DELETE FROM lists WHERE id = ?", id);
};

export const toggleFavorite = async (database, id, favorite) => {
  await database.runAsync("UPDATE lists SET favorite = ? WHERE id = ?", !favorite, id);
};

export const getLists = async (database) => {
  const rows = await database.getAllAsync("SELECT * FROM lists") || [];
  let lists = [];
  rows.map(item => (lists.push({
    ...item,
    favorite: item.favorite === 1, // convert 0/1 to true/false
    gifts: item.gifts ? JSON.parse(item.gifts) : [] // parse JSON string to array
  })));
  return lists;
};
