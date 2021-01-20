import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store} from '@ngrx/store';

import { loginAction } from '../../store/actions/login.action';
import { IAppStateInterface } from '../../../types/appState.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<IAppStateInterface>) {

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  submit(): void {
    this.store.dispatch(loginAction({ loginRequest: this.form.value }));
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
}
