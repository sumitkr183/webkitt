export const storage = {
  set: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  get: (key: string) => {
    return localStorage.getItem(key);
  },
  delete: (key: string) => {
    localStorage.removeItem(key);
  },
  deleteAll: () => {
    localStorage.clear();
  },
};
