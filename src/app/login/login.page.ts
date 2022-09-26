import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validationMsg = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'El email no es valido' },
    ],
    password: [
      { type: 'required', message: 'El password es requerido' },
      {
        type: 'minLength',
        message: 'El password tiene que tener mas de 3 caracteres',
      },
    ],
  };
  constructor(private fb: FormBuilder) {}

  createFormGroup() {
    return this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
  }

  login(data) {}
}
