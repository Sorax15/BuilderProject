import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffects } from './store/effects/login.effects';
import { CurrentEffect } from './store/effects/current.effect';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { PersistenceService } from '../services/persistence.service';
import { CurrentUserService } from './services/currentUser.service';
import { loginReducer} from './store/reducers/login.reducer';
import { registerReducer } from './store/reducers/register.reducer';
import { currentReducer } from './store/reducers/current.reducer';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    EffectsModule.forFeature([LoginEffects, RegisterEffect, CurrentEffect]),
    StoreModule.forFeature('auth', { registerReducer, loginReducer, currentReducer }),
    HttpClientModule
  ],
  providers: [RegisterService, PersistenceService, LoginService, CurrentUserService]
})
export class AuthModule { }
