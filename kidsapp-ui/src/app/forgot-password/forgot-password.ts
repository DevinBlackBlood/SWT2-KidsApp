import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ForgotPassword {
  forgotPasswordForm: ReturnType<FormBuilder['group']>;

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) return;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const emailValue = this.email?.value;

    setTimeout(() => {
      this.isLoading = false;
      if (emailValue === 'test@example.com') {
        this.successMessage = 'Ein Link zum Zurücksetzen wurde an deine E-Mail gesendet.';
      } else {
        this.errorMessage = 'E-Mail-Adresse nicht gefunden.';
      }
    }, 1500);
  }
}
