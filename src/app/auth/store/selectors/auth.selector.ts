import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthStateInterface } from '../../types/authState.interface';
import { IAppStateInterface } from '../../../types/appState.interface';

export const authFeatureSelector = createFeatureSelector<IAppStateInterface, IAuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state) =>  state.isSubmitting
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state) => state.isLoggedIn
);
