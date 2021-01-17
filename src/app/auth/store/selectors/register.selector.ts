import {createFeatureSelector, createSelector} from '@ngrx/store';

import { IAuthStateInterface } from '../../types/authState.interface';
import { IAppStateInterface } from '../../../types/appState.interface';

export const registerFeatureSelector = createFeatureSelector<IAppStateInterface, IAuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  registerFeatureSelector,
  (state) =>  state.registerReducer.isSubmitting
);
