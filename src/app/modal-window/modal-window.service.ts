import { Injectable } from '@angular/core';
import {ModalWindowComponent} from './modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  private modals: any[] = [];

  constructor() { }

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    const modal: ModalWindowComponent = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  close(id: string) {
    const modal: ModalWindowComponent = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }

}
