import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { CommonModule } from '@angular/common';
import { f } from "../../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
       MatIconModule,
],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  isLoading = false;
errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.error = error.message || 'Login failed';
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToForgotPassword() {
  this.router.navigate(['/forgot-password']);
}
}