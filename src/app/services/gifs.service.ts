import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  constructor() {}

  get tagsHistory() {
    return [...this._tagHistory]; // Hago el spread aqui para evitar romper la referenciad de Js de mi propiedad
  }

  searchTag(tag: string): void {
    this._tagHistory.unshift(tag);
  }
}
