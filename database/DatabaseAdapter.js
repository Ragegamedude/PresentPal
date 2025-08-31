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
  console.log("in adapter")
  try {
    await database.runAsync(`INSERT INTO lists (favorite, headline, description, image, event_date, event, gifts)
                            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [favorite, headline, description, image, event_date, event, gifts]
    );
  }catch(err) {
    console.log(err);
  }
};

export const editList = async (database, id, favorite, headlineText, descriptionText, imageText, dateText, eventText, gifts) => {
  await database.runAsync(
    `UPDATE lists SET favorite = ?, headline = ?, description = ?, image = ?, event_date = ?, event = ?, gifts = ? WHERE id = ?`,
    favorite ? 1 : 0, headlineText, descriptionText, imageText, dateText, eventText, gifts, id
  );
}

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
