import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isSubmittingSelector } from '../../store/selectors/auth.selector';
import { registerAction } from '../../store/actions/register.action';
import { IAppStateInterface } from '../../../types/appState.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent implements OnInit {

  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector));
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<IAppStateInterface>) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  submit(): void {
    this.store.dispatch(registerAction({ registerRequest: this.form.value }));
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      type: new FormControl('client', [Validators.required])
    });
  }
}
