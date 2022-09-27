/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

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

  login(data) {
    this._authSvc
      .loginUser(data)
      .then((res) => {
        this.errorMessage = '';
        this._storage.set('isUserLoggedIn', true);
        this._router.navigate(['/home']);
      })
      .catch((err) => {
        this._storage.set('isUserLoggedIn', false);
        this.errorMessage = err;
      });
  }

  goToRegister() {
    this._router.navigateByUrl('/register');
  }
}
