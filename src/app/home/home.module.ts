import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './components/home/home.component';
import { CurrentUserService } from '../auth/services/currentUser.service';
import { HomeGuard } from './guards/home.guard';
import { homeReducer } from './store/reducers/home.reducer';

const routers: Routes = [
  /**
   * Home page
   */
  {
    path: '', component: HomeComponent, canActivate: [HomeGuard]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers),
    StoreModule.forFeature('home', homeReducer)
  ],
  providers: [
    CurrentUserService,
    HomeGuard
  ]
})

export class HomeModule {}
