export class LocalStorageCRUD {
  // 一件取得
  getItem(key='default') {
    return localStorage.getItem(key);
  }

  // 全件取得
  getAllItems() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items[key] = localStorage.getItem(key);
    }
    return items;
  }

  // 一件登録
  setItem(value, key='default') {
    localStorage.setItem(key, value);
  }

  // 一件削除
  removeItem(key='default') {
    localStorage.removeItem(key);
  }

  // 全件削除
  clearAll() {
    localStorage.clear();
  }
}
