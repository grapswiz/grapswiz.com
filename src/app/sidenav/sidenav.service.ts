import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SidenavService {
  _toggle = new EventEmitter();

  constructor() { }

  toggle() {
    this._toggle.emit();
  }
}
