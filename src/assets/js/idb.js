import { openDB } from 'idb';
const dbPromise = openDB('todoList', 1, {
  upgrade(db) {
    db.createObjectStore('id');
  },
});

async function get(key) {
  return (await dbPromise).get('id', key);
}

async function set(key, val) {
  return (await dbPromise).put('id', val, key);
}

async function keys() {
  return (await dbPromise).id('id');
}
async function getAll() {
  return (await dbPromise).getAll('id');
}

export { get, set, keys, getAll };
