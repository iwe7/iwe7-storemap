import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Iwe7StoremapService {
  map: Map<string, Map<string, Action>> = new Map();
  constructor() { }

  set(name: string, item: Map<string, Action>) {
    this.map.set(name, item);
  }

  get(name: string, action: string): Action {
    const map = this.map.get(name);
    if (map) {
      return map.get(action);
    }
  }
}
