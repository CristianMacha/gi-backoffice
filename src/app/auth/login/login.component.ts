import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'gi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public showAlert: boolean = false;
  public hidePassword: boolean = true;

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginFormBuilder();
  }

  private loginFormBuilder(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public handleSignin(): void {
    const isInvalid = this.loginForm.invalid;
    isInvalid ? this.loginForm.markAllAsTouched() : this.signin();
  }

  private signin(): void {
    this.loading = true;
    this.showAlert = false;

    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authServices.signin(email, password)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        resp => {
          if (resp) {
            this.router.navigateByUrl('backoffice');
          } else {
            this.showAlert = true;
          }
        },
        err => this.showAlert = true,
      );
  }

}
