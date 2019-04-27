import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.less']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  isEmailFieldValid: boolean = true;

  constructor() { }

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubscribeFormSubmit() {
    console.log(this.isEmailFieldValid)
    console.log(this.subscribeForm.get('email').errors)
    console.log(this.subscribeForm.get('email').touched)
    if (this.subscribeForm.get('email').errors) {
      this.isEmailFieldValid = false;
    } else {
      this.isEmailFieldValid = true;
      this.subscribeForm.reset();
    }
  }

  isRequiredValidation(control: FormControl): {[key: string]: boolean} {
    // console.log(control)
    if (!control.value) {
      return { isRequired: true};
    }
    return null;
  }

}
