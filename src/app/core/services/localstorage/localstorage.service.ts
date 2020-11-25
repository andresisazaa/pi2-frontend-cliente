import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  get(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  set(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
