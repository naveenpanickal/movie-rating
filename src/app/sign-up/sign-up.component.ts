import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'user-data': new FormGroup({
        'full-name': new FormControl(null, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9#?!@$%^&*-]{8,}'),
      ]),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
