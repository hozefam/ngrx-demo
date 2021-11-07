import { setLoadingSpinner } from './../../store/Shared/shared.actions';
import { signUpStart } from './../state/auth.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignUp() {
    if (!this.signUpForm.valid) {
      return;
    }

    const { email, password } = this.signUpForm.value;

    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signUpStart({ email, password }));
  }
}
