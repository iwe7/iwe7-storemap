import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Iwe7StoremapService {
  map: Map<string, Map<string, (val: any) => Action>> = new Map();
  constructor() { }

  set(name: string, item: Map<string, (val: any) => Action>) {
    this.map.set(name, item);
  }

  get(name: string, action: string): (val: any) => Action {
    const map = this.map.get(name);
    if (map) {
      const actionFn = map.get(action);
      if (actionFn) {
        return actionFn;
      }
    }
    return (val: any) => null;
  }
}
