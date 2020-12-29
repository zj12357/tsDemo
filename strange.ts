/*
 * @Version:  ;
 * @Description:  ;
 * @Autor: Stock
 * @Date: 2020-12-24 00:36:59
 */
export class StorageService {
    constructor() { }

    setItem<T>(key: string, item: T): void {
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem<T>(key: string): T {
        let data: any = localStorage.getItem(key);
        if (!data) return null;

        let obj: T;

        try {
            obj = <T>JSON.parse(data);
        } catch  (error) {
            obj = null;
        }

        return obj
    }
}