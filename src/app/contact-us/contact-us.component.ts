import { Component, OnInit } from '@angular/core';
import {ModalWindowService} from '../modal-window/modal-window.service';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {

  contactUsId: string = null;
  callBackForm: FormGroup;
  isPhoneFieldValid: boolean = true;

  constructor(private modalWindowService: ModalWindowService) { }

  ngOnInit() {
    this.callBackForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(null, [Validators.required])
    });
  }

  openModal(id: string) {
    this.contactUsId = id;
    this.modalWindowService.open(id);
  }

  closeModal(id: string) {
    this.contactUsId = null;
    this.modalWindowService.close(id);
  }

  onCallBackFormSubmit(id: string) {
    if (this.callBackForm.get('phone').errors) {
      this.isPhoneFieldValid = false;
    } else {
      this.isPhoneFieldValid = true;
      this.callBackForm.reset();
      this.closeModal(id);
    }
  }

}
