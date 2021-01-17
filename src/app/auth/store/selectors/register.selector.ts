import {createFeatureSelector, createSelector} from '@ngrx/store';

import { IAppStateInterface } from '../../../types/appState.interface';
import { IAuthStateInterface } from '../../types/authState.interface';

export const registerFeatureSelector = createFeatureSelector<IAppStateInterface, IAuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  registerFeatureSelector,
  (state: IAuthStateInterface) => state.isSubmitting
);
