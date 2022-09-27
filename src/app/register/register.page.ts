/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validationMsg = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'El email no es valido' },
    ],
    password: [
      { type: 'required', message: 'El password es requerido' },
      {
        type: 'minlength',
        message: 'El password tiene que tener mas de 5 caracteres',
      },
    ],
    nombre: [{ type: 'required', message: 'El nombre es requerido' }],
    apellido: [{ type: 'required', message: 'El apellido es requerido' }],
  };
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private _authSvc: AuthService,
    private _router: Router,
    private _storage: Storage
  ) {
    this._storage.create();
  }

  createFormGroup() {
    return this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
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
    this.registerForm = this.createFormGroup();
  }

  register(credentials) {
    console.log(credentials);
  }
}
