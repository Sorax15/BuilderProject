export class PersistenceService {

  setToken(key: string, data: string): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving local storage', e);
    }
  }

  getToken(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      return null;
    }
  }
}
