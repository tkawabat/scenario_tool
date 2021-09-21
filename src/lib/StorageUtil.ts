

class StorageUtil {
    valid: boolean;

    constructor() {
        this.valid = typeof window.localStorage !== 'undefined'
    }

    save(key: string, value: string) {
        if (this.valid) {
            localStorage.setItem(key, value);
        }
    }

    load(key: string) {
        if (this.valid) {
            return localStorage.getItem(key);
        }
    }

    remove(key: string) {
        if (this.valid) {
            return localStorage.removeItem(key);
        }
    }

}

export default new StorageUtil();